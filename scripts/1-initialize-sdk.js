import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { ethers } from "ethers";
import dotenv from "dotenv";

dotenv.config();
//we can use path i.e: dotenv.config({path: "./.env"})

//check for private key

if(!process.env.REACT_APP_PRIVATE_KEY || process.env.REACT_APP_PRIVATE_KEY === "")
    console.log("🛑 private key not found!");

if(!process.env.REACT_APP_WALLET_ADDRESS || process.env.REACT_APP_WALLET_ADDRESS === "")
    console.log("🛑 wallet address not found!");

if(!process.env.REACT_APP_ALCHEMY_API_URL || process.env.REACT_APP_ALCHEMY_API_URL === "")
    console.log("🛑 Alchemy api url not found!");

const sdk = new ThirdwebSDK(
    new ethers.Wallet(
        process.env.REACT_APP_PRIVATE_KEY,
        ethers.getDefaultProvider(process.env.REACT_APP_ALCHEMY_API_URL)
    ),
);

(async () => {
    try{
        const address = await sdk.getSigner().getAddress();
        console.log(`sdk initialized: ${address}`);
    }catch(err){
        console.log("Failed to get app from sdk", err);
        process.exit(1);
    }
})();


export default sdk;