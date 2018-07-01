import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SideSchedulePage } from '../pages/side-schedule/side-schedule';
import { SidePortfolioPage } from '../pages/side-portfolio/side-portfolio';
import { SideSettingPage } from '../pages/side-setting/side-setting';
import { SidePaymentPage } from '../pages/side-payment/side-payment';
import { TabsPage } from '../pages/tabs/tabs';
import { TabArticlePage } from '../pages/tab-article/tab-article';
import { TabContactPage } from '../pages/tab-contact/tab-contact';
import { TabHomePage } from '../pages/tab-home/tab-home';
import { TabServicePage } from '../pages/tab-service/tab-service';
import { TabCoursePage } from '../pages/tab-course/tab-course';

@NgModule({
  declarations: [
    MyApp,
    SideSchedulePage,
    SidePortfolioPage,
    SideSettingPage,
    SidePaymentPage,
    TabsPage,
    TabArticlePage,
    TabHomePage,
    TabServicePage,
    TabContactPage,
    TabCoursePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SideSchedulePage,
    SidePortfolioPage,
    SideSettingPage,
    SidePaymentPage,
    TabsPage,
    TabArticlePage,
    TabHomePage,
    TabServicePage,
    TabContactPage,
    TabCoursePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
