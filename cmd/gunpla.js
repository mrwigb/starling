const fetch = require('node-fetch')


exports.fetchGunpla = async (msg, splitMessage, author, authorId, PREFIX, richEmbed) => {
  const url = [`https://www.reddit.com/r/Gunpla.json?sort=hot&t=alltime&type=link`]
  let repeat = true;
  let index = Math.floor((Math.random() * url.length));

  while (repeat) {
    try {
        let data = await fetch(url[index]),
            json = await data.json()
      if (json) {
        let rand = Math.ceil(Math.random() * (json.data.children.length - 1) + 1),
            post = json.data.children[rand].data

        if (post.url.startsWith('https://gfy')) post.url += '.gif'
        if (post.url.startsWith('http://gfy')) post.url += '.gif'
        if (post.url.startsWith('gfy'))  post.url += '.gif'
        if (post.url.startsWith('https://i.imgur')) post.url += '.gifv'


        imgPush = richEmbed
        .setTitle(post.title)
        .setImage(post.url)
        .setColor("#ffd4d6");


        if (PREFIX && authorId !== '602978943850512403' || PREFIX && author === 'ZARK') {
          console.log(`${author} activated gunpla`)
          msg.channel.send(imgPush)
        } else {
          console.log(`you're not fam`)
          msg.channel.send(`you're not fam`)
        }

        if (post.url.startsWith('https://v.')) repeat=true;

        repeat=false;
      }
    }
    catch (ERROR) {
      console.error('red error: ', ERROR)
    }
  }
}