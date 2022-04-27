const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('Bwisi_Time')
		.setDescription('Ti dice una frase per la bwisa!'),
	async execute(interaction) {
		return interaction.reply('Calma ci sto lavorando!');
	},
};