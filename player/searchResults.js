module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: '#3388ff',
            author: { name: `ผลการค้นหาของ ${query} ค่ะ` },
            footer: { text: 'M i K U' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
};