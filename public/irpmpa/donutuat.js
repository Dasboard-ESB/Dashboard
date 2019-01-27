google.charts.load("current", {packages:["corechart"]});
     google.charts.setOnLoadCallback(drawChart);
     function drawChart() {
       var data = google.visualization.arrayToDataTable([
         ['Task', 'Hours per Day'],
         ['',     50],
         ['',      50]
       ]);

       var options = {
         pieHole: 0.4,
         legend:'none',
         is3D: 'true',
         slices: {
            0: { color: '#4B449E' },
            1: { color: '#ECF0F1' }
          }

       };

       var chart = new google.visualization.PieChart(document.getElementById('uatchart'));
       chart.draw(data, options);
     }
