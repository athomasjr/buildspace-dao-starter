import { readFileSync } from 'fs';
import sdk from './1-initialize-sdk.js';

const bundleDrop = sdk.getBundleDropModule(
	'0x1E7D930B469F67e10255be6EF77D2fFbFCc8b3C4'
);

(async () => {
	try {
		await bundleDrop.createBatch([
			{
				name: '#FitToSit Boogie Cat',
				description: 'This NFT will give you access to FitToSitDAO!',
				image: readFileSync('scripts/assets/fittosit-nft.gif'),
			},
		]);
		console.log('✅ Successfully created a new NFT in the drop!');
	} catch (error) {
		console.error('failed to create the new NFT', error);
	}
})();
