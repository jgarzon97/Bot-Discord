///////////////// BOT VERIFADOR //////////////////////
const Discord = require("discord.js");;
const { Client, Intentsl} = require('discord.js');
const client = new Client({ intents:32767 });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});
/*
 * input: msj de verificación 'Acepto'
 * output: asigna el rol 'Usuario'
 */ 
client.on("message", message => {
  if(message.channel.id === "889002423895592980"){
    if(message.author.bot) return;
    
    if(message.content === "Acepto"){
      message.member.roles.add("889003414602792990");
      message.author.send("Gracias por verificarte");
      message.delete();
    }
    else{
      message.author.send("Tienes problemas? Habla con un admin.");
      message.delete();
    }
  }
});
/*
 * token: ID Bot
 */
client.login("ODg4ODM1NDI2OTE4NDk4MzM0.YUYefw.CvlfBEApJdrzIOM29JM7Wh6PwqU");
