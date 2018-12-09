import { Component, OnInit } from '@angular/core';
import {WebService } from '../web.service';
import {Word} from '../words';


@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {
   // messages = [{text: 'some text', owner: 'Tim'}, {text: 'second text', owner: 'Omar'}];
   words: Word;

  constructor(private webservice: WebService) { }

  ngOnInit() {
  // return this.webservice.getMessages().subscribe(words=> this.words = words);
 // return this.webservice.getMessage().subscribe()
   
   
  }


}