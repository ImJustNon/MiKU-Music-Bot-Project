module.exports = (client, message, queue, track) => {
    message.channel.send({
        embed: {
            color: '#383efc',
            author: { name: ' เพิ่มคิว'},
            description: 'มิกุได้เพิ่ม เพลงนี้ เข้าไปในคิวเรียบร้อยเเล้วนะคะ' ,
            thumbnail: { url: track.thumbnail },
            fields:[
               { name: client.emotes.music +' |  เพลง :',value: `[${track.title}](${track.url})`},

               { name: client.emotes.loading +' |  ความยาว :',value: `**\` ${track.duration} \`**`,inline: true},
               { name: client.emotes.request +' |  เพิ่มโดย :',value: `**${track.requestedBy.username}**`,inline: true},
            ],
            footer: { text: 'M i K U' },
            timestamp: new Date(),
        },
    
    
    });
};