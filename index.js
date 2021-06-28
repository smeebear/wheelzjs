const Discord = require('discord.js');
const client = new Discord.Client();
const dotenv = require('dotenv').config();

client.once('ready', () => {
    console.log("Ready!");
})

client.login(process.env.TOKEN);

client.on('message', message => {
    if (message.author.bot) return;
    if (message.content.match(/wheelz/gi)) {
        console.log(message.content);
        const wheelz = client.emojis.cache.find(emoji => emoji.name === "wheelz");
        message.channel.send(`THE WHEELZZZZ ${wheelz}`);
    }
    else if (message.content.match(/bones/gi)) {
        console.log(message.content);
        const elmo = client.emojis.cache.find(emoji => emoji.name === "flamingelmo");
        message.channel.send(`BOOOOOOOOOONES ${elmo}`)
    }
    
    if (message.content === "!roll") {
        const rolled = Math.ceil(Math.random() * 20)
        message.channel.send(`You rolled a ${rolled}!`)
    }

    if (message.content === "!hug") {
        message.channel.send(`Have a hug, ${message.member.user}! (づ￣ ³￣)づ `)
    }
})