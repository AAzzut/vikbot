const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function(){
    bot.user.setGame("VikBot, !help");
    console.log("Bot Ready");

});

bot.login("NDYxNTIwNjA4MTcwMjEzMzc2.DhUg3Q.93DDrtONzksiR1B-H_qSnEM1_W8");
