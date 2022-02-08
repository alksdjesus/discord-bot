//index.js file for discord bot

const TOKEN = process.env['TOKEN'];
const keepAlive = require("./server");
const Discord = require('discord.js');
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    msg.content = msg.content.toLowerCase();
    if (msg.channel.id == 830095426601746542) {
        //if (msg.content === '👀') {
        if (msg.content.includes('👀') || msg.content.includes('valo?')) {
            msg.reply('<@&933200309109530684>');
        }
    }
    if (msg.content.includes('peng')) {
        msg.reply('PONG <@!466825076688420885>');
        //msg.reply('<@!466825076688420885>');
    }
    if (msg.content.includes('dumbass')) {
        msg.reply('<@!404472366853521410>');
    }
});

keepAlive();
client.login(TOKEN);
