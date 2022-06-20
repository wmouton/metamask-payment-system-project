let tipButton = document.querySelector('.btneth');

tipButton.addEventListener('click', async function () {
	if (typeof web3 === 'undefined') {
		return renderMessage(
			'<div>You need to install <a href=“https://metmask.io“>MetaMask </a> to use this feature.  <a href=“https://metmask.io“>https://metamask.io</a></div>'
		);
	}

	web3 = new Web3(window.ethereum);
	window.ethereum.enable().catch((error) => {
		console.log(error);
	});

	let user_address = await web3.eth.getAccounts();
	console.log(user_address[0]);

	web3.eth.sendTransaction(
		{
			to: '0xc3a05d85F6b2A6B16fCD09987D2eEe221973B1C7',
			from: user_address[0],
		},
		 (err, transactionHash) => {
			if (err) return renderMessage('There was a problem!: ' + err.message);
			renderMessage('Thanks for the generosity!!');
		}
	);
});

const renderMessage = (message) => {
	let messageEl = document.querySelector('.message');
	messageEl.innerHTML = message;
}
