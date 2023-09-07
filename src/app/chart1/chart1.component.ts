import { Component } from '@angular/core';
import { areaChartOptions } from './helpers/areaChartOptions';
import * as HighCharts from 'highcharts';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.scss']
})
export class Chart1Component  {

  areaSplineChart = new Chart(areaChartOptions);
}
