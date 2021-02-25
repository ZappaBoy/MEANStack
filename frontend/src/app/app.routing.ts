import {RouterModule, Routes} from "@angular/router";
import {HomepageComponent} from "./homepage/homepage.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {InsertDataComponent} from "./insert-data/insert-data.component";
import {UserAccessComponent} from "./user-access/user-access.component";

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'insert-data', component: InsertDataComponent},
  { path: 'login', component: UserAccessComponent}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
