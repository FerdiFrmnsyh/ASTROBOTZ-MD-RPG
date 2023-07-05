import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ\nContoh\nktp Nik 082350496532|Nama Ferdi|Tempat/Tgl Lahir Banjarmasin,15-05-2005|Jenis kelamin Laki-laki|Alamat Banjarmasin Timur|RT/RW 02/02|KecDesa Benua Anyar|Kecamatan apa aja|Agama Islam|Status Perkawinan pacar Ga tau|Pekerjaan bernafas|Kewarganegaraan Jepang|Berlaku Hingga Ganti hp lo|Provinsi jawa tengah|kabupaten kebumen'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://oni-chan.my.id/api/Fmake/ktpmaker?nik=${response[0]}&nama=${response[1]}&ttl=${response[2]}&jk=${response[3]}&gd=abc&almt=${response[4]}&rtw=${response[5]}&kel=${response[6]}&kc=${response[7]}&agm=${response[8]}&st=${response[9]}&krj=${response[10]}&ngr=${response[11]}&blk=${response[12]}&prv=${response[13]}&kab=${response[14]}&picturl=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLsSI7eajxhLwkdMqO3p1WzwCxN-8P2ctSoA&usqp=CAU&apikey=`
  conn.sendFile(m.chat, res, 'ktp.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['ktp'].map(v => v + ' <text>')
handler.tags = ['logo', 'maker']
handler.command = /^(ktp)$/i
handler.limit = false
//buatan zyko-md, jgn hapus atuh 😊
export default handler