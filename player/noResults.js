module.exports = (client, message, query) => {
    message.channel.send(`${client.emotes.error} | ขออภัยค่ะ มิกุค้นหา ${query} ไม่พบค่ะ`);
};