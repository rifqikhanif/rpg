let fetch = require("node-fetch")
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn}) => {
m.reply(wait)
if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
  try {
  let res = await fetch(`https://api-alphabot.herokuapp.com/api/nsfw/hentai_gif?apikey=Alphabot`)
  let json = await res.json()
  let { 
result
} = json
let stiker = await sticker(null, result, 'Kiss', 'Bot')
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
  }
}
handler.help = ['hentaigif']
handler.tags = ['hentai']
handler.command = /^hentaigif$/i

module.exports = handler
