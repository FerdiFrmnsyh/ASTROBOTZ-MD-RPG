/*
By : Fangz
*/
let handler = m => m

handler.before = function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let sender = global.db.data.chats[m.sender]
  
  let isSticker = m.mtype
  if (chat.antiStiker && isSticker) {
    if(isSticker === "stickerMessage"){
      if (global.opts) {
        if (isAdmin || !isBotAdmin){		  
        }else{
          m.reply('ᴛᴇʀᴅᴇᴛᴇᴋsɪ ᴛᴇʟᴀʜ ᴍᴇɴɢɪʀɪᴍ sᴛɪᴄᴋᴇʀ\nsᴛɪᴄᴋᴇʀ ᴀᴋᴀɴ ᴅɪʜᴀᴘᴜs!, ᴊɪᴋᴀ ᴛᴇʀᴜs ᴍᴇɴɢɪʀɪᴍ,ᴋᴀᴍᴜ ᴀᴋᴀɴ ᴅɪᴋɪᴄᴋ ᴏʟᴇʜ ʙᴏᴛ!') // ganti text terserah kamu 
          this.groupParticipantsUpdate(m.chat, [m.sender], "delete")
        }
      }
    }
  }
  return true
}

export default handler 
