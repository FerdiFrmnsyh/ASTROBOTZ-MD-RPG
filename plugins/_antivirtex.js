let handler = m => m

handler.before = function (m, { user, text }) {

  if (m.isBaileys && m.fromMe) return
  let chat = global.db.data.chats[m.chat]
  let name = this.getName(m.sender)

  if (chat.antiVirtex && text > 2000) {
    this.reply(m.chat `
*「 𝙰𝙽𝚃𝙸 𝚅𝙸𝚁𝚃𝙴𝚇 」*

𝚃𝙴𝚁𝙳𝙴𝚃𝙴𝙺𝚂𝙸 *${name}* 𝚃𝙴𝙻𝙰𝙷 𝙼𝙴𝙽𝙶𝙸𝚁𝙸𝙼 𝚅𝙸𝚁𝚃𝙴𝚇!

𝙼𝙰𝙰𝙵, 𝙺𝙰𝙼𝚄 𝙰𝙺𝙰𝙽 𝙳𝙸𝙺𝙸𝙲𝙺!
`.trim(), m)

    this.groupRemove(m.chat, [m.sender])
  } else return false
}
handler.group = true

export default handler
