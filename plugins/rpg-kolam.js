let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn }) => {

let name = global.db.data.users[m.sender].name
let level = global.db.data.users[m.sender].level
let exp = global.db.data.users[m.sender].exp
let paus = global.db.data.users[m.sender].paus
let kepiting = global.db.data.users[m.sender].kepiting
let gurita = global.db.data.users[m.sender].gurita
let cumi = global.db.data.users[m.sender].cumi
let buntal = global.db.data.users[m.sender].buntal
let dory = global.db.data.users[m.sender].dory
let lumba = global.db.data.users[m.sender].lumba
let lobster = global.db.data.users[m.sender].lobster
let hiu = global.db.data.users[m.sender].hiu
let udang = global.db.data.users[m.sender].udang
let ikan = global.db.data.users[m.sender].ikan
let orca = global.db.data.users[m.sender].orca
let past = `*—「 KOLAM 🏝️ 」—*
  
*💌 ɴᴀᴍᴇ :* ${name}
*📊 ʟᴇᴠᴇʟ :* ${level}
*✨ ᴇxᴘ :* ${exp}

⛊━─┈────────┈─━⛊
🐳 ᴘᴀᴜs: *${paus}*   
🦀 ᴋᴇᴘɪᴛɪɴɢ: *${kepiting}*   
🐙 ɢᴜʀɪᴛᴀ: *${gurita}*   
🦑 ᴄᴜᴍɪ: *${cumi}*   
🐡 ʙᴜɴᴛᴀʟ: *${buntal}*  
🐠 ᴅᴏʀʏ: *${dory}*
🐬 ʟᴜᴍʙs: *${lumba}*
🦞 ʟᴏʙᴀsᴛᴇʀ: *${lobster}*
🦈 ʜɪᴜ: *${hiu}*
🦐 ᴜᴅᴀɴɢ: *${udang}*
🐟 ɪᴋᴀɴ: *${ikan}*
🐋 ᴏʀᴄᴀ: *${orca}*
⛊━─┈────────┈─━⛊
🎏 ᴛᴏᴛᴀʟ ɪsɪ: *${paus + kepiting + gurita + cumi + buntal + dory + lumba + lobster + hiu + udang + ikan + orca}* ᴊᴇɴɪs`
let isi = ` *🦀ᴋᴇᴘɪᴛɪɴɢ = ${kepiting}*
*🐠ᴅᴏʀʏ = ${dory}*
*🦞ʟᴏʙsᴛᴇʀ = ${lobster}*
*🐟ɪᴋᴀɴ = ${ikan}*
*🦐ᴜᴅᴀɴɢ = ${udang}*
*🐬ʟᴜᴍʙᴀ² = ${lumba}*
*🦑ᴄᴜᴍɪ² = ${cumi}*
*🐋ᴘᴀᴜs = ${paus}*
*🐙ɢᴜʀɪᴛᴀ = ${gurita}*
*🦈ʜɪᴜ = ${hiu}*
*🐡ʙᴜɴᴛᴀʟ = ${buntal}*
*🐳ᴏʀᴄᴀ = ${orca}*`.trim()

  conn.reply(m.chat, past, m)
  }
  handler.help = ['kotakikan', 'kolam', 'kolamikan']
  handler.tags = ['rpg']
  handler.command = /^(kotak(ikan)?|kolam(ikan)?)$/i
export default handler 
handler.register = true
let wm = global.wm

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
