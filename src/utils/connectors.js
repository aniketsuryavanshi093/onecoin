import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';
// Add different connectors
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

const ALL_SUPPORTED_CHAIN_IDS = [4, 80001];

const INFURA_NETWORK_URLS = {
  // 1: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
  4: `https://rinkeby.infura.io/v3/d463c533cf21421ea839bb5030b39f3c`,
  // 137: `https://polygon-mainnet.g.alchemy.com/v2/S_VQA-Vef0sryhaVNIC5lK0CLuKoyqlx`,
  80001: `https://polygon-mumbai.g.alchemy.com/v2/S_VQA-Vef0sryhaVNIC5lK0CLuKoyqlx`,
};

export const injected = new InjectedConnector({
  supportedChainIds: [4, 80001], // Change according to supported Network Ids
});

export const walletconnect = new WalletConnectConnector({
  rpc: INFURA_NETWORK_URLS,
  qrcode: true,
  supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
});

export const walletLink = new WalletLinkConnector({
  url: INFURA_NETWORK_URLS[1], // Change according to supported Network Id
  appName: 'NFTY',
  supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
});
