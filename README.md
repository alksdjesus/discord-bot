# discord-bot
Development for discord bot

Some commands to keep note of!

Search for specific strings in a message:

var words = ["Peng", "peng", "PEng", "PeNg", "PenG", "PENg", "PENG", "pEng", "pENg"]
for (var i = 0; i < words.length; i++) {
    if (msg.content.includes(words[i])) {
        msg.reply('<@!466825076688420885>'); //numbers are user tag
    }
}
