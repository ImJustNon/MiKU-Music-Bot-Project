module.exports = (client, message, track) => {
    message.channel.send({
        embed: {
            color: '#4fe7fd',
            author: { name: ' เล่นเพลง'},
            description: 'มิกุกำลังเล่นเพลงอยู่นะค่ะ เข้ามาฟังได้เลยค่ะ' ,
            thumbnail: { url: track.thumbnail },
            fields:[
               { name: client.emotes.music +' |  เพลง :',value: `[${track.title}](${track.url})`},
               { name: client.emotes.room +' |  ในห้อง :',value: message.member.voice.channel.name},
            ],
            footer: { text: 'M i K U' },
            timestamp: new Date(),
        },
    
    
    });
    //logging
    console.log("********************");
    console.log('Connected')
    console.log(new Date());
    console.log('User = ' + track.requestedBy.username);
    console.log('Song = ' + track.title);
    console.log('Song URL = ' + track.url);
    console.log('Duration = ' + track.duration);
    console.log('Room = ' + message.member.voice.channel.name);
    console.log('Server = ' + message.guild.name);
    console.log("********************");
};