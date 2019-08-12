exports.noticeMe = (msg, richEmbed, name) => {
//=====NOTICE ME SENPAIII++++++
 const replies = [ "ugh, you're so lame",
                  "dude, im a bot",
                  "🄲🄾🄽🅂🄸🄳🄴🅁 🅈🄾🅄🅁🅂🄴🄻🄵 🄽🄾🅃🄸🄲🄴🄳",
                  'ᵃᵐ ⁱ ˢᵘᵖᵖᵒˢᵉ ᵗᵒ ˢᵃʸ, "ⁿᵒ, ʸᴼᵁ ⁿᵒᵗⁱᶜᵉ ᵐᵉ ˢᵉⁿᵖᵃⁱ"?'
                ];

  let result = Math.floor((Math.random() * replies.length));
  const noticeEmbed = richEmbed
      .setColor("#ffd4d6")
      .setAuthor(name)
      .addField(replies[result], true);

  msg.channel.send(noticeEmbed);
}
