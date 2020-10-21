const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');


exports.run = async (client, message, args) => {
  

  let user = message.mentions.members.first() || message.guild.members.get(args[0]);
  user.addRole('767121286412369970');
  user.removeRole('767119549497212988');
  
//----------------------------------------------------------------------
  let embed = new Discord.RichEmbed()
  .setDescription(`** ${user.user.username} Başarı ile kayıt edildi. **`)
  .setColor(ayarlar.renk)
  .setTimestamp()
message.channel.send(embed)


}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['r', 'k'],
  permLevel: 0,
};

exports.help = {
  name: 'registery',
  description: 'Sunucudan ban kaldırmanızı sağlar.',
  usage: 'unban id/all',
};