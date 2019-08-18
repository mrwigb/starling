exports.help = (msg, name, richEmbed, bot) => {

    
 
     helpEmbed = richEmbed
      .setColor("#ffd4d6")
      .setAuthor(name)
      .setThumbnail("https://imgur.com/7punCbz.png")
      .addField("Hello!!!", "****************", true)
      .addField("My name is", "░s░t░a░r░l░i░n░g░", true)
      .addField("cmds:", '`*help` = cmd/info window\n`*8ball + question` = i pretend to🎱\n`*noticeme` = ill try to acknowledge your presence.\n`*nice` = random gif or whatever\n')
      .addField("Server Emojis:", "***___----___----___----___***", true)
      .addField("`:nrd:`", bot.emojis.get('604155886990131220'), true)
      .addField("`:eat:`", bot.emojis.get('602535630236549150'), true)
      .addField("`:poke:`", bot.emojis.get('604753311274369053'), true)
      .addField("`:jt:`", bot.emojis.get('602604807940734988'), true)
      .addField("`:maximumeffort`", bot.emojis.get('603700428198117376'), true)
      .addField("`:78:`", bot.emojis.get('604302095138553861'), true)
      .addField("`:opmok`", bot.emojis.get('602167310710472734'), true)
      .addField("`:polygon:`", bot.emojis.get('604471819197743123'), true)
      .addField("`:bella:`", bot.emojis.get('604021281418903553'), true)
      .addField("`:mew:`", bot.emojis.get('604022719968968711'), true)
      .addField("`:cho:`", bot.emojis.get('604725908087242753'), true)
      .addField("`:cult:`", bot.emojis.get('604015566814052369'),true)
      .addField("`:dwight:`", bot.emojis.get('604725627358150668'), true)
      .addField("`:bigfan:`", bot.emojis.get('604036632554766336'), true)
      .addField("`:darnell:`", bot.emojis.get('604910142621745178'), true)
      .addField("`:tehe:`", bot.emojis.get('608759959265607681'), true)
      .addField("`:koro:`", bot.emojis.get('608760704169672902'), true);

      msg.channel.send(helpEmbed)
      
}
