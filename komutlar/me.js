const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')

module.exports.run = async (client, message, args) => {
 
  
  const üye = message.author
  const isim = args.slice(0).join(' ')
if(!message.member.hasPermission("ADMINISTRATOR"))
  if(!message.member.roles.has("760511305089679361")) return message.channel.send(`**Bu Komut booster üyelere özeldir..**`)
  if(!isim)
  return message.reply("Bir İsim Girmelisin!")
  const ryan = `${isim}`


  message.react('753291683298410568')
	let log = client.channels.get(c => c.id === "757964487457243246")
  let command = message.content.toLowerCase().split(' ')[1]; 
  if(command === 'lofi') {
    let lol = new Discord.RichEmbed()
    .setDescription('```Hey ! Sen. İsmini lofi yapamazsın. ```')
    .setColor(ayarlar.color)
    .setTimestamp()
    message.channel.send(lol)

} else {
  let embed = new Discord.RichEmbed()
       .setAuthor(message.author.tag, message.author.avatarURL)
  

  .setTitle("Başarıyla İsmini Değiştirdim")
  .setTimestamp()
 .setColor(ayarlar.color)
  .setFooter(message.guild.name)
  .setDescription(`**${üye} İsimli Kişinin İsmi Başarıyla Değiştirildi Yeni İsmi **${ryan}** Olarak Ayarlandı!**`)
  

message.guild.members.get(üye.id).setNickname(`${isim}`).then(x => message.channel.send(embed))
let embed2 = new Discord.RichEmbed()
.setDescription(`*${üye} ismini ${ryan} olarak değiştirdi.**`)
.setColor(ayarlar.color)
log.send(embed2)
}
}
module.exports.conf = 
{
enabled: true,
aliases: ["me"],                                    
permLevel: 0};


module.exports.help = 
{
  name: "me",
  description: "",
  usage: "annen"


};