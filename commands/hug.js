module.exports = {
    name: 'hug',
    description: 'Gives you a hug!',
    execute(message, args) {
        message.channel.send(`Have a hug, ${message.member.user}! (づ￣ ³￣)づ `);
    }
}