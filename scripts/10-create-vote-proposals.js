import sdk from "./1-initialize-sdk.js";
import { ethers } from "ethers";

const vote = sdk.getVote("0xe9211939783B5749Fb8a55671e0126E93a1901f3");

const token = sdk.getToken("0xfaD2C59Afd27F7CEe773b1e228F2308A19642d3d");


(async () => {
  try {
    const amount = 420_000;
    const description = "Should the DAO mint an additional " + amount + " tokens into the treasury for keeping control pf price of the oil in the market?";
    const executions = [
      {
        toAddress: token.getAddress(),

        nativeTokenValue: 0,

        transactionData: token.encoder.encode(
          "mintTo", [
          vote.getAddress(),
          ethers.utils.parseUnits(amount.toString(), 18),
        ]
        ),
      }
    ];

    await vote.propose(description, executions);

    console.log("✅ Successfully created proposal to mint tokens");
  } catch (error) {
    console.error("failed to create first proposal", error);
    process.exit(1);
  }

  try {
    const amount = 6_900;
    const description = "Should the DAO transfer " + amount + " tokens from the treasury to " +
      process.env.REACT_APP_WALLET_ADDRESS + " to help our economy";
    const executions = [
      {
        nativeTokenValue: 0,
        transactionData: token.encoder.encode(
          "transfer",
          [
            process.env.REACT_APP_WALLET_ADDRESS,
            ethers.utils.parseUnits(amount.toString(), 18),
          ]
        ),
        toAddress: token.getAddress(),
      },
    ];

    await vote.propose(description, executions);

    console.log(
      "✅ Successfully created proposal to help the economy, let's hope people vote for it!"
    );
  } catch (error) {
    console.error("failed to create second proposal", error);
  }
})();