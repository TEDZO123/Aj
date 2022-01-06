const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.imgur.com/9nXALw8.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `T E D Z O  ＢＯＴ

*BGM BOT GROUP* : https://chat.whatsapp.com/KzPohCK51Tt0Ok4Gt0N12T

*owner id instagram* :https://instagram.com/a_s_l_a_m_._x?utm_medium=copy_link.

*OWNER* : https://wa.me/917736835721

■□■□■□■□■□■□■□■□■□■□
       _𝑻𝑬𝑫𝒁𝑶 𝘽𝙤𝙩_
  ▣▣ created by ASLU ▣▣

`}) 

}));
