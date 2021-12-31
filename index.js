/////////////////// BOT VERIFICADOR //////////////////////
const Discord = require("discord.js");;
const { Client, Intentsl} = require('discord.js');
const client = new Client({ intents:32767 });

client.on("ready", () => {
  console.log(`El bot ${client.user.tag}! está Listo`);
});

client.on("message", msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});
/*
* Condición de acceso, ingresar el ID del canal (sala de espera)
*/
client.on("message", message => {
  if(message.channel.id === " - Esta es la entrada de la categoría, ingresa el ID - "){
    if(message.author.bot) return;
    /*
     * input: msj de verificación 'Acepto'
     * output: asigna el rol 'Usuario' (antes de eso crear el rol 'Usuario')
     */ 
    if(message.content === "Acepto"){
      message.member.roles.add(" - Aquí va el ID del rol de tu servidor - ");
      message.author.send("Gracias por verificarte");
      message.delete();
    }
    else{
      message.author.send("Tienes problemas? Habla con el admin.");
      message.delete();
    }
  }
});
/*
 * token: ID Bot
 */
client.login(" - Aquí va el token de tu bot - ");
