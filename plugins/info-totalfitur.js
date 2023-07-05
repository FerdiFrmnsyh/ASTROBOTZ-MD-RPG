"use strict"
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
await conn.reply(m.chat, `ᴛᴏᴛᴀʟ ғɪᴛᴜʀ sᴀᴀᴛ ɪɴɪ ᴀᴅᴀʟᴀʜ : ${totalf}`, m)
}

handler.help = ['totalfitur']
handler.tags = ['tools']
handler.command = ['totalfitur']
handler.limit = false
export default handler 
  
  