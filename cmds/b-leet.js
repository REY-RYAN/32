const Discord = require('discord.js');
const settings = require('../ayarlar.json')
exports.run = async (client, message, args) => {
 

function l33t (text) {
  return text.replace(/a|A/gi, '4').replace(/b|B/gi, '8').replace(/c|C/gi, '(').replace(/d|D/gi, '|)').replace(/e|E/gi, '3  ').replace(/f|F/gi, '|#').replace(/g|G/gi, '6').replace(/H|h/gi, '|-|').replace(/i|I/gi, '!').replace(/j|J/gi, '_)').replace(/k|K/gi, '|(').replace(/r|R/gi, '|2').replace(/g|G/gi, '6') .replace(/l|L/gi, '1').replace(/m|M/gi, '|\/|').replace(/N|n/gi, '\|\|').replace(/o|O/gi, '0') .replace(/p|P/gi, '|>')     
}
  let qwe = args.slice(0).join(' ')
    const sendString = `\`\`\`\n${l33t(qwe)}\n\`\`\``;
  message.channel.send(`${sendString}`)
  


}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["1337"],
  permLevel: 0
};
exports.help = {
  name: 'leet',
  description: 'Belirttiğiniz kullanıcıyı sunucudan yasaklar.',
  usage: 'leet'
};