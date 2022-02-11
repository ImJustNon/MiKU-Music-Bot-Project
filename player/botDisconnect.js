module.exports = (client, message, queue) => {
    message.channel.send({
        embed: {
            color: '#ff7b29',
            author: { name: ' ออกจากห้อง'},
            description: client.emotes.outbox +  `  |  ตอนนี้ คิวเพลงได้จบลงเเล้ว มิกุขออณุญาตออกจากห้องเสียงนะคะ `,
            footer: { text: 'M i K U' },
            timestamp: new Date(),
        },
    });

        //logging
        console.log("********************");
        console.log('Disconnect');
        console.log(new Date());
        console.log('Room = ' + message.member.voice.channel.name);
        console.log('Server = ' + message.guild.name);
        console.log("********************");
};