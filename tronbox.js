const port = process.env.HOST_PORT || 8090

module.exports = {
  networks: {
    mainnet: {
      privateKey: process.env.PRIVATE_KEY_MAINNET,
      /*
      Create a .env file (it must be gitignored) containing something like
        export PRIVATE_KEY_MAINNET=4E7FECCB71207B867C495B51A9758B104B1D4422088A87F4978BE64636656243
      Then, run the migration with:
        source .env && tronbox migrate --network mainnet
      */

      userFeePercentage: 100,
      feeLimit: 1e8,
      fullHost: 'https://api.trongrid.io',
      network_id: '1'
    },
    shasta: {
      privateKey: process.env.PRIVATE_KEY_SHASTA,
      userFeePercentage: 100,
      feeLimit: 1e9,
      fullHost: 'https://api.shasta.trongrid.io',
      network_id: '2'
    },
    nile: {
      privateKey: process.env.PRIVATE_KEY_NILE,
      userFeePercentage: 100,
      feeLimit: 1e9,
      fullHost: 'https://api.nileex.io',
      network_id: '3'
    },
    development: {
      // For trontools/quickstart docker image
      privateKey: '',
      userFeePercentage: 0,
      feeLimit: 1e8,
      fullHost: 'http://127.0.0.1:' + port,
      network_id: '666'
    },
    compilers: {
      solc: {
        version: '0.4.25'
      }
    }
  }
}


















// curl -X POST http://127.0.0.1:8090/wallet/proposalcreate -d '{"owner_address":"4128321de918d6edb89d852742cd581545ee920349","parameters":[{"key": 0,"value": 82000}]}'

// curl -X POST http://127.0.0.1:8090/wallet/proposalcreate -d '{"owner_address":"4128321de918d6edb89d852742cd581545ee920349","parameters":[{"key": 17,"value": 250000000000}]}'
// curl -X POST http://127.0.0.1:8090/wallet/proposalcreate -d '{"owner_address":"4128321de918d6edb89d852742cd581545ee920349","parameters":[{"key": 17,"value": 250000000000}]}'


// curl --request POST \
//      --url http://127.0.0.1:8090/wallet/gettransactionbyid \
//      --header 'Accept: application/json' \
//      --header 'Content-Type: application/json' \
//      --data '
// {
//      "value": "3f40c0c57d5046c0f0283bf77b3f41e1bdee5340694570f49a44721210d11040"
// }
// '