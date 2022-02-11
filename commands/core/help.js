module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Core',
    utilisation: '{prefix}help <command name>',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');

            message.channel.send({
                embed: {
                    color: '#2eb0ff',
                    author: { name: 'คำสั่งเกี่ยวกับบอท' },
                    footer: { text: 'M i K U' },
                    fields: [
                        { name: `${client.emotes.bot}  |  ` + `**\` ${client.config.discord.prefix}debug \`**`,value: `เช็คสถานะบอท`,inline: true },
                        { name: `${client.emotes.bot}  |  ` + `**\` ${client.config.discord.prefix}invite \`**`,value: `เชิญบอทเข้าเซิฟเวอร์`,inline: true  },
                    ],
                    timestamp: new Date(),
                },
            });

            message.channel.send({
                embed: {
                    color: '#2eb0ff',
                    author: { name: 'คำสั่งเกี่ยวกับเพลง' },
                    footer: { text: 'M i K U' },
                    fields: [
                        { name: `${client.emotes.guitar}  |  ` + `**\` ${client.config.discord.prefix}clear-queue \`**`,value: `เคลียคิวเพลง`,inline:true }, 
                        { name: `${client.emotes.guitar}  |  ` + `**\` ${client.config.discord.prefix}filter \`**`,value: `เพิ่มฟิวเตอร์เข้าไปในการเล่น`,inline:true },
                        { name: `${client.emotes.guitar}  |  ` + `**\` ${client.config.discord.prefix}loop \`**`,value: `การเล่นวนซ้ำ`,inline:true }, 

                        { name: `${client.emotes.guitar}  |  ` + `**\` ${client.config.discord.prefix}nowplaying \`**`,value: `ลายละเอียดเพลงที่กำลังเล่น`,inline:true },
                        { name: `${client.emotes.guitar}  |  ` + `**\` ${client.config.discord.prefix}pause \`**`,value: `หยุดการเล่นชั่วคราว`,inline:true }, 
                        { name: `${client.emotes.guitar}  |  ` + `**\` ${client.config.discord.prefix}play \`**`,value: `เล่นเพลง`,inline:true }, 

                        { name: `${client.emotes.guitar}  |  ` + `**\` ${client.config.discord.prefix}queue \`**`,value: `ลายละเอียดคิวการเล่น`,inline:true }, 
                        { name: `${client.emotes.guitar}  |  ` + `**\` ${client.config.discord.prefix}resume \`**`,value: `เล่นต่อจากเดิม`,inline:true }, 
                        { name: `${client.emotes.guitar}  |  ` + `**\` ${client.config.discord.prefix}search \`**`,value: `ค้นหา`,inline:true },

                        { name: `${client.emotes.guitar}  |  ` + `**\` ${client.config.discord.prefix}shuffle \`**`,value: `สถานะการเล่น`,inline:true }, 
                        { name: `${client.emotes.guitar}  |  ` + `**\` ${client.config.discord.prefix}skip \`**`,value: `ข้ามเพลงที่กำลังเล่น`,inline:true }, 
                        { name: `${client.emotes.guitar}  |  ` + `**\` ${client.config.discord.prefix}stop \`**`,value: `หยุดเพลงเเละตัดการเชื่อมต่อห้องเสียง`,inline:true }, 
                        
                        { name: `${client.emotes.guitar}  |  ` + `**\` ${client.config.discord.prefix}volume \`**`,value: `ระดับความดังของเสียง`,inline:true }, 
                        { name: `${client.emotes.guitar}  |  ` + `**\` ${client.config.discord.prefix}w-filters \`**`,value: `รายระเอียดฟิวเตอร์ที่ใช้อยู่`,inline:true }, 
                        { name: `${client.emotes.diamond}  |  ` + `**\` Just A Space \`**`,value: `พื้นที่โฆษณา`,inline:true }, 
                    ],
                    timestamp: new Date(),
                },
            });

            message.channel.send({
                embed: {
                    color: '#2eb0ff',
                    author: { name: 'คำสั่งเกี่ยวกับฟิวเตอร์' },
                    description: `ถ้าคุณต้องการ filters ให้้ใช้คำสั่งในรูปเเบบต่อไปนี้นะคะ \n **\` m!filter (ใส่ filters ที่ต้องการค่ะ) \`**. `,
                    footer: { text: 'M i K U' },
                    fields: [
                        { name: `${client.emotes.control_knobs}  |  ` + ` ${client.config.discord.prefix}Filters `, value: client.filters.map((x) => `\` ${x} \``).join(' ') },
                    ],
                    timestamp: new Date(),
                },
            });

            message.channel.send({
                embed: {
                    color: '#2eb0ff',
                    author: { name: 'คำสั่งเกี่ยวกับเกม' },
                    description: `โปรดใช้คำสั่งตามนี้นะค่ะ  **-> \` ${client.config.discord.prefix}game [คำสั่งเกม] [เลขไอดีห้อง] \` <-**`,
                    footer: { text: 'M i K U' },
                    fields: [
                        { name: `:tv:` + `  |  YouTube-Together`, value: `\` ${client.config.discord.prefix}youtube \` \n \` ${client.config.discord.prefix}ytt \``,inline: true },
                        { name: `:video_game:` + `  |  Betrayal.io`, value: `\` ${client.config.discord.prefix}betrayal \` \n \` ${client.config.discord.prefix}bt \``,inline: true },
                        { name: `:game_die:` + `  |  Discord:Poker Night`, value: `\` ${client.config.discord.prefix}pokernight \` \n \` ${client.config.discord.prefix}pn \``,inline: true },

                        { name: `:diving_mask:` + `  |  Fishington.io`, value: `\` ${client.config.discord.prefix}fishington \` \n \` ${client.config.discord.prefix}ft \``,inline: true },
                        { name: `:chess_pawn:` + `  |  Discord:Chess In The Park`, value: `\` ${client.config.discord.prefix}chessinthepark \` \n \` ${client.config.discord.prefix}chess \``,inline: true },
                        { name: `:gear:` + `  |  Discord:Chess In The Park Development`, value: `\` ${client.config.discord.prefix}chessdevelopment \` \n \` ${client.config.discord.prefix}chessdev \``,inline: true },
                    ],
                    timestamp: new Date(),
                },
            });
                


        } 

		else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - ขอโทษจริงๆค่ะ มิกุไม่สามารถหาคำสั่งนี้ได้ค่ะ `);

            message.channel.send({
                embed: {
                    color: '#2eb0ff',
                    author: { name: 'การช่วยเหลือเกี่ยวกับคำสั่ง' },
                    footer: { text: 'M i K U' },
                    fields: [
                        { name: 'คำสั่ง', value: command.name, inline: true },
                        { name: 'ประเภท', value: command.category, inline: true },
                        { name: 'ตัวย่อ', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
                        { name: 'ตัวอย่างการใช้งาน', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                    description: 'มิกุ ขอเเนะนำการใช้งานนะคะ',
                }
            });
		console.log(`Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`);
        };
    },
};