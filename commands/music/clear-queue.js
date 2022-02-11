module.exports = {
    name: 'clear-queue',
    aliases: ['cq'],
    category: 'Music',
    utilisation: '{prefix}clear-queue',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error}  |  เอ๊ะ ! คุณต้องเข้าห้องเสียงก่อนใช้ นะคะ`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} | เอ๊ะ ! คุณไม่ได้อยู่ช่องเสียงเดียวกับมิกุ นะ`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error}  |  ไม่มีเพลงที่เล่นอยู่ตอนนี้นะคะ `);

        if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send(`${client.emotes.error}  |  ตอนนี้ในคิวมีอยู่เพลงเดียวนะคะ`);

        client.player.clearQueue(message);

        message.channel.send(`${client.emotes.outbox}  |  คิวนี้ได้ถูก **เอาออก** ไปเเล้วค่ะ `);
    },
};