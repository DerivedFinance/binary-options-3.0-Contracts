/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * truffleframework.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like truffle-hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */
const path = require('path')
require('dotenv').config()

const HDWalletProvider = require('@truffle/hdwallet-provider')
// const mnemonic = process.env.REACT_APP_OPERATOR_MNEMONIC || 'myth like bonus scare over problem client lizard pioneer submit female collect'
const privKey = process.env.REACT_APP_OPERATOR_PRIVKEY;
const BSCSCANAPIKEY = process.env.BSCSCAN_API_KEY;

// const createInfuraEntry = (networkName, networkId, gasPrice) => ({
//   [networkName]: {
//     provider: () =>
//       new HDWalletProvider(
//         privKey,
//         `https://${networkName}.infura.io/v3/${process.env.REACT_APP_INFURA_ID}`
//       ),
//     network_id: networkId,
//     gasPrice,
//     networkCheckTimeout: 999999,
//     skipDryRun: true
//   }
// })

module.exports = {
  contracts_build_directory: path.join(__dirname, './artifacts'),

  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    develop: {
      host: "localhost",
      port: 8545,
      network_id: "*",
    },
    bsctest: {
      provider: () => new HDWalletProvider([privKey], "https://data-seed-prebsc-1-s1.binance.org:8545"),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
      networkCheckTimeout: 999999,
    },
    bsc: {
      provider: () => new HDWalletProvider([privKey], "https://bsc-dataseed1.binance.org"),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },

    // Another network with more advanced options...
    // advanced: {
    // port: 8777,             // Custom port
    // network_id: 1342,       // Custom network
    // gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
    // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
    // from: <address>,        // Account to send txs from (default: accounts[0])
    // websockets: true        // Enable EventEmitter interface for web3 (default: false)
    // },

    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    // ropsten: {
    // provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/YOUR-PROJECT-ID`),
    // network_id: 3,       // Ropsten's id
    // gas: 5500000,        // Ropsten has a lower block limit than mainnet
    // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
    // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
    // skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    // },

    // Useful for private networks
    // private: {
    // provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
    // network_id: 2111,   // This network is yours, in the cloud.
    // production: true    // Treats this network as if it was a public net. (default: false)
    // }
  },

  plugins: ['truffle-plugin-verify'],

  api_keys: {
    bscscan: BSCSCANAPIKEY
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: '0.5.10',
      settings: {
        optimizer: {
          enabled: true,
        },
      }
    }
  }
}
