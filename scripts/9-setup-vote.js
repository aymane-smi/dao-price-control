import sdk from "./1-initialize-sdk.js";
const vote = sdk.getVote("0xe9211939783B5749Fb8a55671e0126E93a1901f3");
const token = sdk.getToken("0xfaD2C59Afd27F7CEe773b1e228F2308A19642d3d");

(async()=>{
    try{
        await token.roles.grant("minter", vote.getAddress());
        console.log(
            "Successfully gave vote contract permissions to act on token contract"
          );
    }catch(err){
        console.log("failed to grant vote contract permissions on token contract",
            err
        );
    process.exit(1);
    }
    try{
        const ownedTokenBalance = await token.balanceOf(process.env.REACT_APP_WALLET_ADDRESS);
        const ownedAmount = ownedTokenBalance.displayValue;
        const percent90 = Number(ownedAmount) / 100 * 90;
        await token.transfer(
            vote.getAddress(),
            percent90,
        )
    }catch(err){
        console.error("failed to transfer tokens to vote contract", err);
    }
})();