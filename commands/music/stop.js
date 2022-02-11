module.exports = {
    name: 'stop',
    aliases: ['dc'],
    category: 'Music',
    utilisation: '{prefix}stop',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} | เอ๊ะ ! คุณต้องเข้าห้องเสียงก่อนใช้ นะคะ`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} | เอ๊ะ ! คุณไม่ได้อยู่ช่องเสียงเดียวกับมิกุ นะ`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} | เอ๊ะ ! ไม่มีคิวเพลงที่เล่นอยู่ตอนนี้นะคะ`);

        client.player.setRepeatMode(message, false);
        const success = client.player.stop(message);

        if (success) message.channel.send({
            embed: {
                color: '#df0c76',
                author: { name: ' ตัดการเชื่อมต่อ' },
                description: `${client.emotes.outbox} |  มิกุได้ **หยุด** การเล่นเพลงเรียบร้อยเเล้วค่ะ`,
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
    },
};