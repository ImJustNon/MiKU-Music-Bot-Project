module.exports = {
    name: 'debug',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}debug',

    execute(client, message) {
        message.channel.send({
            embed: {
                color: 'YELLOW',
                author: { name: 'Debug' },
                footer: { text: 'M i K U' },
                fields: [
                    { name: 'bot', value: client.user.username },
                    { name: 'channal', value: client.voice.connections.size },
                    { name: 'total user', value: client.users.cache.size },
                    { name: 'ping', value: client.ws.ping },
                    { name: 'prefix', value: client.config.discord.prefix },
                ],
                timestamp: new Date(),
                description: `Bot by Non`,
            },
        });
    },
};