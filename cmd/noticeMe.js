exports.noticeMe = (msg, richEmbed, name) => {
//=====NOTICE ME SENPAIII++++++


 const replies = [ "ugh, you're so lame",
                  "dude, im a bot",
                  "🄲🄾🄽🅂🄸🄳🄴🅁 🅈🄾🅄🅁🅂🄴🄻🄵 🄽🄾🅃🄸🄲🄴🄳",
                  '01100110 01110101 01100011 01101011 00100000 01101111 01100110 01100110 00100001',
                  'WEEEEB!!!',
                  'oh, yeah you fit.',
                  'you should try to talk to real people more.',
                  'try a different command',
                  'boundaries man...',
                  'does anyone really even use this besides @wigb'
                  
                ];

  let result = Math.floor((Math.random() * replies.length));
  const noticeEmbed = richEmbed
      .setColor("#ffd4d6")
      .setAuthor(name)
      .addField(replies[result], ':black_heart:');

  msg.channel.send(noticeEmbed);
}
