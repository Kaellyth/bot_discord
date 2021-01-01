const Discord = require('discord.js');
  
const {prefix, token}= require ('./config.json');

 const client = new Discord.Client(); 

 client.on('ready',() => {
     console.log('Ready ');
     client.user.setStatus("dnd");
     setTimeout(() => {
        client.user.setActivity("Kaellyth nu.", {type:'WATCHING'});
    },100)
});

client.on('message',(message) => {
    if(message.content === `!ping`){
        message.channel.send('pong');
    }
    else if(message.content === `!serveur`){
        message.channel.send(`Nom du serveur : ${message.guild.name}\n Nombre d'utilisateurs : ${message.guild.memberCount}`);
    }
    else if(message.content === `!update`){
        message.channel.send(`Le Bot est développé par Kaellyt, il sera mis à jour progressivement :blush:`);
    }
    else if(message.content === `!point`){
        if(!message.mentions.users.size){
            return message.channel.send(`Vous ne pouvez pas vous attribuer personnellement des points`);
        }
        const mentionsListe = message.mentions.users.map(user => {
            return `${user.username} vient de gagner un point.`;
        });

        message.channel.end(mentionsListe);
    }
});

client.login(process.env.TOKEN);
 