const fs = require('fs');
const discord = require('discord.js');
const client = new discord.Client({ disableMentions: 'everyone' });
const { Player } = require('discord-player');


client.player = new Player(client);
client.config = require('./config/bot');
client.emotes = client.config.emojis;
client.filters = client.config.filters;
client.commands = new discord.Collection();

fs.readdirSync('./commands').forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        console.log(`Loading command  :  ${file}`);
        client.commands.set(command.name.toLowerCase(), command);
    };
});

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));

for (const file of events) {
    console.log(`Loading discord.js event  :  ${file}`);
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};

for (const file of player) {
    console.log(`Loading discord-player event  :  ${file}`);
    const event = require(`./player/${file}`);
    client.player.on(file.split(".")[0], event.bind(null, client));
};

client.on('message', async message => {
    if (message.mentions.has(client.user.id) && !message.content.includes("@everyone") && !message.content.includes("@here")) {
        const ind = {
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
		};
		await message.channel.send(ind);
    }
});

client.login(client.config.discord.token); 