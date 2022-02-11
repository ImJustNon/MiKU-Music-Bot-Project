module.exports = {
    name: 'queue',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}queue',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} | เอ๊ะ ! คุณต้องเข้าห้องเสียงก่อนใช้ นะคะ`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} | เอ๊ะ ! คุณไม่ได้อยู่ช่องเสียงเดียวกับมิกุ นะ`);

        const queue = client.player.getQueue(message);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} | เอ๊ะ ! ไม่มีคิวเพลงที่เล่นอยู่ตอนนี้นะคะ`);

        message.channel.send(`**Server queue - ${message.guild.name} ${client.emotes.queue} ${client.player.getQueue(message).loopMode ? '(looped)' : ''}**\nCurrent : ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
            return `**#${i + 1}** - ${track.title} | ${track.author} (requested by : ${track.requestedBy.username})`
        }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `And **${queue.tracks.length - 5}** other songs...` : `In the playlist **${queue.tracks.length}** song(s)...`}`));
    },
};