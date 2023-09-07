import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart.component';
import { HighchartsChartComponent } from 'highcharts-angular';
import { barChart } from './helpers/barChart';
@NgModule({
  declarations: [
    ChartComponent,
    HighchartsChartComponent,
    
    
  ],
  imports: [
    CommonModule
  ]
})
export class ChartModule { }
