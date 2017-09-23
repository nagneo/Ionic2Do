import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { TaskListPage } from '../pages/tasklist/tasklist';

export const firebaseConfig = {
  apiKey: "AIzaSyC2huaFKFIXizb2BehUMZnm7EtwBwRCc0E",
  authDomain: "ionic2do-b2e83.firebaseapp.com",
  databaseURL: "https://ionic2do-b2e83.firebaseio.com",
  projectId: "ionic2do-b2e83",
  storageBucket: "ionic2do-b2e83.appspot.com",
  messagingSenderId: "775080947009"
};





@NgModule({
  declarations: [
    MyApp,
    TaskListPage
  ],
  imports: [  //imports array within @NgModule
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TaskListPage
  ],
  providers:[
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
