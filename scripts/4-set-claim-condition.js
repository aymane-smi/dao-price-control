import sdk from "./1-initialize-sdk.js";
import { MaxUint256 }from "@ethersproject/constants";

const editionDrop = sdk.getEditionDrop("0x7b5A7Ee43493B81F44ecE7a4F082986C6d4D7E7e");

( async () => {
    try{
        const claimConditions = [{
            startTime : new Date(),
            maxQuantity: 50000,
            price: 0,
            quantityLimitPerTransaction: 1,
            waitInSeconds: MaxUint256,
        }];
        await editionDrop.claimConditions.set("0", claimConditions);
        console.log("✅ Sucessfully set claim condition!");
    }catch(err){
        console.log(`🛑 Failed to set claim condition: ${err}`);
    }
})();