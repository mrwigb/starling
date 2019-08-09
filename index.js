require('dotenv').config()
//STARLING
const version = "1.0.0",
      Discord = require('discord.js'),
      token = process.env.token,
      bot = new Discord.Client();

bot.login(token);
bot.on('ready', () => console.log ('online...'))
bot.on('message', msg => {
  
let message = msg.content.toLowerCase(),
      eightBall = require('./cmd/eightBall'),
      noticeMe = require('./cmd/noticeMe'),
      help = require('./cmd/help'),
      poof = require('./cmd/admin/poof'),
      author = msg.member.user.tag,
      authorId = msg.member.id,
      name = (msg.author.tag).substring(0, msg.author.tag.length - 5),
      richEmbed = new Discord.RichEmbed(),
      PREFIX    

  console.log(author + ': ' + authorId + ' (' + msg.content + ')');


  if (message.startsWith('*')) PREFIX = '*'
  if (message.startsWith('* ')) PREFIX = '* '
  if (message.startsWith('starling ')) PREFIX = 'starling '
  if (message.startsWith('hey star ')) PREFIX = 'hey star '
  if (message.startsWith('star ')) PREFIX = 'star '

  if (PREFIX) {
    const cmd = message.replace(PREFIX, ''),
        splitMessage = cmd.trim().split(' ')



    if (cmd === 'notice me') noticeMe(msg, richEmbed)
    if (cmd === '8ball') eightBall(msg, richEmbed)
    if (cmd === 'help') help(msg, name, richEmbed, bot)
    if (cmd === 'poof') poof(msg, splitMessage, author, authorId, PREFIX)
  }


})