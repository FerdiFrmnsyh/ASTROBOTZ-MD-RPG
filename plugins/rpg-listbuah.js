let handler = async (m, { conn, usedPrefix }) => {
let user = global.db.data.users[m.sender]
let buah = `${htki} ɢᴜᴅᴀɴɢ ʙᴜᴀʜ @${m.sender.split`@`[0]} ${htka}

🍌 ${user.pisang} ᴘɪsᴀɴɢ
🍇 ${user.anggur} ᴀɴɢɢᴜʀ 
🥭 ${user.mangga} ᴍᴀɴɢɢᴀ
🍊 ${user.jeruk} ᴊᴇʀᴜᴋ
🍎 ${user.apel} ᴀᴘᴇʟ

ɢᴜɴᴀᴋᴀɴ ᴄᴏᴍᴍᴀɴᴅ ${usedPrefix}sᴇʟʟ ᴜɴᴛᴜᴋ ᴍᴇɴᴊᴜᴀʟ ʙᴜᴀʜ !`
conn.reply(m.chat, buah, m,{ mentions: await conn.parseMention(buah) })
}
handler.help = ['buah']
handler.tags = ['rpg']
handler.command = /^(buah|listbuah)$/i

export default handler