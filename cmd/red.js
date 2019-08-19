const fetch = require('node-fetch')

let instance = 0

exports.fetchRed = async (msg, richEmbed) => {

  let repeat = true;

  const index = [`https://www.reddit.com/r/educationalgifs.json?sort=hot&t=all`,
                `https://www.reddit.com/r/oddlysatisfying.json?sort=hot&t=all`,
                `https://www.reddit.com/r/mesmerizinggifs.json?sort=hotl&t=all`,
                `https://www.reddit.com/r/pic/.json?sort=hot&t=all`,
                `https://www.reddit.com/r/pic/.json?sort=controversial&t=all`]

  let url = Math.floor((Math.random() * index.length));

  while (repeat) {
    instance++
    console.log('running reddit: ', instance)
    try {
      let data = await fetch(index[url]),
              json = await data.json()
      if (json) {
        let rand = Math.ceil(Math.random() * (json.data.children.length - 1) + 1),
                   post = json.data.children[rand].data

        if (post.url.startsWith('https://gfy')) post.url += '.gif'
        if (post.url.startsWith('http://gfy')) post.url += '.gif'
        if (post.url.startsWith('gfy'))  post.url += '.gif'
        if (post.url.startsWith('https://i.imgur')) post.url += '.gifv'

        imgPush = [post.title, post.url]

        if (post.url.startsWith('https://v.')) {
          setTimeout(() => { 0repeat = true }, 500)
        } else {
          repeat = false
          msg.channel.send(imgPush)
        }
      }
    } catch (e) {
      console.error('reddit error: ', e)
    }
  }
}