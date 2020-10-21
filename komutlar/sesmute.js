const Discord = require('discord.js');
const ms = require("ms");

exports.run = (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR"))
    if (!message.member.roles.has("757957394125946992")) return message.channel.send("Bu Komutu Kullanmak İçin Gerekli Yetkiye Sahip Değilsin!")

let log = message.guild.channels.find(c => c.id === "757964487457243246") 
if (!log) return
    let kullanici = message.mentions.members.first() || message.guild.members.get(args[0]);
    let süre = args[1]
    let sebep = args[2]
    if (!süre) return; 
    message.channel.send('Bir süre belirtmelisin.')
    if (!kullanici) return message.channel.send("Kimi susturacağım ?")
    kullanici.addRoles("757957409703591957")
    kullanici.setMute(true, `Susturan yetkili: ${message.author.tag} - Susturma süresi: ${süre}sustur`)
        .then(() =>
            message.channel.send(`${kullanici} ${süre} Süre Ses Kanallarında Susturuldu`))

const embed = new Discord.RichEmbed()
.setTitle(`Ses Kanalında Susturma`)
.setColor('RED')
.setTimestamp()
.setDescription(`${kullanici} adlı kişi **${sebep}** sebebiyle **${süre}** süre susturuldu.`)
.setFooter(`${message.guild.name}`)
log.send(embed)
        .catch(console.error);
        setTimeout(() => {

        kullanici.setMute(false,`**Ceza Süresi Dolduğu İçin Susturması Açıldı.**`)
          
        message.channel.send(`**${kullanici} Susturulma Süresi Doldu Ve Susturulması Açıldı**`)
kullanici.removeRoles("757957409703591957")
    }, ms(süre))
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['vmute', 'sesmute', 'voicemute',],
    permLevel: 0
};

exports.help = {
    name: 'smute',
    description: 'Seslideki Birinin Mikrofonunu Kapatır',
    usage: "smute"
};
 