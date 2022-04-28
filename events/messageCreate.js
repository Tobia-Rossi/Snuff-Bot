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
				if (message.author.username == 'Virgil') {
					message.reply('Brisa Time Baby!! <@&952285034977574932>');
				} else {
					var data = fs.readFileSync(fileQuotes, 'utf8');

					const quotes = data.split(/\r?\n/);
					const quotesCount = quotes.length;
					const randomQuoteNumber = Math.floor(Math.random() * quotesCount);
					const randomQuote = quotes[randomQuoteNumber];

					message.reply({ content: randomQuote + ' | Bris!', tts: false});
				}
			}
		}
	},
};