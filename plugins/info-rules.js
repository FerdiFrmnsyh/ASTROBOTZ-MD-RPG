/*
By : Zyko MD & S h e n d y 
©Zyko MD 2023

 * ig: @zykomd
 * yt: @zykobotz
 * tt: @zykosiapa
*/

import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix: _p, command: _q}) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let { exp, limit, level, role, money, lastclaim, lastweekly, registered, regTime, age, banned, pasangan, premiumTime } = global.db.data.users[who]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(who)
//let about = (await conn.fetchStatus(who).catch(console.error) || {}).status || 'No Bio'
let pp = await conn.profilePictureUrl(who).catch(_ => './src/avatar_contact')
let math = max - xp
let tag = await conn.getName(m.sender)
let mot = pickRandom(["⌬", "⏣", "❐", "❑", "❇", "✡", "✯", "✨", "⛾", "⛐", "♨", "☫", "☘", "◳", "☣", "✎"])

let mii = `☰ 𝗥𝘂𝗹𝗲𝘀 𝗕𝗼𝘁 ☰

➯ *ᴛɪᴅᴀᴋ sᴘᴀᴍ*
 ᴋᴇʙɪᴊᴀᴋᴀɴ ᴘʀɪᴠᴀsɪ ᴀᴛᴀᴜ ᴘʀɪᴠᴀᴛᴇ ᴡɪᴛʜᴏᴜᴛ ʙᴇɪɴɢ ɪɴ ᴘᴜʙʟɪᴄ

• *ᴋᴇʙɪᴊᴀᴋᴀɴ ᴘʀɪᴠᴀsɪ:*
1. ${wm2} ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴍᴇʀᴇᴋᴀɴ ʀɪᴡᴀʏᴀᴛ ᴄʜᴀᴛ ᴜsᴇʀ.
2. ${wm2} ᴛɪᴅᴀᴋ ᴍᴇɴʏᴇʙᴀʀ ɴᴏᴍᴏʀ ᴜsᴇʀ
3. ${wm2} ᴛɪᴅᴀᴋ ᴍᴇɴʏɪᴍᴘᴀɴ ᴍᴇᴅɪᴀ ʏɢ ᴅɪᴋɪʀɪᴍ ᴜsᴇʀs.
4. ${wm2} ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴍᴇɴʏᴀʟᴀʜ ɢᴜɴᴀᴋᴀɴ ᴅᴀᴛᴀ ᴜsᴇʀ.
5. ᴏᴡɴᴇʀ ${wm2} ʙᴇʀʜᴀᴋ ᴍᴇʟɪʜᴀᴛ ʀɪᴡᴀʏᴀᴛ ᴄʜᴀᴛ ᴜsᴇʀ ᴀɢᴀʀ ᴛᴅᴋ ᴅɪsᴀʟᴀʜɢᴜɴᴀᴋᴀɴ
6. ᴏᴡɴᴇʀ ${wm2} ʙᴇʀʜᴀᴋ ᴍᴇʟɪʜᴀᴛ sᴛᴀᴛᴜs ᴜsᴇʀ.
7. ᴏᴡɴᴡʀ ${wm2} ᴅᴀᴘᴀᴛ ᴍᴇʟɪʜᴀᴛ ʀɪᴡᴀʏᴀᴛ ᴄʜᴀᴛ,ᴅᴀɴ ᴍᴇᴅɪᴀ ʏɢ ᴅɪᴋᴅɪʀɪᴍᴋᴀɴ ᴜsᴇʀs.

• ᴊɪᴋᴀ ᴀᴅᴀ ʙᴜɢ/ᴇʀʀᴏʀ ᴅɪ ᴡᴇʙsɪᴛᴇ ʙᴏᴛ ᴋᴀᴍɪ, sᴀʏᴀ ᴍᴏʜᴏɴ ᴍᴀᴀғ. ᴜɴᴛᴜᴋ ʀᴇᴘᴏʀᴛɴʏᴀ, ᴛᴀɴᴘᴀ ʙɪᴀʏᴀ ᴅᴀɴ ᴀᴍᴀɴ

ᴄᴀʀᴀ ᴘᴇɴɢɢᴜɴᴀᴀɴ ${wm2} ᴀɢᴀʀ ᴛᴇʀʜɪɴᴅᴀʀ ᴅᴀʀɪ sᴜsᴘᴇɴᴅ

• *ᴘᴇʀᴀᴛᴜʀᴀɴ ${wm2}:*
1. Users dilarang menelpon maupun memvideo call nomor bot.
2. Users dilarang mengirimkan berbagai bug, virtex, dll ke nomor bot.
3. Users diharap tidak melakukan spam dalam penggunaan bot.
4. Users dilarang menambahkan nomor bot secara illegal, untuk menambahkan silahkan hubungi Owner.
5. Users diharap untuk tidak menyalah gunakan fitur fitur bot.

• *Note:*
1. Jika ada yang menjual/beli/sewa bot atas nomor ini, harap segera hubungi owner!
2. Jika ingin donasi bisa langsung aja ya social payment Dana
3. Ketik .sewa Jika Ingin SewaBot 

•Agar terhindar dari Suspand/Ban kalian bisa membaca juga di Peraturan kami.

•Perlu kalian tahu bahwa kami menjaga Privasi dari data-data anda!

• *Syarat Ketentuan ${wm2}:*

1. ${wm2} akan keluar dari group jika ada salah satu member melanggar peraturan.
2. ${wm2} dapat mem-ban users secara sepihak terlepas dari users salah atau tidak.
3. ${wm2} tidak akan bertanggungjawab atas apapun yang users lakukan terhadap fitur bot.
4. ${wm2} akan memberlakukan hukuman: block atau ban terhadap users yang melanggar peraturan.
5. ${wm2} bertanggung jawab atas kesalahan fatal dalam programing maupun owner.
❏┳━━◩
┍┛
┆⟥⟤ ➠ ${global.bottime}
└─┈⟅
${global.botdate}`
await conn.sendFile(m.chat, pu, 'menu.jpg', mii, false, m, adReply)
}
handler.help = ['menu', 'help']
handler.tags = ['main']
handler.command = /^(rules)$/i
export default handler
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]  
}
function ucapp() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat Malam"
    if (time >= 4) {
        res = "Selamat Pagi"
    }
    if (time > 10) {
        res = "Selamat Siang"
    }
    if (time >= 15) {
        res = "Selamat Sore"
    }
    if (time >= 18) {
        res = "Selamat Malam"
    }
    return res
}