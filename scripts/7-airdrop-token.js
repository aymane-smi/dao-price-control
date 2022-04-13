import sdk from "./1-initialize-sdk.js";

const editionDrop = sdk.getEditionDrop("0x7b5A7Ee43493B81F44ecE7a4F082986C6d4D7E7e");

const token  = sdk.getToken("0xfaD2C59Afd27F7CEe773b1e228F2308A19642d3d");

(async() => {
    try{
        const walletAddresses = await editionDrop.history.getAllClaimerAddresses(0);
        console.log(walletAddresses);

        if(!walletAddresses.length){
            console.log("No NFT has been claimed yet, please share the DAO to start the airdrop!");
            process.exit(0);

        }

        const airdropTargets = walletAddresses.map((address) => {
            //1000 <= randomAmount <= 10000
            const randomAmount = Math.floor(Math.random()*(10000 - 1000 + 1) + 1000);
            console.log(`✅ airdroping ${randomAmount} ZIT to ${address}`);
            return {
                toAddress: address,
                amount: randomAmount
            };
        });

        console.log("✅ strating the airdrop...");
        await token.transferBatch(airdropTargets);
        console.log("✅ tokens successfully airdroped to all addresses!");
    }catch(err){
        console.log(`🛑 Failed to commit the airdrop: ${err}`);
    }
})();