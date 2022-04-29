const fs = require("fs");
const fileQuotes = "./Databris/Databris.txt";

module.exports = {
	name: 'messageCreate',
	execute(message) {
		// Checks if it is in a channel it can read
		if (!message.channel.viewable) return;

		// TEMP Log message
		console.log(`${message.author.username} has said: "${message.cleanContent}" in #${message.channel.name}`);

		// No reply to itself
		if (message.author.username.search(/Snuff Bot/) !== -1) return;

		// Brisa Time code
		if (message.content.search(/Virgil/i) == -1) {
			if (message.content.search(/Che ora è/i) !== -1) {
				if (message.author.id == '953408736343507034') {
					message.reply('<@953408736343507034>... È l\'ora della Brisa, già lo sai!! <@&952285034977574932>');
				}
				
				// TODO: add rect with xmass snuff
				message.reply('La frase della brisa del momento:');

				var data = fs.readFileSync(fileQuotes, 'utf8');

				const quotes = data.split(/\r?\n/);
				const quotesCount = quotes.length;
				const randomQuoteNumber = Math.floor(Math.random() * quotesCount);
				const randomQuote = quotes[randomQuoteNumber];

				message.channel.send({ content: randomQuote + ' | Bris!', tts: false});
			}
		}
	},
};