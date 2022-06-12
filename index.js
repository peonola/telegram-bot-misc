const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();
const http = require("https");
const options = require("./options");
const bot = new TelegramBot(process.env.TELEGRAMTOKEN, { polling: true });

bot.on("message", (msg) => {
  var anime = "anime";
  if (msg.text.toString().toLowerCase().includes(anime)) {
    var animeCall = http.request(options.optionsAnime, function (res) {
      var chunks = [];

      res.on("data", function (chunk) {
        chunks.push(chunk);
      });

      res.on("end", function () {
        var body = Buffer.concat(chunks);
        var bodyJSON = JSON.parse(body.toString());
        bot.sendMessage(msg.chat.id, bodyJSON.url);
      });
    });
    animeCall.end();
  }

  var lari = "lari";
  if (msg.text.toString().toLowerCase().includes(lari)) {
    bot.sendMessage(msg.chat.id, "kt");
    function lariGetir() {
      var lariCall = http.request(options.optionsGEL, function (res) {
        var chunks = [];

        res.on("data", function (chunk) {
          chunks.push(chunk);
        });

        res.on("end", function () {
          var body = Buffer.concat(chunks);
          var bodyJSON = JSON.parse(body.toString());
          bot.sendMessage(
            msg.chat.id,
            `1 ₾ şuanda <b>${bodyJSON.result} ₺</b>`,
            { parse_mode: "HTML" }
          );
        });
      });
      lariCall.end();
    }
    setTimeout(lariGetir, 3000);
  }

  var dolar = "dolar";
  if (msg.text.toString().toLowerCase().includes(dolar)) {
    bot.sendMessage(msg.chat.id, "kt");
    function dolarGetir() {
      var dolarCall = http.request(options.optionsUSD, function (res) {
        var chunks = [];

        res.on("data", function (chunk) {
          chunks.push(chunk);
        });

        res.on("end", function () {
          var body = Buffer.concat(chunks);
          var bodyJSON = JSON.parse(body.toString());
          bot.sendMessage(
            msg.chat.id,
            `1 $ şuanda <b>${bodyJSON.result} ₺</b>`,
            { parse_mode: "HTML" }
          );
        });
      });
      dolarCall.end();
    }
    setTimeout(dolarGetir, 3000);
  }

  var euro = "euro";
  if (msg.text.toString().toLowerCase().includes(euro)) {
    bot.sendMessage(msg.chat.id, "kt");
    function euroGetir() {
      var euroCall = http.request(options.optionsEUR, function (res) {
        var chunks = [];

        res.on("data", function (chunk) {
          chunks.push(chunk);
        });

        res.on("end", function () {
          var body = Buffer.concat(chunks);
          var bodyJSON = JSON.parse(body.toString());
          bot.sendMessage(
            msg.chat.id,
            `1 € şuanda <b>${bodyJSON.result} ₺</b>`,
            { parse_mode: "HTML" }
          );
        });
      });
      euroCall.end();
    }
    setTimeout(euroGetir, 3000);
  }

  var selam = "selam";
  if (msg.text.toString().toLowerCase().includes(selam)) {
    bot.sendMessage(msg.chat.id, "Selam " + msg.from.first_name);
  }

  var bye = "bye";
  if (msg.text.toString().toLowerCase().includes(bye)) {
    bot.sendMessage(msg.chat.id, "Siktirrr git " + msg.from.first_name);
  }

  var what = "mal bot";
  if (msg.text.includes(what)) {
    bot.banChatMember(msg.chat.id, msg.from.id);
  }

  var zar = "fincan zar";
  if (msg.text.includes(zar)) {
    bot.sendDice(msg.chat.id);
  }

  var bott = "bot";
  if (msg.text.includes(bott)) {
    bot.sendMessage(msg.chat.id, "hoppp");
  }
});
