import {RouterModule, Routes} from "@angular/router";
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {InsertDataComponent} from "./pages/insert-data/insert-data.component";

const routes: Routes = [
  {path: 'homepage', component: HomepageComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'insert-data', component: InsertDataComponent},
  {path: '', redirectTo: '/homepage', pathMatch: 'full'},
  {path: '**', redirectTo: '/homepage', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
