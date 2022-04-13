import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";
(async () => {
    try{
        const editionDropAddress = await sdk.deployer.deployEditionDrop({
            name: "ZitCoin MemberShip",
            description: "DAO that give moroccan to control the price of cooking oil",
            image: readFileSync("scripts/assets/oil.png"),
            primary_sale_recipient: AddressZero,
        });
        const editionDrop = sdk.getEditionDrop(editionDropAddress);

        const metadata = await editionDrop.metadata.get();

        console.log(`✅ editionDrop Contract successfully deployed, address: ${editionDropAddress}`);
        console.log(`✅ editionDrop metadata: ${JSON.stringify(metadata)}`);
    }catch(err){
        console.log(`🛑 editionDrop Contract failed to depoly: ${err}`);
    };
})();