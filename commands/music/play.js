module.exports = {
    name: 'play',
    aliases: ['p'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} | เอ๊ะ ! คุณต้องเข้าห้องเสียงก่อนใช้ นะคะ `);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} | เอ๊ะ ! คุณไม่ได้อยู่ช่องเสียงเดียวกับมิกุ นะ `);

        if (!args[0]) return message.channel.send(`${client.emotes.error} | เอ๊ะ ! โปรดใส่ชื่อเพลงหรือ URL ต่อจาก คำสั่งด้วยค่ะ มิกุเปิดให้ไม่ถูกจริงๆ `);

        message.channel.send(`> ${client.emotes.search}  -  มิกุกำลังค้นหาให้นะค่ะ`);
        client.player.play(message, args.join(" "), { firstResult: true });
    },
	
};