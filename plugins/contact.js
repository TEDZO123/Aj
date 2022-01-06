const Ktb = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
Ktb.addCommand({ pattern: 'owner ?(.*)', fromMe: false, desc: 'owner number' }, (async (message, match) => {

//coded by saidali
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:1.0\n' 
            + 'FN:Aslu [OWNER]\n' // full name
            + 'ORG:Aslu;\n' // 
            + 'TEL;type=CELL;type=VOICE;waid=917736835721:+91 7736835721\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(message.jid,{displayname: "Aslu [OWNER]", vcard: vcard}, MessageType.contact)
}))
