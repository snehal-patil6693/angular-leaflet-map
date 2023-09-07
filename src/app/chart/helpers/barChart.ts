import { Options } from 'highcharts';
declare var $: any;
export const barChart: Options = {
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
      'HQ 21Inf Bde',
      'BR 25 Inf COY',
     /*  'Unit3',
      'Unit4',
      'Unit5', */
      
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
     /*    { y: 4 },
        { y: 7 },
        { y: 3 },
         */
      ],
    },
  ],
};

$("#switch_toggleUnitView").on("change", function() {
  if ($()[0].checked) {
      $("#nav-units, #nav-link_nav-units").removeClass("d-none");
  } else {
     
      $("#nav-units, #nav-link_nav-units").addClass("d-none");
     

  }

  fnHideRightSideBar();
});
function fnHideRightSideBar() {
  let showRightDiv = false;
 
  if (!showRightDiv) {
      $("#div_top_right").addClass("d-none");
      $("#div_top_left").addClass("w-100")
     // map.updateSize();
  } else {
      $("#div_top_right").removeClass("d-none");
      $("#div_top_left").removeClass("w-100")
      //map.updateSize();
  }
}

$("#btn_showNotification").on('click', function() {
  $('.toast').toast({
      'autohide': false
  });
})
$(".a_MaxMin").on("click", function() {
  if ($(".i_MaxMin").hasClass("bi-fullscreen")) {
      $(".i_MaxMin").removeClass("bi-fullscreen").addClass("bi-fullscreen-exit");
      $("#div_top_left").addClass("d-none");
      $("#div_top_right").removeClass("col-4").addClass("w-100");
     // map.updateSize();
     // barChart.reflow();
//airfieldsChart.reflow();
  } else if ($(".i_MaxMin").hasClass("bi-fullscreen-exit")) {
      $(".i_MaxMin").removeClass("bi-fullscreen-exit").addClass("bi-fullscreen");
      $("#div_top_left").removeClass("d-none");
      $("#div_top_right").addClass("col-4").removeClass("w-100");
      //map.updateSize();
     // barChart.reflow();
      //airfieldsChart.reflow();
  }
});
$(".rightChartTabs").on('shown.bs.tab', function(e: any) {
 // map.updateSize();
  //barChart.reflow();
 // airfieldsChart.reflow();
});