import sdk from "./1-initialize-sdk.js";

const token = sdk.getToken("0xfaD2C59Afd27F7CEe773b1e228F2308A19642d3d");

(async () => {
  try {
    const allRoles = await token.roles.getAll();

    console.log("👀 Roles that exist right now:", allRoles);

    await token.roles.setAll({ admin: [], minter: [] });
    console.log(
      "🎉 Roles after revoking ourselves",
      await token.roles.getAll()
    );
    console.log("✅ Successfully revoked our superpowers from the ERC-20 contract");

  } catch (error) {
    console.error("Failed to revoke ourselves from the DAO trasury", error);
  }
})();