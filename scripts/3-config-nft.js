import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x7b5A7Ee43493B81F44ecE7a4F082986C6d4D7E7e");

(async () => {
    try{
        await editionDrop.createBatch([{
            name: "ZitCoin access QR Code",
            description: "This NFT will give you access to the DAO of ZitCoin",
            image: readFileSync("scripts/assets/qrcode.png"),
        }]);
        console.log("✅ Successfully created a new NFT in the drop!");
    }catch(err){
        console.log(`🛑 Failed to create the new NFT: ${err}`);
    }
})();