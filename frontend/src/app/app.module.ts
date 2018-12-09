import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,
MatCheckboxModule,
MatInputModule,
MatSnackBarModule,
MatToolbarModule,
MatIconModule,
MatListModule, 
MatSidenavModule,
MatSelectModule} 
from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {RouterModule, Routes } from '@angular/router';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';



import { HomeComponent } from './home/home.component';
import { WordsComponent } from './words/words.component';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';

import {WebService } from './web.service';


const myRoutes: Routes=[
  {path: 'words', component: WordsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent}


]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    WordsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    RouterModule.forRoot(myRoutes)
  ],
  
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
