import { Component, OnInit, ElementRef } from '@angular/core';
import {Word } from '../words';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { map, filter } from '../../../node_modules/rxjs/operators';
import {WebService } from '../web.service';
import { ViewChild } from '@angular/core'

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
  options: Options[] =[
    {id: 1, value: "english-kabyle"},
    {id: 2, value: "taqbaylit-taqnizit"}
  ]
    
 selected = this.options[0].id;
  

  constructor(private webservice: WebService){}
  ngOnInit() {
    
  }

  @ViewChild('elem')
  elem: ElementRef;

  getLatin(event: string){
    this.latin = event;
    this.latinButton += this.latin;
  }
    //return this.webservice.getMessage().subscribe(words=> this.value = words);
    onNameKeyUp(event: any){
      //if(event.key === 'Enter'){
        this.spelling = event;
        this.elem.nativeElement.focus(); 
    }

  getWordList(){
    this.webservice.getWords(this.spelling)
    .subscribe((res: Array<Word>)=> {
      this.elements = res.filter(d=> d.orth == this.spelling);
      this.grammar = res[0]['gram'];
      console.log(this.elements);
     // console.log(this.grammar);
      let pp = this.grammar[0]['pos'];

      this.pos =pp;
     // console.log(this.pos);
      //this.translation= res.find(d => d.spelling === this.spelling);
    })
  }
  }
