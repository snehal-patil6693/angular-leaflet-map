import { Options } from 'highcharts';

export const areaChartOptions: Options = {
  chart: {
  
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
  credits: {
    enabled: false,
  },
  title: {
    text: 'Statistics',
  },
  yAxis: {
    visible: false,
  },

  xAxis: {
    

    categories: [
      'Unit1',
      'Unit2',
      'Unit3',
      'Unit4',
      'Unit5',
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
      type: 'areaspline',
      keys: ['y', 'selected'],
      data: [
        [7, false],
        [3, false],
        [4, false],
        [7, false],
        [3, false],
       
      ],
    },
  ],
};
