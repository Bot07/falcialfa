const embed = require('discord.js'); 



const Discord = require('discord.js'); 



const client = new Discord.Client();



var prefix = 'fa!' 



client.on("ready", () => {client.user.setGame('fd!yardım | Falına bakmamı ister misin? | Sunucu Sayısı: ' + client.guilds.size , 'https://twitch.tv/GardropFuat') 







}); 
client.login(process.env.BOT_TOKEN)
