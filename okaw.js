// Buat Lu Yang Jual Sc Ini Gw Tonjok 



const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://wa.me/6281262166032?text=bang+aku+mau+donasi'
global.ig = 'https://instagram/stein.goo' // ubah aja
global.ofc = 'https://chat.whatsapp.com/JkgLIx6RMe20QiMcKBI0ni'
global.okta = 'https://linktr.ee/stein.goo'
global.gh = 'https://github.com/'
global.saluran = 'belum ada:)'
global.email = 'seputarteknologi81@gmail.com' //serah
global.region = 'indonesia' // serah
global.dana = '081262166032'
global.gopay = '081262166032'
global.pulsa = '081262166032'
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'Fitra Wahyudi' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['081262166032'] // ubah aja pake nomor lu
global.premium = ['081262166032']
//==========================BY Hw Mods=======================//
global.lolkey = 'a8e86232771f9bc1826742c1'
global.zenz = 'zenzkey_41b4fe7a5d' // https://api.zahwazein.xyz
global.keyopenai = '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'
//====================BY Hw Mods=============================//
global.botname = 'Stein Bot' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'Stein' // ubah aja ini nama sticker
global.ta = '•' //cuma simbol
global.author = 'By Stein' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'oka' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = true
//=================================================//


//imgnya disini
global.thum = fs.readFileSync("./baseoka/image/thum.jpeg") 
global.good = fs.readFileSync("./baseoka/image/good.jpeg") 
global.vidmenu = fs.readFileSync("./baseoka/video/mainmenu.mp4")

global.mess = {
    done: 'Done Kak 😁',
    admin: 'Fitur ini buat _*Admin Group*_ ',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: 'Fitur ini buat _*owner*_ ',
    group: 'Fitur ini buat _*Group Chat*_ ',
    private: 'Fitur ini buat _*Admin Group*_ ',
    wait: 'Lu olang tunggu bentar ',
    endLimit: 'Limit anda telah habis, tunggu jam 12 malam untuk reset',
    error: '*Fitur Error!!!*',
    prem : 'Fitur ini buat _*Member Premium*_ '
}
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}

//rpg
global.buruan = {
   ikan: 5,
   ayam: 5,
   kelinci: 5,
   domba: 5,
   sapi: 5,
   gajah: 5
}
global.rpg = {
   darahawal: 100,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})