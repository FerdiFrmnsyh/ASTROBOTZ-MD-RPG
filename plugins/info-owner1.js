// Hilih
"use strict"
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `💌 ᴅᴇᴠᴇʟᴏᴘᴇʀ ʙᴏᴛ `, `ᴊᴀɴɢᴀɴ ʟᴜᴘᴀ sᴀᴠᴇ`, `ferdyfrmnsyhxx@gmail.com`, `🇮🇩 ɪɴᴅᴏɴᴇsɪᴀ`, `📍 ${sig}`, `👤ᴏᴡɴᴇʀ ${namabot}`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `🎈 ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ`, `📵 ᴅᴏɴᴛ sᴘᴀᴍ/ᴄᴀʟʟ ᴍᴇ 😢`, `ɴᴏᴛʜɪɴɢ`, `🇮🇩 Indonesia`, `📍 ${sgh}`, `ᴊᴀɴɢᴀɴ sᴘᴀᴍ ᴋᴀᴋ ☺`]
  ], m)
 
  
let caption = `
👋 ʜᴇʟʟᴏ *@${m.sender.split`@`[0]}*, 
ɪᴛs ᴍʏ ᴏᴡɴᴇʀ ᴀɴᴅ ᴅᴇᴠᴇʟᴏᴘᴇʀ
ᴅᴏɴᴛ sᴘᴀᴍ ᴏᴋᴀʏ...
`

await conn.reply(m.chat, caption, sentMsg, { mentions: conn.parseMention(caption) })
  }

handler.help = ['creator', 'own']
handler.tags = ['info']
handler.command = /^(leon)$/i

export default handler