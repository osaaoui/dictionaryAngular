const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator= require('express-validator');
const request = require('request');
const fs= require('fs');
const xml2js= require('xml2js');
const parser= new xml2js.Parser();
const xmldom= require('xmldom').DOMParser;
const natural= require('natural');   // the natural library for nlp tasks
const nounInflector= new natural.NounInflector();

const app= express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var wordsArray = [
  {"spelling": "aman", "category": "noun", "translation": "water"},
  {"spelling": "azzel", "category": "verb", "translation": "run"},
  {"spelling": "aberkan", "category": "adjective", "translation": "black"},
  {"spelling": "gar", "category": "preposition", "translation": "between"},
  {"spelling": "ečč", "category": "verb", "translation": "eat"}
  ]


app.get('/api/words', function(req, res) {
  var name = req.query.name;
  var str;
  console.log("This is the req query name: "+ name);
    //res.json(words);
    fs.readFile('kabToEng.xml', 'utf-8', function (err, data){
      if(err){
        console.log('error');
        //res.send(err);
      } else{
        parser.parseString(data, function (err, result) {

        let words = result['entry']['form'];
        let lexeme;
        //console.log(result);
        //console.log(words);
        for (let i = 0; i < words.length; i++){
          console.log(words.length);
          lexeme= words[i]['orth'];
          console.log(lexeme);
          //if(val == lexeme){
  }
          //}
        res.json(lexeme);
      });
      }

  });
});
  //if (name) {
    //name = name.toLowerCase();
    //var results= words.filter(word => {
      //word.spelling === name;
    //});


    //res.json(results);
  //console.log(results)
  //} else //{
  //  console.log(words);
  //}





app.listen(3000);
