import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://violetics.pw/api/asupan/japan?apikey=0a5f-75fe-5ea4'
	conn.sendFile(m.chat, url, null, 'Asupan jepang', m)
}
handler.command = /^(japan)$/i
handler.tags = ['asupan']
handler.help = ['japan']
handler.premium = false
handler.limit = true

export default handler