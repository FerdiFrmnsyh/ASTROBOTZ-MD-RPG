let handler = async (m, { conn }) => {
let imgr = flaaa.getRandom()
  let user = global.db.data.users[m.sender]
  const caption = `
⛊「 *B A N K  U S E R* 」
│ 📛 *ɴᴀᴍᴇ:* ${user.registered ? user.name : conn.getName(m.sender)}
│ 💳 *ᴀᴛᴍ:* ${user.atm > 0 ? 'Level ' + user.atm : '✖️'}
│ 🏛️ *ʙᴀɴᴋ:* ${user.bank} 💲 / ${user.fullatm} 💲
│ 💹 *ᴍᴏɴᴇʏ:* ${user.money} 💲
│ 🤖 *ʀᴏʙᴏ:* ${user.robo > 0 ? 'Level ' + user.robo : '✖️'}
│ 🌟 *sᴛᴀᴛᴜs:* ${user.premiumTime > 0 ? 'Premium' : 'Free'}
│ 📑 *ʀᴇɢɪsᴛᴇʀᴇᴅ:* ${user.registered ? 'Yes':'No'}
╰──┈┈⭑
`.trim()
  conn.sendButton(m.chat, caption, global.wm, imgr + 'bank', [`Inventory`, '.inv'],m)
}
handler.help = ['bank']
handler.tags = ['rpg']
handler.command = /^(bank((total)?|cek)|cekbank)$/i

handler.register = false
export default handler