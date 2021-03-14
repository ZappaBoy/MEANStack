import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from './app.routing';

import {AppComponent} from './app.component';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {UserAccessComponent} from './components/user-access/user-access.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {InsertDataComponent} from './pages/insert-data/insert-data.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {SliderComponent} from './components/slider/slider.component';
import {ContentDividerComponent} from './components/content-divider/content-divider.component';
import {FooterComponent} from './components/footer/footer.component';
import {LogoutComponent} from './components/logout/logout.component';
import {SignupComponent} from './components/signup/signup.component';
import {ToasterComponent} from './components/toaster/toaster.component';
import {UserAvatarComponent} from './components/user-avatar/user-avatar.component';

import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {MenubarModule} from 'primeng/menubar';
import {GalleriaModule} from 'primeng/galleria';
import {DividerModule} from 'primeng/divider';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {FormsModule} from '@angular/forms';
import {PasswordModule} from 'primeng/password';
import {SliderModule} from 'primeng/slider';
import {DialogModule} from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UserAccessComponent,
    DashboardComponent,
    InsertDataComponent,
    NavbarComponent,
    SliderComponent,
    ContentDividerComponent,
    FooterComponent,
    LogoutComponent,
    SignupComponent,
    ToasterComponent,
    UserAvatarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    RippleModule,
    MenubarModule,
    GalleriaModule,
    HttpClientModule,
    DividerModule,
    InputTextModule,
    TableModule,
    PasswordModule,
    SliderModule,
    DialogModule,
    ToastModule,
    FormsModule,
    InputTextareaModule,
    CalendarModule,
    ConfirmPopupModule,
    AvatarModule,
    AvatarGroupModule,
    RouterModule.forRoot([
      {path: '', component: AppComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
