import { NgModule }      						from '@angular/core';
import { BrowserModule } 						from '@angular/platform-browser';

import { routing }									from './app.routes';

import { AppComponent }  						from './app.component';
import { EntryListComponent }				from './entry/entry-list.component'

@NgModule({
  imports: [ 
  	BrowserModule,
  	routing
  ],
  declarations: [ 
  	AppComponent,
  	EntryListComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
