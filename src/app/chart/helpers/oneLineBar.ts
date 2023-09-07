import { Options } from 'highcharts';

export const oneLineBar: Options = {
  
    chart: {
      type: 'bar',
    },
    credits: {
      enabled: false,
    },
    title: {
      text: 'Units',
    },
    yAxis: {
      min:0,
      gridLineColor: '#fff',
      categories: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
      ],
    },
    legend: {
      enabled: true,
    },
    xAxis: {
      
      lineColor: '#fff',
      categories: [
        'Hindon',
        'Srinagar',
        'Jaisalmer',
        'Bikaner',
        'Tambaram',
        
      ],
    },
  
    plotOptions: {
      series: {
        borderRadius: 5,
      } as any,
    },
  
    series: [
      {
        yAxis: 0,
        type: 'bar',
        color: '#506ef9',
        data: [
          { y: 7 },
          { y: 3 },
          { y: 4 },
          { y: 7 },
          { y: 3 },
          
        ],
      },
    ],
  };
 