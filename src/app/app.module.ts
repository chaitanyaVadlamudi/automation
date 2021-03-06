import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSlimScrollModule } from 'ngx-slimscroll';
import { TreeModule } from 'primeng/primeng';
import { NgxGaugeModule } from 'ngx-gauge';
import { AmChartsModule } from "@amcharts/amcharts3-angular";
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap';
import { AngularEchartsModule } from 'ngx-echarts';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { DeviceDetailsComponent } from './device-details/device-details.component';

import {ServiceRequest} from './services/base.http.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DeviceDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TreeModule,
    TabsModule.forRoot(),
    NgSlimScrollModule,
    NgxGaugeModule,
    routing,
    AmChartsModule,
    AngularEchartsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [ServiceRequest],
  bootstrap: [AppComponent]
})
export class AppModule { }
