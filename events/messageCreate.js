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
				message.reply('Brisa Time Baby!! <@&952285034977574932>');
			}
		}
	},
};