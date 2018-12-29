const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator= require('express-validator');
const request = require('request');
const fs= require('fs');
const xml2js= require('xml2js');
const parser= new xml2js.Parser();
//const natural= require('natural');   // the natural library for nlp tasks
//const nounInflector= new natural.NounInflector();

const app= express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/api/words', function(req, res) {
  var name = req.query.name;
  var option = req.query.option;
  var str;
  console.log("This is the req query name: "+ name);
  console.log("This is the req query option: "+ option);

  if(option == 1){
    fs.readFile('newWords.xml', 'utf-8', function (err, data){
      if(err){
        console.log('error');
        //res.send(err);
      } else{
        parser.parseString(data, function (err, result) {

        let lexeme, gr, part;;
        //let words = JSON.stringify(result['entry']['form']);
        let words = result['entry']['form'];
        //console.log(result);
        console.log(words);
        for (let i = 0; i < words.length; i++){
          //console.log(words.length);
          lexeme= words[i]['orth'];
          //gr= words[i]['gramGrp'];
  }

        //console.log(words);  
        //res.send(words);
        res.json(words);
      });
      }

  });

  }else {
    fs.readFile('kabToEng.xml', 'utf-8', function (err, data){
      if(err){
        console.log('error');
        //res.send(err);
      } else{
        parser.parseString(data, function (err, result) {

        let lexeme, gr, part;;
       // let words = JSON.stringify(result['entry']['form']);
        let words = result['entry']['form'];
        //console.log(result);
        //console.log(words);
        for (let i = 0; i < words.length; i++){
          //console.log(words.length);
          lexeme= words[i]['orth'];
          //gr= words[i]['gramGrp'];
  }

        //console.log(words);  
        //res.send(words);
        res.json(words);
      });
      }

  });
  }
    //res.json(words);
    
});





app.listen(3000);
