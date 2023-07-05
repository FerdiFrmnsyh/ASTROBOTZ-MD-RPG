// Hilih

let handler = async (m, { conn }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `${htki} *BIODATA* ${htka}`
let biooo =`${htki} *BIODATA* ${htka}
${htjava} *💌 ɴᴀᴍᴀ* : ғʀᴅʏ ғʀᴍɴsʏʜ
${htjava} *♂️ ɢᴇɴᴅᴇʀ* : ᴘʀɪᴀ
${htjava} *🕋 ᴀɢᴀᴍᴀ* : ɪsʟᴀᴍ
${htjava} *⏰ ᴛᴀɴɢɢᴀʟ ʟᴀʜɪʀ* : 15 ᴍᴇɪ 2005
${htjava} *🎨 ᴜᴍᴜʀ* : ɢᴀᴛᴀᴜ
${htjava} *🧮 ᴋᴇʟᴀs* : ʟᴜᴘᴀ
${htjava} *🧩 ʜᴏʙʙʏ* : ᴍᴀɪɴ ʜᴀᴘᴇ 
${htjava} *📷 ɪɴsᴛᴀɢʀᴀᴍ* : ${sig}
${htjava} *💌 ʏᴛ:* ${syt}
•·––––––––––––––––––––––––––·•
`
await conn.sendFile(m.chat, pu, 'menu.jpg', biooo, false, m, adReply)
}

handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bio|ownerbio|bioowner)$/i

export default handler
