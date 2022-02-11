
module.exports = {
	name: 'invite',
	aliases: ['inv'],
    category: 'Infos',
    utilisation: '{prefix}invite ',

	execute(client, message, args) {
		message.channel.send({
                embed: {
                    color: '#32f435',
                    author: { name: 'เชิญ ✨ M i K U 🎧#1031 เข้าเซิฟเวอร์ของคุณ' },
                    footer: { text: 'M i K U' },
                    timestamp: new Date(),
                    description: `คุณสามารถเชิญ มิกุเข้าเซิฟเวอร์ของคุณได้ - โดยกด :point_right: [เชิญมิกุ](https://discord.com/api/oauth2/authorize?client_id=${client.config.discord.clientId}&permissions=${client.config.discord.permission}&scope=bot)`,
                },
            });
	console.log(`Now on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`);
  },
};

