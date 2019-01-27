google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {
  var data = new google.visualization.arrayToDataTable([
  ['Opening Move', 'Percentage'],
  ["Passed", 99.34],
  ["Failed", 2],
  ["Blocked", 5],
  ["N/A", 10],
  ['Not Completed', 5],
  ["No Run", 30],
  ["Deferred", 1,]
  ]);

  var options = {
    title: 'Test Execution Progress Chart',
    width: 900,
    legend: { position: 'none' },
    is3D:true,
    bars: 'vertical', // Required for Material Bar Charts.
    axes: {
      x: {
        0: { side: 'top', label: 'Percentage'} // Top x-axis.
      }
    },
    bar: { groupWidth: "90%" }
  };

  var chart = new google.charts.Bar(document.getElementById('barchartpercent'));
  chart.draw(data, options);
};
