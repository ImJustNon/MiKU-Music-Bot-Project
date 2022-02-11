module.exports = {
    name: 'ind',
    aliases: ['ind'],
    category: 'Core',
    utilisation: '{prefix}ind',

    execute(client, message, args) {
		message.channel.send({
			embed:{
                color: '#da36ff',
                author: { name: '  มิกุของเเนะนำตัวนะคะ  '},
                footer: { text: 'M i K U' },
                fields: [
                    { name:client.emotes.bear + `  |  หากต้องการความช่วยเหลือเกี่ยวกับคำสั่งของ มิกุ โปรดใช้คำสั่งนี้นะคะ`, value: `\`  ${client.config.discord.prefix}command  \`  ,  \`  ${client.config.discord.prefix}cmd  \`  ` },
					{ name:client.emotes.room + '  |  หากต้องการให้ มิกุไปอยู่ใน เซิฟเวอร์ของคุณสามารถใช้คำสั่งนี้ได้เลยค่ะ ',value: `\`  ${client.config.discord.prefix}invite  \`  ,  \`  ${client.config.discord.prefix}inv  \`` },
                ],
                timestamp: new Date(),
                description: `   สวัสดีค่ะ ชื่อมิกุนะคะ เป็นบอทสำหรับเปิดเพลงภายในเซิฟเวอร์ดิสคอร์ด \n ขอฝากตัวด้วยนะคะ   ${client.emotes.relax_face} \n ${client.emotes.figure_down}   รายระเอียดตามด้านล่างเลยนะคะ ` ,
            },
        });
		
	},
};