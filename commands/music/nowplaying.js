module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    category: 'Music',
    utilisation: '{prefix}nowplaying',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} | เอ๊ะ ! คุณต้องเข้าห้องเสียงก่อนใช้ นะคะ`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} | เอ๊ะ ! คุณไม่ได้อยู่ช่องเสียงเดียวกับมิกุ นะ`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} | เอ๊ะ ! ไม่มีคิวเพลงที่เล่นอยู่ตอนนี้นะคะ`);

        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;

        message.channel.send({
            embed: {
                color: 'BLUE',
                author: { name: track.title },
                footer: { text: ' M i K U ' },
                fields: [
                    { name: 'ช่อง', value: track.author, inline: true },
                    { name: 'เปิดโดย', value: track.requestedBy.username, inline: true },
                    { name: 'จากเพลลิส', value: track.fromPlaylist ? 'Yes' : 'No', inline: true },

                    { name: 'Views', value: track.views, inline: true },
                    { name: 'วินาทีที่', value: track.duration, inline: true },
                    { name: 'เปิดใช้งานฟิลเตอร์', value: filters.length + '/' + client.filters.length, inline: true },

                    { name: 'ความดัง', value: client.player.getQueue(message).volume, inline: true },
                    { name: 'การวนซ้ำ', value: client.player.getQueue(message).repeatMode ? 'Yes' : 'No', inline: true },
                    { name: 'การหยุดชั่วคราว', value: client.player.getQueue(message).paused ? 'Yes' : 'No', inline: true },

                    { name: 'ดำเนินไปเเล้ว', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
                ],
                thumbnail: { url: track.thumbnail },
                timestamp: new Date(),
            },
        });
    },
};