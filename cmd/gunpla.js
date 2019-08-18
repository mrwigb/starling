const fetch = require('node-fetch')


exports.fetchGunpla = async (msg, splitMessage, author, authorId, PREFIX) => {

   

            let repeat = true;

            const index = [`https://www.reddit.com/r/Gunpla.json?sort=hot&t=alltime&type=link`]
            
            
            
                        let url = Math.floor((Math.random() * index.length));
            
            
            while (repeat) {
                try {
                    let data = await fetch(index[url]),
                        json = await data.json()
                if (json) {
                    let rand = Math.ceil(Math.random() * (json.data.children.length - 1) + 1),
                        post = json.data.children[rand].data
                        post.url
              
                      if (post.url.startsWith('https://gfy')) post.url += '.gif'
                      if (post.url.startsWith('http://gfy')) post.url += '.gif'
                      if (post.url.startsWith('gfy'))  post.url += '.gif'
                      if (post.url.startsWith('https://i.imgur')) post.url += '.gifv'
                      
                  
                   imgPush = richEmbed
                   .setTitle(post.title)
                   .setImage(post.url)
                   .setColor("#ffd4d6");
               
                repeat=false; 
            
            
              }
              
            }
            catch (ERROR) {
              if (post.url.startsWith('https://v.'))
              repeat=true;
            
              console.error('red error: ', ERROR)
            
            }
            
      if (PREFIX && authorId !== '602978943850512403' || PREFIX && author === 'ZARK') {
  

                if (msg.member.hasPermission('MANAGE_MESSAGES')) {
                    console.log(`${author} activated gunpla`)



            msg.channel.send(imgPush)
            
          } else {
            console.log(`you're not fam`)
            msg.channel.send(`you're not fam`)
          }
        }
      }
    }