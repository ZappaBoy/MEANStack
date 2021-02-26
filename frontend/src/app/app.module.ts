import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HomepageComponent} from './homepage/homepage.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from './app.routing';
import {UserAccessComponent} from './user-access/user-access.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {InsertDataComponent} from './insert-data/insert-data.component';
import {NavbarComponent} from './navbar/navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {TabViewModule} from 'primeng/tabview';
import {MenubarModule} from 'primeng/menubar';
import {TabMenuModule} from 'primeng/tabmenu';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UserAccessComponent,
    DashboardComponent,
    InsertDataComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    RippleModule,
    TabViewModule,
    MenubarModule,
    TabMenuModule,
    RouterModule.forRoot([
      {path: '', component: AppComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
