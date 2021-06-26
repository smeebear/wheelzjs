const Discord = require('discord.js');
const client = new Discord.Client();
const dotenv = require('dotenv');

client.once('ready', () => {
    console.log("Ready!");
})

client.login(process.env.TOKEN);

const wheelz = client.emojis.cache.find(emoji => emoji.name === "wheelz")

client.on('message', message => {
    if (message.content.includes('wheelz')) {
        message.channel.send(`THE WHEELZZZZ ${wheelz}`)
    }
})