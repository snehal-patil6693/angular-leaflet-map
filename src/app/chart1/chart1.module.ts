import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart1Component } from './chart1.component';
import { areaChartOptions } from './helpers/areaChartOptions';
import { HighchartsChartComponent } from 'highcharts-angular';


@NgModule({
  declarations: [
   Chart1Component,
   HighchartsChartComponent,
    
  ],
  imports: [
    CommonModule
  ]
})
export class Chart1Module { }
