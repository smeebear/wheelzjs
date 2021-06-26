const Discord = require('discord.js');
const client = new Discord.Client();
const dotenv = require('dotenv').config();

client.once('ready', () => {
    console.log("Ready!");
})

client.login(process.env.TOKEN);

// const wheelz = client.emojis.cache.find(emoji => emoji.name === "wheelz")

client.on('message', message => {
    if (message.content.match(/wheelz/gi) && !(message.author.bot)) {
        console.log(message.content);
        const wheelz = client.emojis.cache.find(emoji => emoji.name === "wheelz");
        message.channel.send(`THE WHEELZZZZ ${wheelz}`);
    }
})