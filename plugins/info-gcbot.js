import fs from 'fs'
import fetch from 'node-fetch'
 let handler = async(m, { conn }) => { 

         let pp = fs.readFileSync('./thumbnail.jpg')
         let gc1 = 'https://chat.whatsapp.com/CTg1H1p8LoPBzteUgwGcye'
         let caption = `*ᴍʏ ɢʀᴏᴜᴘ ᴏғғɪᴄɪᴀʟ*\n\n${sgc}`
   m.reply(caption)
 }
 handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i
 export default handler