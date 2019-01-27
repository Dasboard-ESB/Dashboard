



          google.charts.load("current", {packages:["corechart"]});
               google.charts.setOnLoadCallback(drawChart);
               function drawChart() {
                 var data = google.visualization.arrayToDataTable([
                   ['Task', 'Hours per Day'],
                   ['',     100]
                 ]);

                 var options = {
                   pieHole: 0.4,
                   legend:'none',
                   is3D: 'true',
                   slices: {
                      0: { color: '#4B449E' }
                    }

                 };

                 var chart = new google.visualization.PieChart(document.getElementById('uatfull'));
                 chart.draw(data, options);
               }
