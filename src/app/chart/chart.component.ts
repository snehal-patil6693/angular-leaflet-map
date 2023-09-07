import { Component, OnInit } from '@angular/core';
import * as HighCharts from 'highcharts';
import { Chart } from 'angular-highcharts';
//import { areaChartOptions } from './helpers/areaChartOptions';
import { barChart } from './helpers/barChart';
import { oneLineBar } from './helpers/oneLineBar';

declare var $: any;

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  
  
  
 
  
  //areaSplineChart = new Chart(areaChartOptions);
  barChart = new Chart(barChart);
 oneLineBar = new Chart(oneLineBar);
}
