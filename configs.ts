import {
  GANACHE_NETWORK_ID,
  KOVAN_NETWORK_ID,
  RINKEBY_NETWORK_ID,
  ROPSTEN_NETWORK_ID,
} from './constants';
import { NetworkSpecificConfigs } from './types';


// start change config
export const MNEMONIC = 'december carpet ranch page like milk monster correct source ten human indicate';
export const BASE_DERIVATION_PATH = `44'/60'/0'/0`;
const E_RPC_URL = 'http://192.168.1.208:22002';
const E_NETWORKID = 15;
const E_CHAINID = 15;
export const E_ADDRESS_DEPLOY='0xF54b3294616d39749732Ac74F234F46C9ABf29C4';
export const TX_DEFAULTS = {
  gas: 8000000,
  from: E_ADDRESS_DEPLOY,
};
//end config

export const GANACHE_CONFIGS: NetworkSpecificConfigs = {
  rpcUrl: 'http://127.0.0.1:8545',
  networkId: GANACHE_NETWORK_ID,
  chainId: 1337,
};
export const KOVAN_CONFIGS: NetworkSpecificConfigs = {
  rpcUrl: 'https://kovan.infura.io/',
  networkId: KOVAN_NETWORK_ID,
  chainId: KOVAN_NETWORK_ID,
};
export const ROPSTEN_CONFIGS: NetworkSpecificConfigs = {
  rpcUrl: 'https://ropsten.infura.io/v3/862ef040239b491fbe5d2c9efd414d98',
  networkId: ROPSTEN_NETWORK_ID,
  chainId: ROPSTEN_NETWORK_ID,
};
export const RINKEBY_CONFIGS: NetworkSpecificConfigs = {
  rpcUrl: 'https://rinkeby.infura.io/v3/862ef040239b491fbe5d2c9efd414d98',
  networkId: RINKEBY_NETWORK_ID,
  chainId: RINKEBY_NETWORK_ID,
};
export const EVRYNET_CONFIGS: NetworkSpecificConfigs = {
  rpcUrl: 'http://192.168.1.208:22002',
  networkId: 15,
  chainId: 15,
};

export const NETWORK_CONFIGS = EVRYNET_CONFIGS; // or KOVAN_CONFIGS or ROPSTEN_CONFIGS or RINKEBY_CONFIGS
// export const NETWORK_CONFIGS = ROPSTEN_CONFIGS; // or KOVAN_CONFIGS or ROPSTEN_CONFIGS or RINKEBY_CONFIGS
