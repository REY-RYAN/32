exports.run  = async(client, message, args) => {
  const Discord = require('discord.js');
  const db = require('quick.db');
  
if(!message.member.roles.has("757957394125946992") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Bu komutu kullanmaya yetkin yok."); 


 let user = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!user.roles.has('757957391407906818')) {
user.addRole('757957391407906818')
const ryancık = new Discord.RichEmbed()
.setDescription(`${user} Özel üye rolünü elde etti.`)
  message.channel.send(ryancık)

message.react('758004260469342340')


} else {
  user.removeRole('757957391407906818')
const member = new Discord.RichEmbed()
.setDescription(`${user} köle statüsüne düşürüldü köle.`)
message.channel.send(member)


  message.react('758004260469342340')



  
}
    }
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['vip', 'allah'],
  permLevel: 0,
};

exports.help = {
  name: 'vip',
  description: 'vip.',
  usage: 'vip @member.id',
};