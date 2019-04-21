import LiquidDemocracy from "./contracts/LiquidDemocracy";

const options  = {
    contracts: [LiquidDemocracy],
    web3:{
        fallback:{
            type:'ws',
            url: "ws://127.0.0.1:9545",
        }
    }
};

export default options;