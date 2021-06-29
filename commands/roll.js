module.exports = {
    name: 'roll',
    description: 'Rolls a die of N sides',
    execute(message, args) {
        if (args[0] == undefined) args[0] = 20;
        const rolled = Math.ceil(Math.random() * args[0])
        message.channel.send(`You rolled a(n) ${rolled} out of ${args[0]}!`)
    }
}