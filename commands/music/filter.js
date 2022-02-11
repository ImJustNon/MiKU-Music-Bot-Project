module.exports = {
    name: 'filter',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}filter [filter name]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} | เอ๊ะ ! คุณต้องเข้าห้องเสียงก่อนใช้ นะคะ`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} | เอ๊ะ ! คุณไม่ได้อยู่ช่องเสียงเดียวกับมิกุ นะ`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} | ไม่มีเพลงที่เล่นอยู่ตอนนี้นะคะ`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} | โปรดระบุ Filter ที่จะใช้ด้วยนะคะ`);

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(`${client.emotes.error} | ขอโทษด้วยค่ะมิกุไม่รู้จัก Filter นี้ค่ะ , ลองใช้ตามนี้ดูนะคะ (8D, vibrato, pulsator...) !`);

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterToUpdate]) message.channel.send({
            embed: {
                color: '#a9f51b',
                author: { name: ' ได้เพิ่ม Filter นี้'},
                description: client.emotes.loading +  `  |  มิกุ **\` ได้เพิ่ม Filter นี้ \`** ไปในเพลงเเล้ว, โปรดรอ เเป๊บนึงนะคะ...`,
                footer: { text: 'M i K U' },
                timestamp: new Date(),
            },
        });
        else message.channel.send({
            embed: {
                color: '#a9f51b',
                author: { name: ' ได้นำ Filter นี้ออก'},
                description: client.emotes.loading +  `  |  มิกุ **\` ได้นำ Filter นี้ออก \`** ไปเเล้วคะ, โปรดรอ เเป๊บนึงนะคะ... `,
                footer: { text: 'M i K U' },
                timestamp: new Date(),
            },
        });
    },
};