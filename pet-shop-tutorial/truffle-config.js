module.exports = {
  networks: {
    development: {
      host: "late-ideas-say.loca.lt", // your LocalTunnel URL (no "https://")
      port: 80,                             // LocalTunnel uses port 80
      network_id: "*",                      // Match any network id
      disableConfirmationListener: true,    // optional, prevents listener errors in some setups
      skipDryRun: true                      // optional, avoids migration issues
    }
  },

  compilers: {
    solc: {
      version: "0.8.20" // or whatever version your contracts use
    }
  }
};




