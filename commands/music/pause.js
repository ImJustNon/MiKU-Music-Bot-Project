module.exports = {
    name: 'pause',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}pause',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} | เอ๊ะ ! คุณต้องเข้าห้องเสียงก่อนใช้ นะคะ`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} | เอ๊ะ ! คุณไม่ได้อยู่ช่องเสียงเดียวกับมิกุ นะ`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} | เอ๊ะ ! ไม่มีคิวเพลงที่เล่นอยู่ตอนนี้นะคะ`);

        if (client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} | มิกุ ได้หยุดเพลงไว้ให้เเล้วนะคะ`);

        const success = client.player.pause(message);

        if (success) message.channel.send(`${client.emotes.success} | เพลง ${client.player.getQueue(message).playing.title} ได้ถูกหยุดเเล้วคะ`);
    },
};