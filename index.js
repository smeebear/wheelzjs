const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const dotenv = require('dotenv').config();

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
const prefix = '!';

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log("Ready!");
})

client.login(process.env.TOKEN);

client.on('voiceStateUpdate', (oldMember, newMember) => {
    // if (newMember.connection.voice)
    if (newMember.channel !== null && newMember.channel.type === "voice" && !newMember.mute) {
        newMember.channel.join()
        .then(connection => {
            connection.play('./data/shhh.mp3')
        });
    }
    else if (newMember.channel === null) {
        oldMember.channel.leave();
    }
})

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

    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if(command === 'swanson') {
        let quote = "";
        fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
            .then(res => res.json())
            .then(data => {
                console.log(data[1])
                return data[1];
            })
    }

    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('Error executing command :((')
    }
})