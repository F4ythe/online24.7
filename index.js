const Discord = requre('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('bot is online');
});

client.login('NDc0NTA4MjMwNDkyNTUzMjI3.X5FwJA.03-OOOdO-QEQC55EM8mERo2khWU');