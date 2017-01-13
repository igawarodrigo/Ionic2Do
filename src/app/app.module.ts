import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TaskListPage } from '../pages/tasklist/tasklist';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyA_SDaw-ZGAiZZj1Z_XTzjscBSoL939V_E",
  authDomain: "111961931984-0ih6h7jhluda6qmhckf7fofm0np8jhlh.apps.googleusercontent.com",
  databaseURL: "https://ionic2do-2fb59.firebaseio.com",
  storageBucket: "ionic2do-2fb59.appspot.com",
  messagingSenderId: "1:111961931984:android:98cceba8e6865a94"
};

@NgModule({
  declarations: [
    MyApp,
    TaskListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TaskListPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
