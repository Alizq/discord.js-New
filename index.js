const { Client, Intents } = require('discord.js');
require('dotenv').config();

const client = new Client({ 
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

client.on('message', (message) => {
  if (message.content === '!ping') {
    // メッセージが '!ping' の場合、Pingを計測
    const ping = Date.now() - message.createdTimestamp;
    message.reply(`Ping: ${ping}ms`);
  }
});

client.once('ready', () => {
  console.log(`Online ${client.user.tag}`);
});

client.login(process.env.token);