const Discord = require('discord.js');
  
const {prefix, token}= require ('./config.json');

 const client = new Discord.Client(); 

 client.once('ready',() => {
     console.log('Ready ');
     client.user.setStatus("dnd");
     setTimeout(() => {
        client.user.setActivity("Kaellyth nu.", {type:'WATCHING'});
    },100)
});

client.once('message',(message) => {
    if(message.content === `${prefix}ping`){
        message.channel.send('pong');
    }
});

client.login(process.env.TOKEN);
