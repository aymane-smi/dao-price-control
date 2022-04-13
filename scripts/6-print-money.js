import sdk from "./1-initialize-sdk.js";

const token = sdk.getToken("0xfaD2C59Afd27F7CEe773b1e228F2308A19642d3d");

(async () => {
    try{
        const amount = 40000000;
        await token.mint(amount);
        const totalSpply = await token.totalSupply();
        console.log(`the total supply of $ZIT is: ${totalSpply.displayValue}`);
    }catch(err){
        console.log(`🛑 Failed to print money: ${err}`);
    }
})();