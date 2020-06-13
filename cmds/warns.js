const Discord = module.require("discord.js");
const { sdct } = require ('../botconfig.json')
const SDC = require('sdc-api');
const client = new SDC(sdct)
module.exports.run = async (bot, message, args) => {
    client.warns(message.author.id)
    .then((data) => {
                console.info(data);

    let type = (data.type)
    let erro = new Discord.RichEmbed()
    if (type == undefined) { erro.setDescription(`Ошибка`).setColor('RED').addField(`Причина`,`Варны отсутсвуют`);return bot.send(erro); };

        let warns =  (data.warns)


          try {
        let embed = new Discord.RichEmbed()
            .setTitle(`Количество предупреждений`)
            .setColor('RED')
            .addField(`У пользователя `,warns)
                .setFooter(`Запрос от ${message.author.tag}`, message.author.avatarURL);

        bot.send(embed);
    } catch (err) {
        let bk = require('../botconfig.json');
        let a = bot.users.get(bk.admin)
        let errEmb = new Discord.RichEmbed()
            .setTitle(`${err[0]}`)
            .setColor('#ff2400')
            .addField(`**${err.name}**`, `**${err.message}**`)
            .setFooter(`${err[1]} ${a.tag}`, bot.user.avatarURL)
            .setTimestamp();
        bot.send(errEmb);
        console.log(err.stack);
    }

});};
module.exports.help = {
    name: "warns",
    aliases: ["преды"]
};
