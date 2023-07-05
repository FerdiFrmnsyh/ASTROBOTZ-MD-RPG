let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const caption = `
*❏––––––『 JADI BOT 』––––––❏*

BOT SHOP MELAYANI :
~~~~~~~~~~~~~~~~~~~~~~~~~~
JASA JADIBOT : 20K
SEWA BOT : 
PANEL.       :
SC BOT MD : 25K FREE PANEL 
SC PUSH KONTAK : 20K FREE PANEL 
---------------------------------------------------------------------
NOTE : BISA NEGO < ASAL NGOTAK > 



⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
         ❨ ${namebot} ❩

${botdate}
`.trim()
  conn.sendFile(m.chat, 'https://telegra.ph/file/f156d4384a8fd3d033aa1.jpg', null, caption, m)
}
handler.help = ['jadibot']
handler.tags = ['jadibot']
handler.command = /^(jadibot)$/i;

handler.register = false
export default handler