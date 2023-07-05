const cooldown = 300000
let handler = async (m, { usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    let timers = (cooldown - (new Date - user.lastadventure))
    if (user.health < 80) return m.reply(`
ʀᴇǫᴜɪʀᴇs ᴀᴛ ʟᴇᴀsᴛ 80 ❤️ʜᴇᴀʟᴛʜs ғᴏʀ ᴛʜᴇ ᴀᴅᴠᴇɴᴛᴜʀᴇ!!
ᴘʟᴇᴀsᴇ ʙᴜʏ ❤️ ʜᴇᴀʟᴛʜs ғɪʀsᴛ ʙʏ ᴛᴛᴘɪɴɢ *${usedPrefix}ʙᴜʏ ᴘᴏᴛɪᴏɴ <quantity>*,
ᴀɴᴅ ᴛʏᴘᴇ *${usedPrefix}ʜᴇᴀʟ <quantity>* ᴜɴᴛᴜᴋ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ᴘᴏᴛɪᴏɴ
`.trim())
    if (new Date - user.lastadventure <= cooldown) return m.reply(`
ʏᴏᴜ'ʀᴇ ᴀʟʀᴇᴀᴅʏ ᴀᴅᴠᴇɴᴛᴜʀᴇ!!, ᴘʟᴇᴀsᴇ ᴡᴀɪᴛ *🕐${timers.toTimeString()}*
`.trim())
    const rewards = reward(user)
    let text = 'ʏᴏᴜ\'ᴠᴇ ʙᴇᴇɴ ᴀᴅᴠᴇɴᴛᴜʀᴇ ᴀɴᴅ ʟᴏsᴛ'
    for (const lost in rewards.lost) if (user[lost]) {
        const total = rewards.lost[lost].getRandom()
        user[lost] -= total * 1
        if (total) text += `\n*${global.rpg.emoticon(lost)}${lost}:* ${total}`
    }
    text += '\n\nᴋᴀᴍᴜ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ'
    for (const rewardItem in rewards.reward) if (rewardItem in user) {
        const total = rewards.reward[rewardItem].getRandom()
        user[rewardItem] += total * 1
        if (total) text += `\n*${global.rpg.emoticon(rewardItem)}${rewardItem}:* ${total}`
    }
    m.reply(text.trim())
    user.lastadventure = new Date * 1
}
handler.help = ['adventure', 'petualang', 'berpetualang', 'mulung']
handler.tags = ['rpg']
handler.command = /^(adventure|(ber)?petualang(ang)?|mulung)$/i

handler.cooldown = cooldown
handler.disabled = false

export default handler

function reward(user = {}) {
    let rewards = {
        reward: {
            money: 201,
            exp: 301,
            trash: 101,
            potion: 2,
            rock: 2,
            wood: 2,
            string: 2,
            common: 2 * (user.dog && (user.dog > 2 ? 2 : user.dog) * 1.2 || 1),
            uncommon: [0, 0, 0, 1, 0].concat(
                new Array(5 - (
                    (user.dog > 2 && user.dog < 6 && user.dog) || (user.dog > 5 && 5) || 2
                )).fill(0)
            ),
            mythic: [0, 0, 0, 0, 0, 1, 0, 0, 0].concat(
                new Array(8 - (
                    (user.dog > 5 && user.dog < 8 && user.dog) || (user.dog > 7 && 8) || 3
                )).fill(0)
            ),
            legendary: [0, 0, 0, 0, 0, 0, 0, 1, 0, 0].concat(
                new Array(10 - (
                    (user.dog > 8 && user.dog) || 4
                )).fill(0)
            ),
            iron: [0, 0, 0, 1, 0, 0],
            gold: [0, 0, 0, 0, 0, 1, 0],
            diamond: [0, 0, 0, 0, 0, 0, 1, 0].concat(
                new Array(5 - (
                    (user.fox < 6 && user.fox) || (user.fox > 5 && 5) || 0
                )).fill(0)
            ),
        },
        lost: {
            health: 101 - user.cat * 4
        }
    }
    return rewards
}