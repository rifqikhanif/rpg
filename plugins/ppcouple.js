let fetch = require("node-fetch")

let handler = async (m, { conn }) => {
//https://apikey-bear3.herokuapp.com/api/random/couple?apikey=KingOfBear
m.reply(wait)

let res = await fetch(`https://apikey-bear3.herokuapp.com/api/random/couple?apikey=KingOfBear`)
let json = await res.json()

conn.sendFile(m.chat, json.result.male, 'ppcowo.png', 'Cowok', m, false,{ contextInfo: { forwardingScore: 999, isForwarded: true }})

conn.sendFile(m.chat, json.result.female, 'ppcewe.png', 'Cewek', m,false, { contextInfo: { forwardingScore: 999, isForwarded: true }})

}
handler.help = ['ppcouple', 'ppcp']
handler.tags = ['internet', 'anime']
handler.command = /^(pp(cp|couple))$/i
handler.limit = true

module.exports = handler
