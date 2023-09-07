import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighchartsChartModule } from "highcharts-angular";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { ChartComponent } from './chart/chart.component';
import { Chart1Component } from './chart1/chart1.component';
import { ChartModule } from 'angular-highcharts';
//import { ChartModule } from 'angular-highcharts';
//import { BarChartComponent } from './barChart/BarChartComponent';
//import { AreaChartComponent } from './area-chart/area-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ChartComponent,
    Chart1Component,
    //BarChartComponent,
    //AreaChartComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    HighchartsChartModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
      