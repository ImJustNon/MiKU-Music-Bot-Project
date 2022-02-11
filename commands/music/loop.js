module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    category: 'Music',
    utilisation: '{prefix}loop',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} | เอ๊ะ ! คุณต้องเข้าห้องเสียงก่อนใช้ นะคะ`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} | เอ๊ะ ! คุณไม่ได้อยู่ช่องเสียงเดียวกับมิกุ นะ`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} | เอ๊ะ ! ไม่มีคิวเพลงที่เล่นอยู่ตอนนี้นะคะ`);

        if (args.join(" ").toLowerCase() === 'queue') {
            if (client.player.getQueue(message).loopMode) {
                client.player.setLoopMode(message, false);
                return message.channel.send(`${client.emotes.success} | มิกุ **ได้ปิด** ใช้งานการวนซ้ำเรียบร้อยเเล้วคะ `);
            } else {
                client.player.setLoopMode(message, true);
                return message.channel.send(`${client.emotes.success} | มิกุ **ได้เปิด** ใช้งานการวนซ้ำ คิว เรียบร้อยเเล้วคะ`);
            };
        } else {
            if (client.player.getQueue(message).repeatMode) {
                client.player.setRepeatMode(message, false);
                return message.channel.send(`${client.emotes.success} | มิกุ **ได้ปิด** ใช้งานการวนซ้ำเรียบร้อยเเล้วคะ `);
            } else {
                client.player.setRepeatMode(message, true);
                return message.channel.send(`${client.emotes.success} | มิกุ **ได้เปิด** ใช้งานการวนซ้ำ เพลง เรียบร้อยเเล้วคะ`);
            };
        };
    },
};