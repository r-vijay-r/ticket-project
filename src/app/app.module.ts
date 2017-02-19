import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AuthMethods,AuthProviders,AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
const myFirebaseConfig = {
    apiKey: "AIzaSyBc-5CexKJ6FfEIubghIi1ivWgaUlnx08o",
    authDomain: "ticket-temp-booking.firebaseapp.com",
    databaseURL: "https://ticket-temp-booking.firebaseio.com",
    storageBucket: "ticket-temp-booking.appspot.com",
    messagingSenderId: "275086311192"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
