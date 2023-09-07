import { Options } from 'highcharts';

export const areaChartOptions: Options = {
  chart: {
    height:200,
    styledMode: true,
  },
  plotOptions: {
    series: {
      marker: {
        enabled: false,
      },
    },
  },
  legend: {
    enabled: false,
  },
  tooltip: {
    shared: true,
    valueSuffix: ' Nos'
},
credits: {
    enabled: false
},

  title: {
    text: 'Statistics',
  },
  yAxis: {
    title: {
      text: "Flights"
  }
      
  
  },

  xAxis: {
    

    categories: [
      'Hindon',
      'Srinagar',
      'Jaisalmer',
      'Bikaner',
      'Tambaram'
      
    ],
  },

  defs: {
    gradient0: {
      tagName: 'linearGradient',
      id: 'gradient-0',
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 1,
      children: [
        {
          tagName: 'stop',
          offset: 0,
        },
        {
          tagName: 'stop',
          offset: 1,
        },
      ],
    },
  } as any,

  series: [
    {
      color: 'red',
      type: 'line',
      keys: ['y', 'selected'],
      data: [
        [0, false],
        [2, false],
        [2, false],
        [0, false],
        [0, false],
       
      ],
    },
  ],
};
