import { performance } from 'perf_hooks'

let handler = async (m, { conn }) => {

 let start = `💻𝙼𝚎𝚖𝚞𝚕𝚊𝚒 𝙰𝚔𝚜𝚎𝚕𝚎𝚛𝚊𝚜𝚒 𝙱𝚘𝚝....𝚆𝚊𝚒𝚝 𝙵𝚘𝚛 𝙼𝚒𝚗𝚞𝚝𝚎𝚜`
 let boost = `${pickRandom(['[▒▒▒▒▒▒▒▒▒▒]'])}`
 let boost2 = `${pickRandom(['[█▒▒▒▒▒▒▒▒▒]','[██▒▒▒▒▒▒▒▒]'])}`
 let boost3 = `${pickRandom(['[██▒▒▒▒▒▒▒▒]','[███▒▒▒▒▒▒▒▒]','[████▒▒▒▒▒▒▒]'])}`
 let boost4 = `${pickRandom(['[██████▒▒▒▒▒▒▒]','[████████▒▒▒▒▒▒]','[████████▒▒▒▒]'])}`
 let boost5 = `${pickRandom(['[██████████▒▒▒]','[████████████▒]'])}`
 let boost6 = `${pickRandom(['*Conection Lost...*','[████████████▒]','[█▒▒▒▒▒▒▒▒▒]'])}`
 let boost7 = `${pickRandom(['[██████████▒▒▒]','[████████████▒]','[████████████]'])}`

   await m.reply(start)
   await m.reply(boost)
   await m.reply(boost2)
   await m.reply(boost3)
   await m.reply(boost4)
   await m.reply(boost5)
   await m.reply(boost6)
   await m.reply(boost7)
   let old = performance.now()
   let neww = performance.now()
   let speed = `${neww - old}`
   let finish = `*_📊 𝙱𝚘𝚝 𝙱𝚎𝚛𝚑𝚊𝚜𝚒𝚕 𝙳𝚒𝚙𝚎𝚛𝚌𝚎𝚙𝚊𝚝_*\n\n*_⚡: ${speed} 𝙳𝚎𝚝𝚒𝚔!_*`

     conn.reply(m.chat, finish, m)
}
handler.help = ['boost', 'refresh']
handler.tags = ['info']
handler.command = /^boost|refresh/i

handler.rowner = true 


handler.fail = null

export default handler 

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}