import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from './app.routing';
import { UserAccessComponent } from './user-access/user-access.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InsertDataComponent } from './insert-data/insert-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UserAccessComponent,
    DashboardComponent,
    InsertDataComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
