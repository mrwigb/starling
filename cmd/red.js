const fetch = require('node-fetch')

exports.fetchRed = async (msg, richEmbed) => {
  
  let repeat = true;

  const index = [`https://www.reddit.com/r/educationalgifs.json?sort=hot&t=all`,
                `https://www.reddit.com/r/oddlysatisfying.json?sort=hot&t=all`,
                `https://www.reddit.com/r/mesmerizinggifs.json?sort=hotl&t=all`,
                `https://www.reddit.com/r/pic/.json?sort=hot&t=all`,
                `https://www.reddit.com/r/pic/.json?sort=controversial&t=all`]

  let url = Math.floor((Math.random() * index.length));

    while (repeat) {
    try {let data = await fetch(index[url]),
             json = await data.json()
    if (json) {let rand = Math.ceil(Math.random() * (json.data.children.length - 1) + 1),
                   post = json.data.children[rand].data
                   post.url
  
          if (post.url.startsWith('https://gfy')) post.url += '.gif'
          if (post.url.startsWith('http://gfy')) post.url += '.gif'
          if (post.url.startsWith('gfy'))  post.url += '.gif'
          if (post.url.startsWith('https://i.imgur')) post.url += '.gifv'
          
      
       imgPush = [post.title, post.url]
   
    repeat=false; 


  }
  
}
catch (ERROR) {
  if (post.url.startsWith('https://v.'))
  repeat=true;

  console.error('red error: ', ERROR)

}

msg.channel.send(imgPush)

}

 

}