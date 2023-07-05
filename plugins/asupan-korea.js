import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://violetics.pw/api/asupan/korea?apikey=0a5f-75fe-5ea4'
	conn.sendFile(m.chat, url, null, 'Asupan korea', m)
}
handler.command = /^(korea)$/i
handler.tags = ['asupan']
handler.help = ['korea']
handler.premium = false
handler.limit = true

export default handler