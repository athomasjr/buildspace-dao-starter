import { ethers } from 'ethers';
import { readFileSync } from 'fs';
import sdk from './1-initialize-sdk.js';

const app = sdk.getAppModule('0xd0D4A14b187B8D9A43962902eCb2aC35c6c3c3f3');

(async () => {
	try {
		const bundleDropModule = await app.deployBundleDropModule({
			// The collection's name, ex. CryptoPunks
			name: 'FitToSitDAO Membership',
			// A description for the collection.
			description: 'A DAO for Devs looking to code and stay fit.',
			// The image for the collection that will show up on OpenSea.
			image: readFileSync('scripts/assets/fit-to-sit-nft.gif'),
			// We need to pass in the address of the person who will be receiving the proceeds from sales of nfts in the module.
			// We're planning on not charging people for the drop, so we'll pass in the 0x0 address
			// you can set this to your own wallet address if you want to charge for the drop.
			primarySaleRecipientAddress: ethers.constants.AddressZero,
		});

		console.log(
			'✅ Successfully deployed bundleDrop module, address:',
			bundleDropModule.address
		);
		console.log(
			'✅ bundleDrop metadata:',
			await bundleDropModule.getMetadata()
		);
	} catch (error) {
		console.log('failed to deploy bundleDrop module', error);
	}
})();
