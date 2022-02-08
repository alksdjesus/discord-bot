//index.js file for discord bot

const Discord = require('discord.js');
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'Peng') {
        msg.reply('<@&933200309109530684>');
    }
});

client.login('OTM5Nzc5ODk2NDYzNDYyNDIw.Yf90Ow.CrxQNz6avwDwQ1d6NHg2RMcO2_0');
