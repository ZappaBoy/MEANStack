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
import {GalleriaModule} from 'primeng/galleria';
import {HttpClientModule} from '@angular/common/http';
import {SliderComponent} from './slider/slider.component';
import {ContentDividerComponent} from './content-divider/content-divider.component';
import {DividerModule} from 'primeng/divider';
import {FooterComponent} from './footer/footer.component';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {CustomerService} from "./services/customer.service";
import {CalendarModule} from 'primeng/calendar';
import {FormsModule} from "@angular/forms";
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {CheckboxModule} from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {RadioButtonModule} from 'primeng/radiobutton';
import {KeyFilterModule} from 'primeng/keyfilter';
import {PasswordModule} from 'primeng/password';
import {RatingModule} from 'primeng/rating';
import {SliderModule} from 'primeng/slider';
import {SelectButtonModule} from 'primeng/selectbutton';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {DialogModule} from 'primeng/dialog';

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
    FooterComponent
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
    GalleriaModule,
    HttpClientModule,
    DividerModule,
    InputTextModule,
    TableModule,
    CalendarModule,
    CascadeSelectModule,
    CheckboxModule,
    DropdownModule,
    InputSwitchModule,
    RadioButtonModule,
    KeyFilterModule,
    PasswordModule,
    RatingModule,
    SliderModule,
    SelectButtonModule,
    ToggleButtonModule,
    DialogModule,
    RouterModule.forRoot([
      {path: '', component: AppComponent}

    ]),
    FormsModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
