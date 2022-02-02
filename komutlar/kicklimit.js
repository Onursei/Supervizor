const discord = require('discord.js')
const { Database } = require('nukleon');
const db = new Database("plasmic.json")
exports.run = async(client, message, args) => {
    if(message.author.id !== message.guild.owner.id) return message.channel.send('Bu komut sunucu sahibine özel!')
    const herşeyibenmisöyleyeyim = new discord.MessageEmbed()
    .setTitle('Enginar Bot Hata')
    .setDescription("Lütfen bir seçenek belirtiniz \n \n `ayarla` `sıfırla` ")
if(!args[0]) return message.channel.send(herşeyibenmisöyleyeyim)
if(args[0] == "ayarla") {
    let kontrol = db.fetch(`kicklimit_${message.guild.id}`)
    if(kontrol) return message.channel.send('Kick limit zaten ayarlı!')
    if(!kontrol) {
let engin = args[1]
const embed = new discord.MessageEmbed()
.setTitle('Enginar Bot Hata')
.setDescription('Lütfen kick limiti belirleyiniz!')
if(!engin) return message.channel.send(embed)
db.set(`kicklimit_${message.guild.id}`, Number(engin))
const embedd = new discord.MessageEmbed()
.setTitle('Kick Limit Ayarlandı')
.setDescription(`Kick limit başarı ile **${engin}** olarak ayarlandı`)
return message.channel.send(embedd)
    }
}

    if(args[0] == "sıfırla") {
    let kontrol = db.fetch(`kicklimit_${message.guild.id}`)
    if(!kontrol) return message.channel.send('Sistem ayarlı değil!')
    db.remove(`kicklimit_${message.guild.id}`)
    return message.channel.send('Kick limit sıfırlandı!')
    }


}
exports.conf = {
enabled: true,
guildOnly: true,
permLevel: 0,
aliases: ["kicklimit"]
}
exports.help = {
name: "kick-limit"
}