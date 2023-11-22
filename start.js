const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let message = context.params.event.content;

if (context.params.event.content.match('yoyo' )) {
  await lib.discord.channels['@0.1.1'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `\n`,
    embed: {
    title: '░A░N░G░S░ ░B░O░T░',
    type: 'rich',
description: '𝗬𝗼 𝘀𝗼𝗻𝗼 𝗔𝗻𝗴𝘀 ! 𝗰𝗼𝘀𝗮 𝗽𝗼𝘀𝘀𝗼 𝗳𝗮𝗿𝗲 𝗽𝗲𝗿 𝘁𝗲 ? 𝘀𝗲 𝗱𝗲𝘀𝗶𝗱𝗲𝗿𝗶 𝗮𝘀𝗰𝗼𝗹𝘁𝗮𝗿𝗲 𝗠𝘂𝘀𝗶𝗰𝗮 𝗽𝘂𝗼𝗶 𝘂𝘀𝗮𝗿𝗲 𝗶𝗹 𝗝𝘂𝗸𝗲𝗕𝗼𝘅 𝗮𝗹𝘁𝗿𝗶𝗺𝗲𝗻𝘁𝗶 𝘂𝘀𝗮 𝗶 𝗺𝗶𝗲𝗶 𝗰𝗼𝗺𝗮𝗻𝗱𝗶 𝗽𝗲𝗿 𝘀𝗽𝗮𝗺𝗺𝗮𝗿𝗲 𝘀𝘁𝗿𝗼𝗻𝘇𝗮𝘁𝗲 𝗶𝗻 𝗰𝗵𝗮𝘁',
    color: 0xb7ffd8,
    author: {
      name: `${context.params.event.author.username}#${context.params.event.author.discriminator}`,
      icon_url: `https://cdn.discordapp.com/avatars/${context.params.event.author.id}/${context.params.event.author.avatar}.png`,
    },
    image:{
    url: 'https://media.discordapp.net/attachments/884700017439412266/918457384605716522/bloggif_61b1e2043eeef.gif?width=320&height=202',
    },
    thumbnail: {
            url: `https://media.discordapp.net/attachments/884700017439412266/911539075574546462/Cattura.PNG?width=101&height=102`,
    },
    footer: {
      text: 'Premi le freccie sotto per voltare pagina.',
    },
    },
    tts: false,
    components: [
      {
        type: 1,
        components: [
          {
            type: 2,
            label: 'Avanti',
            style: 3,
            custom_id: 'help-firstpage',
          },
          {
            type: 2,
            label: 'Fine',
            style: 4,
            custom_id: 'help-exit',
          },
        ],
      },
    ],
  });
}
