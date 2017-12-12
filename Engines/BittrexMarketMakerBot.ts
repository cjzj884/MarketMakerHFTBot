import BittrexBroker from "../Brokers/BittrexBroker";
import IBroker, { OPEN_ORDER_EVENTS } from "../Brokers/IBroker";

import * as CONFIG from "../Config/CONFIG";

import BittrexTickEventEmitter from "../MarketDataEventEmitters/BittrexTickEventEmitter";
import ITickEventEmitter from "../MarketDataEventEmitters/ITickEventEmitter";

import OutAskManager from "../Managers/OutAskManager";
import OutBidManager from "../Managers/OutBidManager";
import OpenOrdersStatusDetector from "../MarketEventDetectors/OpenOrdersStatusDetector";
import OutAskDetector from "../MarketEventDetectors/OutAskDetector";
import OutBidDetector from "../MarketEventDetectors/OutBidDetector";

import BuyFilledEventHandler from "../MarketEventHandlers/BuyFilledEventHandler";
import OutAskEventHandler from "../MarketEventHandlers/OutAskEventHandler";
import OutBidEventHandler from "../MarketEventHandlers/OutBidEventHandler";
import SellFilledEventHandler from "../MarketEventHandlers/SellFilledEventHandler";
import { OrderSide, OrderTimeEffect, OrderType } from "../Models/Order";
import Quote from "../Models/Quote";
import Tick from "../Models/Tick";

export default class BittrexMarketMakerBot {

    private broker: IBroker;

    private tickEmitter: ITickEventEmitter;

    private outBidManager: OutBidManager;
    private outAskManager: OutAskManager;

    private openOrdersStatusDetector: OpenOrdersStatusDetector;
    private outBidDetector: OutBidDetector;
    private outAskDetector: OutAskDetector;

    private outBidHandler: OutBidEventHandler;
    private buyFilledHandler: BuyFilledEventHandler;
    private outAskHandler: OutAskEventHandler;
    private sellFilledHandler: SellFilledEventHandler;

    constructor(public readonly marketName: string) {
        console.log("SETTING UP EVENTS PIPELINES...");
        this.setUpPipeline();
        console.log("EVENTS PIPELINES READY");
    }

    /**
     *
     */
    public setUpPipeline(): void {

        this.broker = new BittrexBroker();

        this.tickEmitter = new BittrexTickEventEmitter();
        this.tickEmitter.subscribe(this.marketName);

        this.outBidManager = new OutBidManager(this.tickEmitter, this.broker);
        this.outAskManager = new OutAskManager(this.tickEmitter, this.broker);

        this.openOrdersStatusDetector = new OpenOrdersStatusDetector(this.broker,
                                        CONFIG.BITTREX.ORDER_WATCH_INTERVAL_IN_MS);
        this.outBidDetector = new OutBidDetector(this.broker, this.openOrdersStatusDetector, this.tickEmitter);
        this.outAskDetector = new OutAskDetector(this.broker, this.openOrdersStatusDetector, this.tickEmitter);

        this.outBidHandler = new OutBidEventHandler(this.outBidDetector, this.outBidManager);
        this.buyFilledHandler = new BuyFilledEventHandler(this.openOrdersStatusDetector, this.outAskManager);
        this.outAskHandler = new OutAskEventHandler(this.outAskDetector, this.outAskManager);
        this.sellFilledHandler = new SellFilledEventHandler(this.openOrdersStatusDetector, this.outBidManager);

    }

    public start(): void {

        // return;
        console.log("STARTING !");

        // console.log("TEST OPEN ORDER HANDLER BY EMITTING FAKE OPEN BUY ORDER (ALREADY OPENED)");
        // const testOrderId = "78bdcf01-ef7a-4727-be10-b953b24020af";
        // this.broker.emit(OPEN_ORDER_EVENTS.OPEN_BUY_ORDER_EVENT, {id: testOrderId});

        // 1st outbid
        let tickListener: (tick: Tick) => void;
        tickListener = (tick: Tick): void => {
            // Clean listener
            this.tickEmitter.removeListener(this.marketName, tickListener);

            // Log first tick
            console.log(`First Tick: \n${JSON.stringify(tick)}\nSpread: ${tick.spreadPercentage}`);

            // Generate outBid quote
            const basecoin = this.marketName.split("-")[0];
            let MIN_QUANTITY: number = 0;
            switch (basecoin) {
                case "BTC" : {
                    MIN_QUANTITY = CONFIG.BITTREX.START_BTC_QUANTITY;
                    break;
                }
                case "ETH" : {
                    MIN_QUANTITY = CONFIG.BITTREX.START_ETH_QUANTITY;
                    break;
                }
            } 
            const newBid: number = tick.bid + (tick.spread * 0.01);
            const startQuantity = MIN_QUANTITY / newBid;
            const outBidQuote = new Quote(this.marketName, newBid, startQuantity,
                                        OrderSide.BUY, OrderType.LIMIT, OrderTimeEffect.GOOD_UNTIL_CANCELED);
            console.log("\n FIRST QUOTE:\n", outBidQuote);
            // Buy
            this.broker.buy(outBidQuote);
        };
        this.tickEmitter.on(this.marketName, tickListener);

    }
}
