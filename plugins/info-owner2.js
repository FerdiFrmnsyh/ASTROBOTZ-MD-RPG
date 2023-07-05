// Hilih
let handler = async (m, { conn }) => {
let nowner = `${nomorown.split`@`[0]}@s.whatsapp.net`
let teksnomor = `${htki} *OWNER* ${htka}

✦ @${nomorown.split`@`[0]} ✦

------- ${nameown} -------

📮 *NOTE:*
• ɪɴɢɪɴ ᴅɪ sᴀᴠᴇ? sᴇʙᴜᴛ ɴᴀᴍᴀ & ᴀsᴋᴏᴛ
• ᴏᴡɴᴇʀ ʙᴇʀʜᴀᴋ ʙʟᴏᴋɪʀ sɪᴀᴘᴀᴘᴜɴ
• ᴄʜᴀᴛ ʏᴀɴɢ sᴏᴘᴀɴ ᴅᴀɴ ᴊᴀɴɢᴀɴ sᴘᴀᴍ
• ᴏᴡɴᴇʀ ʜᴀɴʏᴀ ᴀᴋᴀɴ ᴍᴇʀᴇsᴘᴏɴ ᴄʜᴀᴛ ʏᴀɴɢ sᴏᴘᴀɴ
• ɴᴏ ᴛᴇʟᴘ/ᴠᴄ`.trim()
await conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
}
handler.help = ['ownrules']
handler.tags = ['main', 'info']
handler.command = /^(ownrules)/i

export default handler
