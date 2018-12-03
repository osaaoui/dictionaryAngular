import { Component, OnInit, ElementRef } from '@angular/core';
import {Word } from '../words';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { map, filter } from '../../../node_modules/rxjs/operators';
import {WebService } from '../web.service';
import { ViewChild } from '@angular/core'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  words:Word[];
  spelling=" ";
  translation;
  latin='';
  latinButton='';

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
        //this.getWordList();
      //}
      
    }


    //getProfile(){
     //return  this.http.get(`http://www.localhost:3000/words/?name=${this.name}`);
        
      
    //} 

  //update(name: string){
    //this.name= name;
  //}
  /*getOneWord(){
    this.webservice.searchWords(this.spelling)
    .subscribe(res => {
      console.log(res);
      this.translation = res.find(d => d.spelling === this.spelling)
    });
  }*/

  getWordList(){
    this.webservice.getWords(this.spelling)
    .subscribe(res => {
      this.translation= res.find(d => d.spelling === this.spelling);
    })
  }
  }
