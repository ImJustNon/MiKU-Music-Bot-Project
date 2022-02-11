module.exports = (client, message, queue, playlist) => {
    message.channel.send(`${client.emotes.music} | มิกุได้เพิ่ม ${playlist.title} ลงไปในคิวการเล่นเเล้วนะคะ (เพลง **${playlist.tracks.length}**) `);
};