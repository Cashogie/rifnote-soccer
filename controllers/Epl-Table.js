const unirest = require('unirest')
const request = require('request');

exports.getTable = (req, res) =>{

    unirest.get("https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague/table")
.header("X-RapidAPI-Host", "heisenbug-premier-league-live-scores-v1.p.rapidapi.com")
.header("X-RapidAPI-Key", "719634b4bemsh300727492aa0425p16daa6jsnd1ea1cd1a8d2")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
  let status = result.status
  let headers = result.headers
  let bodyy = result.body
  res.status(200).json({ status, headers,bodyy });
});


};
exports.getScorers = (req, res) =>{

    unirest.get("https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague/table/scorers?how=head")
    .header("X-RapidAPI-Host", "heisenbug-premier-league-live-scores-v1.p.rapidapi.com")
    .header("X-RapidAPI-Key", "719634b4bemsh300727492aa0425p16daa6jsnd1ea1cd1a8d2")
    .end(function (result) {
    console.log(result.status, result.headers, result.body);
    let status = result.status
    let headers = result.headers
    let bodyy = result.body
    res.status(200).json({ status, headers,bodyy });
});

};

exports.getLiveMatches = (req, res) =>{

    unirest.get("https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague?matchday=1&season=2018-19&live=true")
    .header("X-RapidAPI-Host", "heisenbug-premier-league-live-scores-v1.p.rapidapi.com")
    .header("X-RapidAPI-Key", "719634b4bemsh300727492aa0425p16daa6jsnd1ea1cd1a8d2")
    .end(function (result) {
    console.log(result.status, result.headers, result.body);
    let status = result.status
    let headers = result.headers
    let bodyy = result.body
    res.status(200).json({ status, headers,bodyy });
});

};
exports.getAllMatches = (req, res) =>{

    unirest.get("https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague?matchday=1&season=2018-19")
    .header("X-RapidAPI-Host", "heisenbug-premier-league-live-scores-v1.p.rapidapi.com")
    .header("X-RapidAPI-Key", "719634b4bemsh300727492aa0425p16daa6jsnd1ea1cd1a8d2")
    .end(function (result) {
    console.log(result.status, result.headers, result.body);
    let status = result.status
    let headers = result.headers
    let bodyy = result.body
    res.status(200).json({ status, headers,bodyy });
});

};
