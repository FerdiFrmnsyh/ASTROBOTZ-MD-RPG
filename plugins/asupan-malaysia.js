import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://violetics.pw/api/asupan/malaysia?apikey=0a5f-75fe-5ea4'
	conn.sendFile(m.chat, url, null, 'Asupan Malaysia', m)
}
handler.command = /^(malaysia)$/i
handler.tags = ['asupan']
handler.help = ['malaysia']
handler.premium = false
handler.limit = true

export default handler