const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require("fs");
const fileQuotes = "./Databris/snuff_quotes.txt";

module.exports = {
	data: new SlashCommandBuilder()
		.setName('frase-brisa')
		.setDescription('Ti dice una frase per la brisa!')
		.addBooleanOption(option =>
			option.setName('tts')
				.setDescription('Sceglie se il bot legge o no la frase per la brisa.')),
	async execute(interaction) {
		const tts = interaction.options.getBoolean('tts');

		var data = fs.readFileSync(fileQuotes, 'utf8');

		const quotes = data.split(/\r?\n/);
		const quotesCount = quotes.length;
		const randomQuoteNumber = Math.floor(Math.random() * quotesCount);
		const randomQuote = quotes[randomQuoteNumber];

		if (randomQuote) {
			if (tts) {
				return interaction.reply({ content: randomQuote + ' | Bris!', tts: true });
			} else {
				return interaction.reply({ content: randomQuote + ' | Bris!', tts: false });
			}
		} else {
			return interaction.reply({content: 'Error Reading DataBris, Sorry!', ephemeral: true });
		}
	},
};