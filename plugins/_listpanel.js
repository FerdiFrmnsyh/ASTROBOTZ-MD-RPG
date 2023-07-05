import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = ` 📮 RAM 1GB CPU 70%   : 3K/BULAN\n📮 RAM 2GB CPU 100% : 6K/BULAN\n📮 RAM 3GB CPU 145% : 10K/BULAN\n📮 RAM 4GB CPU 175% : 14K/BULAN\n📮 RAM 5GB CPU 200% : 18K/BULAN\n\n📮 UNLIMITED DISK-RAM-CPU : 20K\n📮 ADMIN PANEL : 25K JAMIN BALMOD\n\n\nᴋᴇᴜɴᴛᴜɴɢᴀɴ ᴘᴀɴᴇʟ :\nʜᴇᴍᴀᴛ ᴋᴏᴜᴛᴀ\nʜᴇᴍᴀᴛ ʀᴜᴀɴɢ ᴘᴇɴʏɪᴍᴘᴀɴᴀɴ\nғᴀsᴛ ʀᴇsᴘᴏɴ\nʙᴏᴛ ᴏɴʟɪɴᴇ 24ᴊᴀᴍ\nᴘʀᴏsᴇs ɪɴsᴛᴀʟʟ ᴍᴏᴅᴜʟᴇ ɢᴀᴍᴘᴀɴɢ\n\n\nᴋᴇᴜɴᴛᴜɴɢᴀɴ ᴊᴏɪɴ ᴀᴅᴍɪɴ ᴘᴀɴᴇʟ :\nʙɪsᴀ ᴄʀᴇᴀᴛᴇ sᴇʀᴠᴇʀ ᴘᴀɴᴇʟ sᴇɴᴅɪʀɪ\nʙɪsᴀ ᴅɪᴊᴜᴀʟ ᴋᴇᴍʙᴀʟɪ\nʙɪsᴀ ʙɪᴋɪɴ ᴘᴀɴᴇʟ ᴜɴʟɪᴍɪᴛᴇᴅ sᴇɴᴅɪʀɪ\nᴍɪɴᴀᴛ ᴄʜᴀᴛ ᴏᴡɴᴇʀ`
let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

conn.reply(m.chat, info, m, { contextInfo: { externalAdReply: {title: global.wm, body: 'ʙᴇʀɪᴋᴜᴛ ᴅᴀғᴛᴀʀ ʜᴀʀɢᴀ ᴘᴀɴᴇʟ ғᴇʀᴅʏ sᴛᴏʀᴇ', sourceUrl: owner, thumbnail: fs.readFileSync('./thumbnail.jpg')  }}})
}
handler.customPrefix = /^(listpanel|buypanel)$/i
handler.command = new RegExp

export default handler