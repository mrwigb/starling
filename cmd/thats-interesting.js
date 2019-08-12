const fetch = require('node-fetch')

exports.fetchInteresting = async (msg, richEmbed) => {
const url = `https://www.reddit.com/r/Damnthatsinteresting.json?sort=controversial&t=week&type=link`
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
    console.error('reddit interesting error: ', e)
}


}
