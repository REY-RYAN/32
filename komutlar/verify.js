const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
 

 let d = message.guild.roles.get('757948805394989096')
 let b = message.guild.roles.get('757948813469024326') 
 let c = message.guild.roles.get('757948799997182043')

message.member.addRole(d);
 message.member.addRole(b);
message.member.removeRole(c);
let e = new Discord.RichEmbed()
.setDescription(`<@!${message.member.id}> başarı ile kayıt oldunuz.`)
.setTimestamp()
.setColor(ayarlar.color)
message.channel.send(e)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['verify'],
  permLevel: 0
};

exports.help = {
  name: 'verify',
  description: '31.',
  usage: '.verify'
};
