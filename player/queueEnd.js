module.exports = (client, message, queue) => {
    message.channel.send({
        embed: {
            color: '#9d59f4',
            author: { name: ' คิวหมดเเล้ว'},
            description: client.emotes.error +  `  |  เพลงในคิวหมดเเล้วนะคะ หากต้องการให้มิกุเล่นต่อ \n ให้ใช้ | **\`  ${client.config.discord.prefix}play  \`** | ได้เลยค่ะ`,
            footer: { text: 'M i K U' },
            timestamp: new Date(),
        },
    });

    //logging
    console.log("********************");
    console.log('Disconnect');
    console.log(new Date());
    console.log('Room = ' + message.member.voice.channel.name);
    console.log('Server = ' + message.guild.name);
    console.log("********************");
};