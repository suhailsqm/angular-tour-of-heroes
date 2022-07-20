import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

//import { AngularFireModule } from '@angular/fire';
//import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
//import { AngularFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule//,
	//AngularFireModule.initializeApp(environment.firebaseConfig)//,
  //  AngularFireDatabaseModule
  ],
  providers: [],//AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
