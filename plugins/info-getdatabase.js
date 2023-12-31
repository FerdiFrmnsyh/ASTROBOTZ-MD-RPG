import fs from 'fs'
let handler = async (m, { conn, text }) => {
    m.reply('Wait!, Proses Getting File database.json')
    let sesi = await fs.readFileSync('./sessions/database.json')
    return await conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'database.json' }, { quoted: m })
}
handler.help = ['getdatabase']
handler.tags = ['owner']
handler.command = /^(getdatabase)$/i

handler.owner = true

export default handler
