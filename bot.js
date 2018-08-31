const Discord = require('discord.js');
const client = new Discord.Client();
const { get } = require("snekfetch"); 
const prefix = '.';

client.on('ready', () => {
  console.log(`EscapeRouteBot deployed!`);
  client.user.setActivity('with cats!');
});

client.on('message', msg => {
	if(msg.content.startsWith(prefix + 'cat')) {
		try {
			get('https://aws.random.cat/meow').then(res => {
				const embed = new Discord.RichEmbed()
				.setImage(res.body.file)
				return msg.channel.send({embed});
			});
		} catch(err) {
			return msg.channel.send("Error getting cat image!");
		}
    } else
    if(msg.content === prefix + 'help') {
        msg.reply('I sent you a DM with my commands! (even though I only have 1)');
        msg.author.sendMessage('.cat = Displays a cat image ot GIF!');
    }
});

client.login('NDg1MDIyNTk1OTQ3NjkyMDMz.DmqkAA.tZwycRyLSlWPIxWQfL2uMUZq-ks');