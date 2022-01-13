// const fetch = require('node-fetch')

module.exports = {
    name: 'swanson',
    description: 'Hits an API that supplies a Ron Swanson quote',
    execute(msg, args) {
        import fetch from "node-fetch";
        console.log('Got fetch')
        let quote = "";
        fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
            .then(res => res.json())
            .then(data => {
                console.log(data[1])
                return data[1];
            })
        // msg.channel.send(`${quote}`)
    }
}