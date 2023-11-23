const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

const CommandName = 'cry';
const CommandDescription = "I can't see it comin down my eyes, So I gotta make the song cry ";
const CommandContent = [
  'https://c.tenor.com/gK32v_OWs0kAAAAC/omg-cat.gif',
];

await lib.discord.commands['@0.0.0'].create({
  guild_id: `${context.params.event.guild_id}`,
  name: CommandName,
  description: CommandDescription
});

await lib.discord.channels['@0.2.0'].messages.create({
  channel_id: `${context.params.event.channel_id}`,
  content: '\n',
  embed: {
    title: '\n',
    description: `<@!${context.params.event.member.user.id}>`,
    color:  0xAA0000,
    image: {
      url: CommandContent[Math.floor(Math.random() * CommandContent.length)],
    }
  }
});
