const fs = require("fs");
const mesage = require("./index");

const optionsUSD = {
  method: "GET",
  hostname: "api.apilayer.com",
  port: null,
  path: "/exchangerates_data/convert?to=TRY&from=USD&amount=1",
  headers: {
    apikey: "H9lX6zXoPZgn0NTBOx9OtK4l05hw6Xje",
  },
};

const optionsEUR = {
  method: "GET",
  hostname: "api.apilayer.com",
  port: null,
  path: "/exchangerates_data/convert?to=TRY&from=EUR&amount=1",
  headers: {
    apikey: "H9lX6zXoPZgn0NTBOx9OtK4l05hw6Xje",
  },
};

const optionsGEL = {
  method: "GET",
  hostname: "api.apilayer.com",
  port: null,
  path: "/exchangerates_data/convert?to=TRY&from=GEL&amount=1",
  headers: {
    apikey: "H9lX6zXoPZgn0NTBOx9OtK4l05hw6Xje",
  },
};

const optionsAnime = {
  method: "GET",
  hostname: "api.waifu.pics",
  port: null,
  path: "/nsfw/waifu",
};

const zarOnFoto = fs.readFileSync(`./monopoly-gerben-steyaert.mp4`);
const dice1 = fs.readFileSync(`./dices/dice1.png`);
const dice2 = fs.readFileSync(`./dices/dice2.png`);
const dice3 = fs.readFileSync(`./dices/dice3.png`);
const dice4 = fs.readFileSync(`./dices/dice4.png`);
const dice5 = fs.readFileSync(`./dices/dice5.png`);
const dice6 = fs.readFileSync(`./dices/dice6.png`);

const kese = [null, dice1, dice2, dice3, dice4, dice5, dice6];

module.exports = {
  optionsAnime,
  optionsEUR,
  optionsUSD,
  optionsGEL,
  zarOnFoto,
  kese,
};
