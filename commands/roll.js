module.exports = {
    name: 'roll',
    description: 'Rolls a die of N sides',
    execute(message, args) {
        if (args[0] == undefined) args[0] = 20;
        const rolled = Math.ceil(Math.random() * args[0])
        if ([8,11,18].includes(rolled)) {
            message.channel.send(`You rolled an ${rolled} out of ${args[0]}!`)
        }
        else message.channel.send(`You rolled a ${rolled} out of ${args[0]}!`)
    }
}