require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/7O9Of1R_MLUwGvSehE-FhzayvcfQPp6i',
      accounts: ['9ed1d2b2e15bd83c8ef3a1877396c2122fda72cd865ee5df218b8e0f3414404f'],
    },
  },
};