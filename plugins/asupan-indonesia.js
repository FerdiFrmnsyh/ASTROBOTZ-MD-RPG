import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://violetics.pw/api/asupan/indonesia?apikey=0a5f-75fe-5ea4'
	conn.sendFile(m.chat, url, null, 'ASUPAN INDONESIA', m)
}
handler.command = /^(indonesia)$/i
handler.tags = ['asupan']
handler.help = ['indonesia']
handler.premium = false
handler.limit = true

export default handler