import sdk from './1-initialize-sdk.js';

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule('0xd0D4A14b187B8D9A43962902eCb2aC35c6c3c3f3');

(async () => {
	try {
		// Deploy a standard ERC-20 contract.
		const tokenModule = await app.deployTokenModule({
			// What's your token's name? Ex. "Ethereum"
			name: 'FitToSitDAO Governance Token',
			// What's your token's symbol? Ex. "ETH"
			symbol: 'FTS',
		});
		console.log(
			'✅ Successfully deployed token module, address:',
			tokenModule.address
		);
	} catch (error) {
		console.error('failed to deploy token module', error);
	}
})();
