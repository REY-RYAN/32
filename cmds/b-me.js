const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')

module.exports.run = async (client, message, args) => {
 
  const üye = message.author
  const isim = args.slice(0).join(' ')
if(!message.member.hasPermission("ADMINISTRATOR"))
  if(!message.member.roles.has("767350626661171281")) return message.channel.send(`**Bu Komut booster üyelere özeldir..**`)
  if(!isim)
  return message.reply("Bir İsim Girmelisin!")
  
  üye.setNickname(isim)

let random = [
  
  "shiny",
  "rio",
  "b0stanlı",
  "potsu",
  "potsy",
  "triquetra"
]
if (isim = `${random}`) {
  
  message.channel.send("ismini allah yapamazsın")
};


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