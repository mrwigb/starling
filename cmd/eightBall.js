exports.eightBall = (richEmbed, msg) => {
  const cmd =

//8ball
       replies = ["(っ◔◡◔)っ ♥ dont count on it ♥", 
                     "【﻿ｓｕｒｅ，　ｗｈａｔｅｖｅｒ】", 
                     "w♥e♥l♥l♥ ♥t♥h♥a♥t♥s♥ ♥a♥ ♥d♥u♥m♥b♥ ♥q♥u♥e♥s♥t♥i♥o♥n", 
                     "ｏｈ ｓｏ ｙｏｕ＇ｒｅ ｏｎｅ ｏｆ ｔｈｏｓｅ ｋｉｎｄ ｏｆ ｐｅｏｐｌｅ", 
                     "ₐₙd ᵢf ᵢ ₛₐy ₙₒ?", 
                     "≋w≋o≋w≋", 
                     "(-_-) 𝐋Ã𝕞є (-_-)", 
                     "𝖍𝖊𝖑𝖑 𝖞𝖊𝖆𝖍 𝖉𝖚𝖉𝖊!",
                     "ժօ ì հąѵҽ էօ ąղʂաҽɾ?",
                     'ᶜᵒⁿᶠᵘᶜⁱᵘˢ ˢᵃʸˢ "ᴰᴼᴱˢ ᵀᴴᴱ ᴮᴱᴬᴿ ˢᴴᴵᵀ ᴵᴺ ᵀᴴᴱ ᵂᴼᴼᴰˢ?"',
                     "ｄｏ　ｙｏｕ　ｒｅａｌｌｙ　ｔｈｉｎｋ　ｙｏｕ　ｓｈｏｕｌｄ　ａｓｋ　ｍｅ　ｔｈａｔ？　゜ヸ委 　まが怨　ヱょ",
                     "m͓̽a͓̽y͓̽b͓̽e͓̽ ͓̽y͓̽o͓̽u͓̽ ͓̽s͓̽h͓̽o͓̽u͓̽l͓̽d͓̽ ͓̽t͓̽r͓̽y͓̽ ͓̽a͓̽s͓̽k͓̽i͓̽n͓̽g͓̽ ͓̽d͓̽a͓̽r͓̽n͓̽e͓̽l͓̽l͓̽",
                     "`•.¸¸.•´´¯`••._.•   🎀  𝓎𝓊𝓊𝓊𝓊𝓈𝓈𝓈  🎀   •._.••`¯´´•.¸¸.•`",
                     "░▒▓█►─═  Ｂ𝑒𝕋! ═─◄█▓▒░",
                     "／／Ｉ　ｔｈｉｎｋ　ｙｏｕ　ｋｎｏｗ　ｔｈｅ　ａｎｓｗｅｒ．．．　いつまでも",
                     "はい",
                     "ｍａｎ░ｙｏｕ＇ｒｅ░ｄｅｅp"
                    ];
      let result = Math.floor((Math.random() * replies.length));
      let question = splitMessage.slice(1).join(" ");
      ball = richEmbed
      .setColor("#ffd4d6")
      .setAuthor(name)
      .addField("Question", question)
      .addField("Answer", replies[result]);
      msg.channel.send(ball);
    }