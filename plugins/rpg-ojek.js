
let handler = async (m, { conn }) => {
    let __timers = (new Date - global.db.data.users[m.sender].lastngojek)
    let _timers = (300000 - __timers)
    let order = global.db.data.users[m.sender].ojekk
    let timers = clockString(_timers) 
let name = conn.getName(m.sender)
    let user = global.db.data.users[m.sender]
    
     if (new Date - global.db.data.users[m.sender].lastngojek > 300000) {
let randomaku1 = `${Math.floor(Math.random() * 10)}`
let randomaku2 = `${Math.floor(Math.random() * 10)}`
let randomaku4 = `${Math.floor(Math.random() * 5)}`
let randomaku3 = `${Math.floor(Math.random() * 10)}`
let randomaku5 = `${Math.floor(Math.random() * 10)}`

.trim()

let rbrb1 = (randomaku1 * 2)
let rbrb2 = (randomaku2 * 10) 
let rbrb3 = (randomaku3 * 1)
let rbrb4 = (randomaku4 * 15729)
let rbrb5 = (randomaku5 * 120)

var zero1 = `${rbrb1}`
var zero2 = `${rbrb2}`
var zero3 = `${rbrb3}`
var zero4 = `${rbrb4}`
var zero5 = `${rbrb5}`

var dimas = `✅ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴏʀᴅᴇʀᴀɴ....
`

var dimas2 = `✳️ ᴍᴇɴɢᴀɴᴛᴀʀ ᴋᴇᴛᴜᴊᴜᴀɴ....
`

var dimas3 = `
✳️ sᴀᴍᴘᴀɪ ᴅɪᴛᴜᴊᴜᴀɴ......
`

var dimas4 = `
✳️ 💹 ᴍᴇᴍᴇʀɪᴍᴀ ɢᴀᴊɪ....
`

var hsl = `
*—[ ʜᴀsɪʟ ɴɢᴏᴊᴇᴋ ${name} ]—*
 ✳️ 💹 ᴜᴀɴɢ = [ ${zero4} ]
 ✳️ ✨ ᴇxᴘ = [ ${zero5} ] 		 
 ✳️ 😍 ᴏʀᴅᴇʀ sᴇʟᴇsᴀɪ = +1
 ✳️ 📥 ᴛᴏᴛᴀʟ ᴏʀᴅᴇʀ sᴇʙᴇʟᴜᴍɴʏᴀ : ${order}
${wm}
`
var dimas5 = `*👋HALLO, Waktunya kamu ngojek lagi hari ini*`


global.db.data.users[m.sender].money += rbrb4
global.db.data.users[m.sender].exp += rbrb5
global.db.data.users[m.sender].ojekk += 1


setTimeout(() => {
                     setTimeout(() => {
                     m.reply(`${dimas5}`)
                      }, 79200000)

                     m.reply(`${hsl}`)
                     }, 27000) 
               
                     setTimeout(() => {
                     m.reply(`${dimas4}`)
                      }, 25000)
                
                     setTimeout(() => {
                     m.reply(`${dimas3}`)
                     }, 20000) 
                        
                     setTimeout(() => {
                     m.reply(`${dimas2}`)
                     }, 15000) 
                    
                     setTimeout(() => {
                     m.reply(`${dimas}`)
                     }, 10000) 
                     
                     setTimeout(() => {
                     m.reply('🔍Mencari pelanggan.....')
                     }, 0) 
  user.lastngojek = new Date * 1
    } else conn.sendButton(m.chat, `Sepertinya Anda Sudah Kecapekan Silahkan Istirahat Dulu sekitar\n🕔 *${timers}*`, wm, [['🧺inventory', '.inv']], m )
}
handler.tags = ['rpg']
handler.command = /^(ojek)$/i
handler.register = true

export default handler


function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
