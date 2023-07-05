let handler = async (m, { conn }) => {
	//-----PRICE
// List Harga
let sh = '2'
let sn = '5'
let ss = '10'
let sp = '15'
let sv = '30'
//premium
let ph = '1'
let pn = '3'
let pp = '5'
let pv = '7'
let ppm = '1.'

let scnya =`
╭┄┄┄┄┄┄〖 *Sewa Bot* 〗╌╌╌╌╌╌⊶
┊⌬ sᴇᴡᴀ ʜᴇᴍᴀᴛ: ${sh}k/ɢʀᴜᴘ ( 1 ᴍɪɴɢɢᴜ )
┊⌬ sᴇᴡᴀ ɴᴏʀᴍᴀʟ: ${sn}k/ɢʀᴜᴘ ( 1 ʙᴜʟᴀɴ )
┊⌬ sᴇᴡᴀ sᴛᴀɴᴅᴀʀ: ${ss}k/ɢʀᴜᴘ ( 2 ʙᴜʟᴀɴ )
┊⌬ sᴇᴡᴀ ᴘʀᴏ: ${sp}k/ɢʀᴜᴘ ( 4 ʙᴜʟᴀɴ )
┊⌬ sᴇᴡᴀ ᴠᴠɪᴘ: ${sv}k/ɢʀᴜᴘ ( 12 ʙᴜʟᴀɴ )
╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄⊶
《 ${bottime} 》
╭┄┄┄┄┄┄〖 *Upgrade Premium* 〗╌╌╌╌╌╌⊶
┊⌬ ᴘʀᴇᴍɪᴜᴍ ʜᴇᴍᴀᴛ: ${ph}k ( 1 Minggu )
┊⌬ ᴘʀᴇᴍɪᴜᴍ ɴᴏʀᴍᴀʟ: ${pn}k ( 1 Bulan )
┊⌬ ᴘʀᴇᴍɪᴜᴍ ᴘʀᴏ: ${pp}k ( 4 Bulan )
┊⌬ ᴘʀᴇᴍɪᴜᴍ ᴠᴠɪᴘ: ${pv}k ( 8 Bulan )
┊⌬ ᴘʀᴇᴍɪᴜᴍ ᴘᴇʀᴍᴀɴᴇɴᴛ: ${ppm}k ( ᴜɴʟɪᴍɪᴛᴇᴅ )
╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄⊶

⫹ ⛾ ᴘᴀʏᴍᴇɴᴛ ⛾ ⫺
☘ ᴘᴜʟsᴀ ᴛᴇʟᴋᴏᴍsᴇʟ: [ 082350496532 ]
☘ ᴅᴀɴᴀ: [ 082350496532 ]
☘ ᴏᴠᴏ: [ 082350496532 ]
☘ ɢᴏᴘᴀʏ: [ - ]

–––––– *🐾 ᴋᴇʙɪᴊᴀᴋᴀɴ* ––––––
🗣️: ʜᴀʀɢᴀɴʏᴀ ᴍᴀʜᴀʟ...
💬: ᴛᴀᴡᴀʀ ᴀᴊᴀ.

🗣️: sᴄᴀᴍ?
💬: ɢᴋ.

*Contact Owner :*
ᴡʜᴀᴛsᴀᴘʟ : 0823504965328
ᴛᴇʟᴇɢʀᴀᴍ : @ɪᴛss_ғᴇʀʀ
ɪɴsᴛᴀɢʀᴀᴍ : @xғ.ғʀᴅʏᴄᴏᴏʟᴢᴢ

[ 𝐖𝐚𝐬𝐩𝐚𝐝𝐚 𝐂𝐥𝐨𝐧𝐞 ! ]

▌│█║▌║▌║║▌║▌║█│▌

${botdate}`.trim()

/*const sections = [
   {
	title: `${htjava} SEWA ✦-------`,
	rows: [
	    {title: "🔖 HEMAT", rowId: '.order *Paket:* HEMAT • Sewa', description: 'PRICE: ' + sh + 'k (1 minggu)' },
	    {title: "🔖 NORMAL", rowId: '.order *Paket:* NORMAL • Sewa', description: 'PRICE: ' + sn + 'k (1 bulan)' },
	{title: "🔖 STANDAR", rowId: '.order *Paket:* STANDAR • Sewa', description: 'PRICE: ' + ss + 'k (2 bulan)' },
	{title: "🔖 PRO", rowId: '.order *Paket:* PRO • Sewa', description: 'PRICE: ' + sp + 'k (4 bulan)' },
	{title: "🔖 VIP", rowId: '.order *Paket:* VIP • Sewa', description: 'PRICE: ' + sv + 'k (12 bulan)' },
	]
    }, {
    title: `${htjava} PREMIUM ✦-------`,
	rows: [
	    {title: "🌟 HEMAT", rowId: '.order *Paket:* HEMAT • Premium', description: 'PRICE: ' + ph + 'k (1 minggu)' },
	    {title: "🌟 NORMAL", rowId: '.order *Paket:* NORMAL • Premium', description: 'PRICE: ' + pn + 'k (1 bulan)' },
	{title: "🌟 PRO", rowId: '.order *Paket:* PRO • Premium', description: 'PRICE: ' + pp + 'k (4 bulan)' },
	{title: "🌟 VIP", rowId: '.order *Paket:* VIP • Premium', description: 'PRICE: ' + pv + 'k (8 bulan)' },
	{title: "🌟 PERMANENT", rowId: '.order *Paket:* PERMANENT • Premium', description: 'PRICE: ' + ppm + 'k (UNLIMITED)' },
	]
    },
]

const listMessage = {
  text: snya,
  footer: botdate,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: fpayment})*/
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
conn.sendFile(m.chat, 'https://telegra.ph/file/8daed43036713fe312866.jpg', null, scnya, m)

}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler