import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";

( async() => {
    try{
        const tokenAddress = await sdk.deployer.deployToken({
            name: "ZitCoin governace token",
            symbol: "$ZIT",
            primary_sale_recipient: AddressZero
        });
        console.log(`✅ the token was successfully deployed: ${tokenAddress}`);
    }catch(err){
        console.log(`🛑 Failed to deploy the token: ${err}`);
    }
})();