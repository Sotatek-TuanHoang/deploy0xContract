import { runMigrationsAsync } from './packages/migrations/src/migration';
import { providerEngine } from './provider_engine';
import {TX_DEFAULTS} from "./configs";

/**
 * In this scenario, the maker creates and signs an order for selling ZRX for WETH.
 * The taker takes this order and fills it via the 0x Exchange contract.
 */
export async function scenarioAsync(): Promise<void> {
  // const provider: Web3ProviderEngine = web3Factory.getRpcProvider({
  //   shouldUseInProcessGanache: true,
  // });
  const provider = providerEngine;
  const txDefaults = TX_DEFAULTS;

  const contractAddresses = await runMigrationsAsync(provider, txDefaults);
  console.log({ contractAddresses });
}

void (async () => {
  try {
    if (!module.parent) {
      await scenarioAsync();
    }
  } catch (e) {
    console.log(e);
    providerEngine.stop();
    process.exit(1);
  }
})();
