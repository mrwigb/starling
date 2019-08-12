const fetch = require('node-fetch')

exports.fetchRed = async (msg, richEmbed) => {
assort = [`https://www.reddit.com/r/educationalgifs.json?sort=controversial&t=week&type=link`, `https://www.reddit.com/r/trippingthroughtime.json?sort=controversial&t=week&type=link`]
let url = Math.floor((Math.random() * assort));
try {
  const data = await fetch(url),
        json = await data.json()
  if (json) {
    const rand = Math.ceil(Math.random() * (json.data.children.length - 1) + 1),
          post = json.data.children[rand].data
    msg.channel.send(post.url)
  }
}
 catch(e) {
    console.error('red error: ', e)
}


}
