const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
 
exports.run = async (client, message, args) => {

let mesaj = args.slice(0).join(' ');

if (!message.author.id != '749529202696388632') return;
  
if (mesaj.length < 1) return message.reply('Bir mesaj gönder');
message.delete()


    const yaz = new Discord.RichEmbed()

      .setColor(ayarlar.color)
      .setAuthor('Potsudan bir mesaj var.')
      .setDescription(` ${mesaj} `)
      .setTimestamp()
     message.channel.send(yaz);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['ows'],
  
  permLevel: 4

};

exports.help = {

  name: 'yaz',

  description: 'qweqwe',

  usage: 'QQQQ'

};

 

