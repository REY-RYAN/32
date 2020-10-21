const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const weather = require('weather-js')
const fs = require('fs');
const db = require('quick.db');
require('./util/eventLoader.js')(client);
const path = require('path');
const request = require('request');
const snekfetch = require('snekfetch');
const queue = new Map();
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');

//-----------------------------------------------\\
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log("Ryan | Hostlandı");
  response.sendStatus(200);
});
app.listen(8000);
setInterval(() => {
  http.get(`http://projeadın.glitch.me/`);
}, 280000)
//-----------------------------------------------\\

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};


client.commands = new Discord.Collection();
  client.aliases = new Discord.Collection();
  fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
      let props = require(`./komutlar/${f}`);
      log(`Yüklenen komut: ${props.help.name}`);
      client.commands.set(props.help.name, props);
      props.conf.aliases.forEach(alias => {
        client.aliases.set(alias, props.help.name);
      });
    });
  });


client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};


  client.setMaxListeners(20);

client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    if (message.author.id === "751887043952378008") permlvl = 5; 
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

//-----------------------KOMUTLAR-----------------------\\





client.on("guildMemberAdd", async (member, params, args) => {
 let random = [
 `<@${member.id}> sunucuya yeni katıldı - glhf!`,
 `<@${member.id}> yeni katıldı. Herkes meşgul görünsün!`,
` <@${member.id}> yeni katıldı. İyileşebilir miyim? `,
`<@${member.id}> partinize katıldı.`,
`<@${member.id}> Ek direkler inşa etmelisiniz.`,
`Ermagherd. <@${member.id}> burada.`,
`Hoş geldiniz, <@${member.id}> Biraz kalın ve dinleyin.`,
`Hoş geldiniz, <@${member.id}> Sizi bekliyorduk (͡ ° ͜ʖ ͡ °) `,
` Hoş geldiniz <@${member.id}> Umarız pizza getirmişsinizdir.`,
`Hoş geldiniz <@${member.id}> Silahlarınızı kapıya bırakın.`,
`Vahşi bir <@${member.id}> göründü.`,
`Swoooosh. <@${member.id}> az önce indi.`,
`Kendinizi hazırlayın. <@${member.id}> sunucuya yeni katıldı.`,
`<@${member.id}> yeni katıldı. Muzlarınızı saklayın.`,
`<@${member.id}> yeni geldi. OP görünüyor - lütfen nerf.`,
`<@${member.id}> sadece sunucuya kaydırıldı.`,
`Sunucuda bir <@${member.id}> ortaya çıktı.`,
`<@${member.id}> sunucuya atladı. Kangroo !!`,
`<@${member.id}> az önce ortaya çıktı. Biramı tut.`
]
  //:ok_hand: 


  var welcomechannel = client.channels.get("757949848019533924")
  var log = client.channels.get(c => c.id('757983259819901111'))
  welcomechannel.send(`${random[Math.floor(Math.random() * random.length)]}`)
 log.send(`${random[Math.floor(Math.random() * random.length)]}`)
  
 })







client.on(`userUpdate`, (oldUser, newUser) => {
 

  let kişi = client.users.get(oldUser.id)

  let avatar = kişi.avatarURL

  let kanal = client.channels.find(ch => ch.id === '758000864475742403')

 

   const embed = new Discord.RichEmbed()

  .setImage(avatar)

  .setFooter(`${kişi.tag}` `potsu`)

  .setTimestamp()

  .setDescription(`Fotoğrafa gitmek için [tıkla](${kişi.avatarURL})!`)

  kanal.send(embed)
  

 
})


client.on("message" , async msg => {
  if(msg.content.startsWith(ayarlar.prefix+"afk")) return;
 
  let afk = msg.mentions.users.first()
 
  const kisi = db.fetch(`afkid_${msg.author.id}_${msg.guild.id}`)
 
  const isim = db.fetch(`afkAd_${msg.author.id}_${msg.guild.id}`)
 if(afk){
   const sebep = db.fetch(`afkSebep_${afk.id}_${msg.guild.id}`)
   const kisi3 = db.fetch(`afkid_${afk.id}_${msg.guild.id}`)
   if(msg.content.includes(kisi3)){
 
     let ryan = new Discord.RichEmbed()
     .setDescription(`**Etiketlediğiniz üye ${sebep}** sebebiyle. Klavyeden uzak Modunda ! `)
     msg.channel.send(ryan)
   }
 if (!sebep) {
   let potsu = new Discord.RichEmbed()
   .setDescription(`**Etiketlediğiniz üye Nedensiz bir sebepten dolayı klavyeden uzak.**`)
 }
 }
  if(msg.author.id === kisi) {
 
    let afkembed = new Discord.RichEmbed()
    .setDescription(`Başarı ile uyku modundan çıktınız.`)
    msg.channel.send(afkembed)
  db.delete(`afkSebep_${msg.author.id}_${msg.guild.id}`)
  db.delete(`afkid_${msg.author.id}_${msg.guild.id}`)
  db.delete(`afkAd_${msg.author.id}_${msg.guild.id}`)
   msg.member.setNickname(isim)
   
 }
 
});


client.on("guildMemberAdd", async member => {
if(member.guild.id !== "712445662364696596") return;
member.addRole(`757948799997182043`)

});




client.on("userUpdate", async (user, newUser) => {
  
  //${message.guild.members.filter(m => m.user.discriminator.includes(discrim17)).size}
  
  let ryan = "0017"
  let kanal = client.guilds.get('712445662364696596').channels.get('757964487457243246')
  let member = client.guilds.get('712445662364696596').members.get(user.id)

  
  
  if(!member.roles.has('757957406884888636')) {
    
    if(member.user.discriminator.includes === ryan) {
      
      member.addRole('757957406884888636')
 const ryancık = new Discord.RichEmbed()
      .setColor(ayarlar.color)
      .setDescription(`<@!${user.id}>  discrimine #${ryan} eklediği için rolünü aldı.`)
      .setTimestamp()
      kanal.send(ryancık)
    }
  
  
    
    } if(member.user.discriminator.includes === (`${!ryan}`)) {
      
      member.removeRole('757957406884888636')
       const ryancık = new Discord.RichEmbed()
      .setColor(ayarlar.color)
      .setDescription(`<@!${user.id}> dicriminden ##${ryan} kaldırdığı için roünü kaybetti.`)
      .setTimestamp()
      kanal.send(ryancık)
    }
  
    
          });


