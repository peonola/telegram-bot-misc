const http = require("https");

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

// function animeGetir() {
//   var animeCall = http.request(optionsAnime, function (res) {
//     var chunks = [];

//     res.on("data", function (chunk) {
//       chunks.push(chunk);
//     });

//     res.on("end", function () {
//       var body = Buffer.concat(chunks);
//       var bodyJSON = JSON.parse(body.toString());
//       return bodyJSON.url;
//     });
//   });
//   animeCall.end();
// }
// animeGetir();

module.exports = { optionsAnime, optionsEUR, optionsUSD, optionsGEL };
