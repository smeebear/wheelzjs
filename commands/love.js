module.exports = {
    name: 'love',
    description: 'Calculates the length of your love in watt years.',
    execute(message, args) {
        if (args[0] == undefined) return;
        const c2 = 299792456*299792456;
        const time = 60*60*24*365;
        let years = args[0]*c2/time;
        years = years.toLocaleString();
        message.channel.send(`That's enough love to power a single 60 watt bulb for ${years} years!`)
    }
}