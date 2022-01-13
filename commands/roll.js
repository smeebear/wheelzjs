module.exports = {
    name: 'roll',
    description: 'Rolls a die of N sides',
    execute(message, args) {
        if (args[0] == undefined) args[0] = 20;
        const quotes = [
            `You're such a Joe Rogan guy.`,
            `You seem to be having a lot of feelings right now...`,
            `Do you have a friend that knows a better roller?`,
            `You're like the male Amy Schumer.`,
            `I bet you'd make a great wingman.`
        ]

        const quote = quotes[Math.floor(Math.random() * quotes.length)]

        const rolled = Math.ceil(Math.random() * args[0])
        // const rolled = 1;
        if ([8,11,18].includes(rolled)) {
            message.channel.send(`You rolled an ${rolled} out of ${args[0]}!`)
        }
        else if (rolled === 1) {
            message.channel.send(`You rolled a 1. ${quote}`)
        }
        else message.channel.send(`You rolled a ${rolled} out of ${args[0]}!`)
    }
}