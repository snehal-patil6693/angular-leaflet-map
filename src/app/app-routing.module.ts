import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { ChartComponent } from './chart/chart.component';
import { Chart1Component } from './chart1/chart1.component';


const routes: Routes = [
 {
   path:'map', component: MapComponent 
 },
 {
   path:'chart', component: ChartComponent 
 },
 {
  path:'chart1', component: Chart1Component 
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
