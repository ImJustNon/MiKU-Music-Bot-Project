module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send(`${client.emotes.success} | OK คะมิกุได้ทำการ  **ยกเลิก** เรียบร้อยเเล้วคะ`);
    } else message.channel.send(`${client.emotes.error} | โปรดส่งตัวเลขระหว่าง **1** - **${tracks.length}** ให้มิกุนะคะ`);
};