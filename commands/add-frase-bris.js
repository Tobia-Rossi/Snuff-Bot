const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require("fs");
const fileQuotes = "./Databris/Databris.txt";

module.exports = {
	data: new SlashCommandBuilder()
		.setName('add-frase-brisa')
		.setDescription('Aggiunge una frase della brisa al Databris.')
		.addStringOption(option =>
			option.setName('frase')
				.setDescription('Frase che verrà aggiunta al Databris.')),
	async execute(interaction) {
		if (interaction.user.id == interaction.guild.ownerId || interaction.user.id == '813757504517046322') {
			const quote = interaction.options.getString('frase');

			
			
			try {
				fs.writeFileSync(fileQuotes, quote);
				// file written successfully
				return interaction.reply({content: 'Frase aggiunta correttamente.', ephemeral: true });
			} catch (err) {
				// Error in writing file
				return interaction.reply({content: 'Error Writing Databris, Sorry!', ephemeral: true });
			}
		} else {
			return interaction.replay({ content: 'You don\'t have the necessary permissions to do that!!', ephemeral: true });
		}
	},
};