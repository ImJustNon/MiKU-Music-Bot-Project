module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} | **ไม่มี**เพลงที่กำลังเล่นอยู่ในเซิฟเวอร์นี้นะคะ`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} | เอ๊ะ ! คุณยังไม่ได้เข้าห้องเสียงซักห้องเลยนะ`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} | เอ๊ะ ! มิกุ**ไม่สามารถเข้า**ห้องเสียงของคุณได้คะ , ช่วย**เช็คยศ**ของมิกุทีนะว่าอนุญาติให้เข้าหรือเปล่า `);
            break;
        case 'VideoUnavailable':
            message.channel.send(`${client.emotes.error} | ${args[0].title} - สิ่งนี้**ไม่สามารถเล่น**ได้ในประเทศของคุณคะ เดี๋ยวมิกุจะข้ามให้เลยนะคะ`);
            break;
        case 'MusicStarting':
            message.channel.send(`เพลงกำลังเริ่มคะ... **โปรดรอนิดหนึ่ง** หรือ **ลองอีกครั้งนะคะ**`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - ขออภัยคะ...เกิดบางอย่าง**ผิดพลาด**ขึ้น : ${error}`);
    };
};
