// SELECT WELLSITE
// Connect to firebase database
// populate dropdown with list of wellsites
var staticWellsites = firebase.database().ref('wellsites/static/')
// Get snapshot of wellsite data
.on('value', function (snapshot) {
  // Get list of wellsites from FireBase
  var wellsiteList = Object.keys(snapshot.val());
   
  // Get wellsite dropdown element
  const wellsiteDropdown = document.getElementById('wellsiteDropdown');

  // Populate dropdown with wellsite list
  for (var i = 0; i < wellsiteList.length; i++) {
    var option = wellsiteList[i];
    var el = document.createElement("option");
    el.textContent = option;
    el.value = option;
    wellsiteDropdown.appendChild(el);
  }
});


// Get static wellsite selection
function getWellsite() {
  var selected = this.value;
   // Get static snapshot of firebase database
  firebase.database().ref('/wellsites/static/' + selected)
  // Get snapshot of wellsite data
  // Using 'once' method
  .once('value').then( function(snapshot){
  // Get JSON object of values
  const values = snapshot.val();
  // Using 'on' method
  // .on('value', function(snapshot){
  //   // Get JSON object of values
  //   const values = snapshot.val();

  // Load the Visualization API and the corechart package.
  google.charts.load('current', {'packages':['corechart', 'line', 'controls']
  });

  // Set a callback to run when the Google Visualization API is loaded. 
  google.charts.setOnLoadCallback(drawStaticChart(values));
  });
}
// Listen for wellsite dropdown change
wellsiteDropdown.onchange = getWellsite;


// Callback that creates and populates a data table,
// instantiates the chart, passes in the data and
// draws it.
function drawStaticChart(values){
  // Translate all objects in the object array to an array
  var array = $.map(values, function(value, index){
    return[value];
  });

  // Build Google Charts Table
  var dataTable = new google.visualization.DataTable();
  // First column is X-Axis
  dataTable.addColumn('number', 'Measured Depth');
  dataTable.addColumn('number','Drill Path');
  dataTable.addColumn('number','Gamma');
  dataTable.addColumn('number','Gas');
  dataTable.addColumn('number','ROP');

  // sort array of data
  var drillData = array.sort();

  // Data array
  var output = [];

  // push database object values into datatable
  for (var i = 0; i < drillData.length; i++){
    var item = drillData[i];
      output.push([
        parseFloat(item.measured_depth),
        parseFloat(item.true_vertical_depth),
        parseFloat(item.gamma),
        parseFloat(item.gas_co_dir),
        parseFloat(item.rate_of_penetration),
      ]);
  };

  // add values to data table
  dataTable.addRows(output);
  
/********** Toggles/columns color start ************/
var colors = ['#3366cc', '#FF9900', '#dc3912', '#109618'];
  colors.forEach(function (color, index) {
    dataTable.setColumnProperty(index + 1, 'color', color);
  });
/********* Toggles/columns color end *************/

  // Chart options
  var options = {
      legend: { position: 'top', alignment: 'start' },
      width: 3000,
      height: 600,
      backgroundColor: '#ffffff',
      chartArea:{width:'93%', height:'70%'},
      titleTextStyle: {
        color: '#000',
      },
      // Make graph explorable
      explorer: {
        // axis: 'horizontal',
        keepInBounds: true,
        actions: [
          'dragToZoom',
          'rightClickToReset'
        ],
      },
      series: {
        // Drill Path
        0: {
          // map to first Y-Axis
          targetAxisIndex: 0,
          curveType: 'function',
        },
        // Gamma
        1: {
          // map to second Y-Axis
          targetAxisIndex: 1,
        },
        // Gas
        2: {
          // map to second Y-Axis
          targetAxisIndex: 1,
           },
        // Rate of Penetration
        3: {
          // map to second Y-Axis
          targetAxisIndex: 1,
        },
      },
      // x-axis
      hAxis: {
        title: "Measured Depth",
        titleTextStyle: {
          color: '#4e73df',
        },
        viewWindowMode: 'explicit',
        viewWindow: {
          min: 75,
          max: 3450
        },
        gridlines: {
          count: 40,
        },
        slantedText: true,
        slantedTextAngle: 80,
        //textColor: '#ffffff',
      },
      // All vertical axes
      vAxes: {
        0: {
          title: "True Vertical Depth",
          titleTextStyle: {
            color: '#4e73df',
          },
          viewWindowMode: 'explicit',
          viewWindow: {
            min: 940,
            max: 995
          },
          // Y-Axis ticks
          ticks: [
            995, 990, 985, 980, 975, 970, 965, 960, 955, 950, 945, 940
          ]
        },
        // Y-Axis 1 - Sensor Measurements
        1: {
          title: "Sensor Measurements",
          titleTextStyle: {
          color: '#4e73df',
          },
          // Set custom range for sensor measurements
          viewWindowMode : 'explicit',
          viewWindow: {
            min: -5,
            max: 1000
          },
          gridlines: {
            color: 'transparent'
          },
        },                  
      },
    }

/************** Toggles start here ******************/
$('.graph-toggle-input').on('change', drawStaticChart);
$(window).resize(drawStaticChart);
drawStaticChart();

function drawStaticChart() {
  var chartColors = [];
  var chartColumns = [0];
  var view = new google.visualization.DataView(dataTable);

  $.each($('.graph-toggle-input'), function (index, checkbox) {
    var seriesColumn = parseInt(checkbox.value);
    if (checkbox.checked) {
      chartColumns.push(seriesColumn);
      chartColors.push(dataTable.getColumnProperty(seriesColumn, 'color'));
    }
  });
  view.setColumns(chartColumns);
  options.colors = chartColors;
  var chart = new google.visualization.LineChart(document.getElementById('static-chart'));
  chart.draw(view, options);
}
/************ Toggles end here ********************/

   /********************** PrintToPDF Graph **********************/
  // Print Chart options
  var optionsPrint = {
    legend: { position: 'top', alignment: 'start' },
    width: 1500,
    height: 600,
    backgroundColor: '#ffffff', 
    chartArea:{width:'90%', height:'70%'},
    titleTextStyle: {
      color: '#000',
    },
    // Make graph explorable
    explorer: {
      // axis: 'horizontal',
      keepInBounds: true,
      actions: [
        'dragToZoom',
        'rightClickToReset'
      ],
    },
    series: {
      // Drill Path
      0: {
        // map to first Y-Axis
        targetAxisIndex: 0,
      },
      // Gamma
      1: {
        // map to second Y-Axis
        targetAxisIndex: 1,
      },
      // Gas
      2: {
        // map to second Y-Axis
        targetAxisIndex: 1,
         },
      // Rate of Penetration
      3: {
        // map to second Y-Axis
        targetAxisIndex: 1,
      },
    },
    // x-axis
    hAxis: {
      title: "Measured Depth",
      titleTextStyle: {
        color: '#4e73df',
      },
      viewWindowMode: 'explicit',
      viewWindow: {
        min: 75,
        max: 3450
      },
      gridlines: {
        count: 40,
      },
      slantedText: true,
      slantedTextAngle: 80,
      //textColor: '#ffffff',
    },
    // All vertical axes
    vAxes: {
      0: {
        title: "True Vertical Depth",
        titleTextStyle: {
          color: '#4e73df',
        },
        viewWindowMode: 'explicit',
        viewWindow: {
          min: 940,
          max: 995
        },
        // Y-Axis ticks
        ticks: [
          995, 990, 985, 980, 975, 970, 965, 960, 955, 950, 945, 940
        ]
      },
      // Y-Axis 1 - Sensor Measurements
      1: {
        title: "Sensor Measurements",
        titleTextStyle: {
        color: '#4e73df',
        },
        // Set custom range for sensor measurements
        viewWindowMode : 'explicit',
        viewWindow: {
          min: -5,
          max: 1000
        },
        gridlines: {
          color: 'transparent'
        },
      },                  
    },
  }

  var graph = new google.visualization.LineChart(document.getElementById('chartDivPrint'));
  graph.draw(dataTable, optionsPrint);
  /******************** PrintToPDF Graph end *********************/
}; // end of drawChart


// Load the Visualization API and the corechart package.
google.charts.load('current', {
  'packages': ['corechart', 'line', 'controls']
});


// Draw empty chart even if no connection to database
google.charts.setOnLoadCallback(drawStaticChart);

// Unhandled Rejection Error listener
window.addEventListener('unhandledrejection', event => {
  alert("Error: " + event.reason.message);
});