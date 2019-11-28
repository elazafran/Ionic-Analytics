import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';
// import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';

import { OneSignal } from '@ionic-native/onesignal/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private oneSignal: OneSignal
    // private ga: GoogleAnalytics
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.oneSignal.startInit('665ca873-f442-41bf-ad0e-c8810489c278', '1033310925703');

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

      this.oneSignal.handleNotificationReceived().subscribe(() => {
      // do something when notification is received
      });

      this.oneSignal.handleNotificationOpened().subscribe(() => {
        // do something when a notification is opened
      });

      this.oneSignal.endInit();

      // javier.aliaga.clickcode
      // this.ga.startTrackerWithId('UA-152636846-1')

      // acuam creado.com
      // this.ga.startTrackerWithId('UA-152557319-1')
      // this.ga.startTrackerWithId('App + Web | 215639476')
      // this.ga.startTrackerWithId('App + Web | 215958672')
      // this.ga.startTrackerWithId('UA-152557319-1')
      // .then(() => {
      //   console.log('funcionando....');
      // }).catch(e => alert('Error starting GoogleAnalytics == '+ e));

    });
  }
}
