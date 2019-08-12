const fetch = require('node-fetch')

exports.fetchRed = async (msg, richEmbed) => {


const url = `https://www.reddit.com/r/educationalgifs.json?sort=controversial&t=week&type=link`

try {
  let data = await fetch(url),
        json = await data.json()
  if (json) {
    let rand = Math.ceil(Math.random() * (json.data.children.length - 1) + 1),
        post = json.data.children[rand].data
        imgPush = post.url
  
          if (imgPush.startsWith(['https://gfy', 'gfy', 'http://gfy'])) {
    imgPush = (imgPush + '.gif')
  }

    richEmbed
    .setColor("#ffd4d6")
    .setImage(imgPush);
  }
}
 catch(e) {
    console.error('red error: ', e)
}

 msg.channel.send(richEmbed)

}
