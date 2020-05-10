const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = 'we';
const token = 'NzA4ODQyMjI4OTMxNDkzOTE4.XrflmA.gcmraMx0Uqzsxr6BW1johz0q4iA';
 
bot.on('ready', () => {
    console.log(`${bot.user.tag} successfully logged in!`)
    bot.user.setActivity('Guerre Tra Clan', ({type: "PLAYING"}))
})
 
bot.on('message', message => {
    let msg = message;
    if(msg.content === 'ciao'){
        msg.channel.send(`Scommett ca t chiamm ${message.author.tag}`)}
    if(msg.content === 'frat'){msg.channel.send(`Frat a vit tien sta canzon, fa abus https://youtu.be/vepYwY2qWqQ?t=95`)}
    if(msg.content === 'dove vai stasera?'){msg.channel.send(`Vado nderr merg che frat fidat perchè re cumpagn nun m fir`)}
    if(msg.content === 't sfong'){msg.channel.send(`Sce t mann a Kekk cap e bomb e a Ciruzz Undertaker 
    https://www.thesun.co.uk/wp-content/uploads/2020/04/EUzfK-XWoAIJDzO.jpeg
`)}
    if(msg.content === 't sfong'){msg.channel.send(`Tu nun sai contro a chi ti sei messo, guardt aret ;)`)}
    if(msg.content === 'per chi lo facciamo?'){msg.channel.send(`P tutt e frat ingiustament carcerat
    https://tenor.com/view/ricky-berwick-toy-gun-shoot-nerf-gun-playing-gif-13811086
`)}
    if(msg.content === '7v8'){msg.channel.send(`yara ti prego, fa che non sia un addio ti supplico pls`)}
    
    if(msg.content === `${prefix}Help`){
        msg.author.send(`eccoti i comandi:
        -ciao 
        -frat
        -dove vai stasera?
        -t sfong
        -per chi lo facciamo?`)
    }
})
 
bot.login(token);