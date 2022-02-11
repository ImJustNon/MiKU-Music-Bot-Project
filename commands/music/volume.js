module.exports = {
    name: 'volume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}volume [1-100]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} | เอ๊ะ ! คุณต้องเข้าห้องเสียงก่อนใช้ นะคะ`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} | เอ๊ะ ! คุณไม่ได้อยู่ช่องเสียงเดียวกับมิกุ นะ`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} | เอ๊ะ ! ไม่มีคิวเพลงที่เล่นอยู่ตอนนี้นะคะ `);

        if (!args[0] || isNaN(args[0]) || args[0] === 'Infinity') return message.channel.send(`${client.emotes.error} | โปรดใส่ **เลข** ความดังของเสียงค่ะ เดี๋ยวมิกุ จะปรับให้ตามใจเลยคะ`);

        if (Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 100) return message.channel.send(`${client.emotes.error} | โปรดใส่เป็นตัวเลขนะคะ (ระหว่าง 1 ถึง 100 ค่ะ) !`);


        const success = client.player.setVolume(message, parseInt(args[0]));
        const volume = parseInt(args[0])
        if (volume <= 1){                                // [ถ้าเสียง = 0,emoji = emoji 0]
            Vol = client.emotes.volume_0;
        } else if (volume < 60){
            Vol = client.emotes.volume_1;
        } else {
            Vol = client.emotes.volume_2;
        }

        console.log('Set Volume = ' +parseInt(args[0]));
    
        if (success) message.channel.send({
            embed: {
                color: '#ffca42',
                author: { name: ' ความดังของเสียง'},
                description: Vol +  `  |  มิกุได้ปรับความดังของเสียงเป็น |**\`  ${parseInt(args[0])} %  \`**| ให้เเล้วนะคะ`,
                footer: { text: 'M i K U' },
                timestamp: new Date(),
            },
        });
    },
};