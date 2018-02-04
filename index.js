const Discord = require('discord.js');
const bot = new Discord.Client();




bot.on('message', message => {
  if (message.content === 'JOO') {
   // message.reply('pong');
    message.channel.sendMessage('OK! Why is it you?');
  }
});

bot.on('message', message => {
  if (message.content === 'huh') {
   // message.reply('pong');
    message.channel.sendMessage('geot gata dache mwoya banhaebeorin geot gata');
  }
});

bot.on('message', message => {
  if (message.content === 'ok! why is it you?') {
   // message.reply('pong');
    message.channel.sendMessage('geot gata dache mwoya banhaebeorin geot gata!');
  }
});

bot.on('message', message => {
  if (message.content === 'ah') {
   // message.reply('pong');
    message.channel.sendMessage('All day, in my head, round and round it goes question mark, everyday');
  }
});

bot.on('message', message => {
  if (message.content === 'I know') {
   // message.reply('pong');
    message.channel.sendMessage('gasi dotchin geol almyeonseodo gatgo sipeo red rose');
  }
});

bot.on('message', message => {
  if (message.content === 'gasi julgien areumdam jangmiga pineun beop') {
   // message.reply('pong');
    message.channel.sendMessage('yh');
  }
});

bot.on('message', message => {
  if (message.content === 'Jinhan ppalgang kkotmareun neol saranghandan geot') {
   // message.reply('pong');
    message.channel.sendMessage('ya');
  }
});

bot.on('message', message => {
  if (message.content === 'So beautiful') {
   // message.reply('pong');
    message.channel.sendMessage('Soo beautiful');
  }
});

bot.on('message', message => {
  if (message.content === 'so beautiful') {
   // message.reply('pong');
    message.channel.sendMessage('soo beautiful');
  }
});

bot.on('message', message => {
  if (message.content === '') {
   // message.reply('pong');
    message.channel.sendMessage('');
  }
});

bot.on('message', message => {
  if (message.content === '') {
   // message.reply('pong');
    message.channel.sendMessage('');
  }
});



bot.on("ready", () => {
  bot.user.setPresence({game: {name:"RAPPING WITH I.M. BOT"}})
  console.log('I have jackoo: {SERVERNAME}')
})


bot.on('ready', ()=>{
  console.log(`Logged in as ${bot.user.tag}!`);
  voiceChannel = bot.guilds.find('name', 'DREAMENERG3T1CER').channels.find('name', 'JOO-HEON');
  voiceChannel.join().then(()=>{
      console.log(`Connected to ${voiceChannel.name}!`);
  });
});


// Create an event listener for new guild members
bot.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'general');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});


bot.login('');
