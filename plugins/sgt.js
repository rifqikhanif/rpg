let handler = async (m, { conn }) => {
	conn.reply(m.chat, `
┏━━━ꕥ〔 *FITUR-FITUR* 〕ꕥ━⬣
┃✾ *Menu Islam*
┃✾ *Menu Edukasi*
┃✾ *Menu Berita*
┃✾ *Menu Game*
┃✾ *Menu Game RPG*
┃✾ *Menu Xp & Level*
┃✾ *Menu Random Image*
┃✾ *Menu Stiker*
┃✾ *Menu Kerang Ajaib*
┃✾ *Menu Quotes*
┃✾ *Menu Admin*
┃✾ *Menu Group*
┃✾ *Menu Premium*
┃✾ *Menu Internet*
┃✾ *Menu Anonymouse*
┃✾ *Menu Nulis & Logo*
┃✾ *Menu Downloader*
┃✾ *Menu Tools*
┃✾ *Menu Fun*
┃✾ *Menu Database*
┃✾ *Menu Vote & Absen*
┃✾ *Menu Pengubah Suara*
┃✾ *Menu Sound Music*
┃✾ *Menu Vn Imute*
┃✾ *Menu Jadi Bot*
┃✾ *Menu Anime*
┃✾ *Menu Info Bot*
┃✾ *Menu Virus/Virtex*
┃✾ *Menu Tanpa Kategori*
┗━ꕥ©2022 BabyBotꕥ━⬣`.trim(), m)
}

handler.command = /^viadana$/i

module.exports = handler
