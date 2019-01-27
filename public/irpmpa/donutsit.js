google.charts.load("current", {packages:["corechart"]});
     google.charts.setOnLoadCallback(drawChart);
     function drawChart() {
       var data = google.visualization.arrayToDataTable([
         ['Task', 'Hours per Day'],
         ['System Integration Progress',     80],
         ['',      20]
       ]);

       var options = {
         pieHole: 0.4,
         legend:'none',
          is3D: 'true',
         slices: {
            0: { color: '#1DACDB' },
            1: { color: '#ECF0F1' }
          }

       };

       var chart = new google.visualization.PieChart(document.getElementById('sitchart'));
       chart.draw(data, options);
     }
