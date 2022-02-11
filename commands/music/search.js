module.exports = {
    name: 'search',
    aliases: ['sr'],
    category: 'Music',
    utilisation: '{prefix}search [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} | เอ๊ะ ! คุณต้องเข้าห้องเสียงก่อนใช้ นะคะ`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} | เอ๊ะ ! คุณไม่ได้อยู่ช่องเสียงเดียวกับมิกุ นะ`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} | โปรดพิมพ์สิ่งที่คุณต้องการค้นหามาเลยค่ะ เดี๋ยวมิกุจะหาให้เองค่ะ`);

        client.player.play(message, args.join(" "));
    },
};