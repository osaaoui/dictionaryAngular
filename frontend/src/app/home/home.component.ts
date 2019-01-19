import { Component, OnInit, ElementRef } from '@angular/core';
import {Word } from '../words';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { map, filter } from '../../../node_modules/rxjs/operators';
import {WebService } from '../web.service';
import { ViewChild } from '@angular/core';
import { Router } from "@angular/router";

export interface Options{
  value: string;
  id: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  elements:any;
  spelling=" ";
  pos:any;
  grammar: any;
  translation;
  latin='';
  latinButton='';
  asuddimIsem= "";
  options: Options[] =[
    {id: 1, value: "English-Kabyle"},
    {id: 2, value: "Taqbaylit-Tagnizit"}
  ]
    
 selected = this.options[0].id;

 untiTaqbaylit= ["tafunast", "tanemmirt","tameṭṭut", "tiγri","taṛumit", "tafat","tabburt", "tawwurt","timest", "tabbuct" ];
 asgetTaqbaylit= ["idmaren", "idamen", "idammen"];


 
 languageSelected(event: any){
   this.selected= event;
 }

  constructor(private webservice: WebService, private router: Router){}
  ngOnInit() {
    
  }

  @ViewChild('elem')
  elem: ElementRef;

  getLatin(event: string){
    this.latin = event;
    this.latinButton += this.latin;
  }

   tokenizeSpellingEnglish(item: string): string{
    if((item[item.length -1]) =='s'){
       item = item.substr(0, item.length -1);
      }
         return item;
    
  }
  tokenizeSpellingKabyle(item: string): string{
    if (item[0]=='t' && item[item.length - 1]== 't' && (this.untiTaqbaylit.includes(item)== false)){
      item = item.slice(1, item.length - 1);
  } else if (item[0]=='i' && item.slice(-2)== 'en' && (this.asgetTaqbaylit.includes(item)== false)){
    item = 'a' + item.slice(1, item.length - 2);
  } else if (item[0]=='t' && item[1]=='i' && item.slice(-2)== 'in'){
    item = 'a' + item.slice(2, item.length - 2);
    }
         return item;
    
  }

    onNameKeyUp(event: any){
      //if(event.key === 'Enter'){
        this.spelling = event;
        this.spelling = this.spelling.toLowerCase();
        if(this.selected ==1){
          this.spelling = this.tokenizeSpellingEnglish(this.spelling);
        }else{
          this.spelling= this.tokenizeSpellingKabyle(this.spelling);
        }
        this.elem.nativeElement.focus();   
    }


  getWordList(){
    this.webservice.getWords(this.spelling, this.selected)
    .subscribe((res: Array<Word>)=> {
      this.elements = res.filter(d=> d.orth == this.spelling || d.asuddimIsem == this.spelling);
      this.grammar = res[0]['gram'];
      console.log(this.elements);
     // console.log(this.grammar);
      //let pp = this.grammar[0]['pos'];

      //this.pos =pp;
     // console.log(this.pos);
      //this.translation= res.find(d => d.spelling === this.spelling);
    })
  }
  }
