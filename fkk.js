const Discord = require('discord.js')
, fs = require("fs")
, http = require('http-request')
, Canvas = require('canvas')
, jimp = require('jimp')
, client = new Discord.Client()
, prefix =".";

client.on('ready',() => {
  // client.user.setGame(`لا ... تدع أحد يرسم لك " خرائط " حياتك فهناك من لا يحترم " الحدود " ..!!ـ`, 'https://www.twitch.tv/ii_sadoka');
console.log("Hi Ne Welcome to the system !");
});

client.on("message", message => {
 var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  var args = message.content.split(" ").slice(2)
    if(command == "."){
    let f = new Discord.RichEmbed()    
    .addField("ثمود هم قوم نبي الله...؟", ".")
    message.channel.send({embed: f})
    }
})

 var fkk;
client.on('message', message => {
//    if(message.guild.id !== "415462130804850688") return;
//    if(message.author.id!== "417311939300032512") return;


    message.channel.send(`${fkk}`);

});



client.on("message", message =>{
if(message.author.id !== "348082708670578688") return;
 let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(2)
  let argsurl = message.content.split(" ").slice();
if(!argsurl) return;
if(!args) return;
    if(command === "1"){
        
    console.log(`url:\n${argsurl[1]}\nname:\n${args}`)
var options = {url: argsurl[1]};
http.get(options, `./img/${args}`, function (error, result) {
    if (error) {
        console.error(error);
        message.channel.send('**There was error while uploading the image**').then(msg => msg.delete(2500))
    } else {
        console.log('File downloaded at: ' + result.file);
        message.channel.send('**Image uploaded successfully**').then(msg => msg.delete(2500))
       }
    });
   }
});


client.login("NDE4ODY5MTg1MTA0MzE0MzY4.DXqWNQ.WJMpnwl50CLfbZ8McGfcE9aXFvw");
//client.login("NDE3MzExOTM5MzAwMDMyNTEy.DXRRAw.wQdw0nO9FGxLPITVI7dIMKci0mU");  // بوت التيست