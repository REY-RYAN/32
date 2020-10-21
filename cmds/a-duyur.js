const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
  
  
let mesaj = args[0];  
let embed = new Discord.RichEmbed()
.setDescription(`**${mesaj}**`)
.setTimestamp()
.setColor(ayarlar.renk)
message.channel.send(embed)
message.delete()
  
  
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ows"],
  permLevel: 0
};
exports.help = {
  name: 'send',
  description: 'Belirttiğiniz kullanıcıyı sunucudan yasaklar.',
  usage: 'send'
};