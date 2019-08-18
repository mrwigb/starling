require('dotenv').config()
//STARLING
const version = ".5",
      Discord = require('discord.js'),
      token = process.env.token,
      bot = new Discord.Client()

bot.login(token);
bot.on('ready', () => console.log ('online...'))
bot.on('message', msg => {



let message = msg.content.toLowerCase(),
      eightBall = require('./cmd/eightBall'),
      noticeMe = require('./cmd/noticeMe'),
      help = require('./cmd/help'),
      poof = require('./cmd/admin/poof'),
      red = require('./cmd/red'),
      gunpla = require('./cmd/gunpla'),
      author = msg.author.username,
      authorId = msg.author.id,
      name = (msg.author.tag).substring(0, msg.author.tag.length - 5),
      richEmbed = new Discord.RichEmbed(),
      PREFIX

  // console.log(author + ': ' + authorId + ' (' + msg.content + ')');

  if (message.startsWith('*')) PREFIX = '*'
  if (message.startsWith('* ')) PREFIX = '* '
  if (message.startsWith('starling ')) PREFIX = 'starling '
  if (message.startsWith('hey star ')) PREFIX = 'hey star '
  if (message.startsWith('star ')) PREFIX = 'star '

  if (message === 'star' || message === '*' || message === 'starling' || message === '*ling') msg.channel.send(':black_heart:')


  if (PREFIX) {
    const cmd = message.replace(PREFIX, ''),
          splitMessage = cmd.trim().split(' ')



    if (cmd === 'notice me') noticeMe.noticeMe(msg, richEmbed, name)
    if (cmd.startsWith('8ball')) eightBall.eightBall(richEmbed, msg, splitMessage, name)
    if (cmd === 'help') help.help(msg, name, richEmbed, bot)
    if (cmd.startsWith('poof')) poof.poof(msg, splitMessage, author, authorId, PREFIX)
    if (cmd === 'nice') red.fetchRed(msg, richEmbed)
    if (cmd === 'version') msg.channel.send(version)
    if (cmd === 'gunpla') gunpla.fetchGunpla(msg, richEmbed)
  }


})
