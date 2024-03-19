const chalk = require("chalk")
const fs = require("fs")

//owmner v card
global.owner = ['6283132240763'] //ur owner number
global.ownernomer = "6283132240763" //ur owner number2
global.ownername = "ikyy Hosting" //ur owner name
global.ytname = "YT: zal_x_u" //ur yt chanel name
global.socialm = "GitHub: kayzenhost" //ur github or insta name
global.location = "Indonesia" //ur location

//new
global.ownergc = "https://chat.whatsapp.com/IblQM0VV3fs9g70Fb4azVG"
global.botname = "Created By ikyy Hosting"
global.ownerNumber = ["6283132240763@s.whatsapp.net"]
global.ownerweb = "https://www.youtube.com/@zal_x_u"
global.themeemoji = '🪀'
global.wm = "ikyy.my.id"
global.packname = "Sticker By ky"
global.author = "ikyyOffc\n\n"
global.prefa = ['','!','.','#','&']
global.sessionName = 'session'
global.tekspushkon = ''
global.keyopenai ='iigf'

global.domain = 'https://tokopanell-digitalz.fatihoffc.my.id' // Isi Domain Lu
global.apikey = 'ptla_kaiL7D4gmrcVz197XxrNt9u5OsTPHKM43gcA2yVoIBX' // Isi Apikey Plta Lu
global.capikey = 'ptlc_wO6BYXKjX4Ds7ik4UYELlUe8BlgEqA6yCMkCqBCo9s3' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location

global.limitawal = {
    premium: "Infinity",
    free: 5
}

//media target
global.thumb = { url: 'https://telegra.ph/file/0afbb7aad9de5bc4dc620.jpg' }//ur thumb pic
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

//messages
global.mess = {
    selesai: 'Done !!', 
    owner: 'Khusus Owner',
    private: 'Khusus Private',
    group: 'Khusus Group',
    wait: 'Sebentar..',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
