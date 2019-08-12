const fetch = require('node-fetch')

exports.fetchInteresting = async (richEmbed, msg) => {

const url = `https://www.reddit.com/r/Damnthatsinteresting.json?sort=controversial&t=week&type=link`
try {

    const data = await fetch(url),
          json = await data.json()

    const rand = Math.ceil(Math.random() * (json.data.children.length - 1) + 1),
          post = json.data.children[rand].data,
          message = richEmbed.setTitle(post.title).setImage(post.url)
            msg.channel.send(message)

}
 catch(e) {
    /*msg.channel.send('not working, try again.')*/
    console.error('reddit interesting error: ', e)
}


}





