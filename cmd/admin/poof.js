
exports.poof = (msg, splitMessage, author, authorId, PREFIX) => {
    if (PREFIX && authorId !== '602978943850512403' || PREFIX && author === 'ZARK') {

      if (splitMessage[0] === 'poof' && !splitMessage[1]) {
        console.log('invalid')
        msg.channel.send('ĭ̸̥n̴̰̅v̶̭̀a̵͔͝l̵̒ͅḭ̷͝d̴̗͌ ̵͈̇ȇ̵͇ń̴̞t̸̬̓ŕ̸͕y̴͈̓.̴̥̅ ' + `*poof #`)
      } else if (splitMessage[0] === 'poof' && splitMessage[1]) {
        if (msg.member.hasPermission('MANAGE_MESSAGES')) {
          console.log(`${author} deleted ${splitMessage[1]} messages`)
          msg.channel.bulkDelete(splitMessage[1])
        } else {
          console.log(`you're not fam`)
          msg.channel.send(`you're not fam`)
        }
      }
    } else {
      msg.channel.send(`you're not fam`)
    }
  }
