let handler = async (m, { conn, text, usedPrefix, command }) => {
await m.reply(`🗿`)
}

handler.customPrefix = /^(p)$/i
handler.command = new RegExp
export default handler

