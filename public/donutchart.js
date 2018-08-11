window.addEventListener("load", getData(genFunction));
    function getData(callbackIN) {
      var ref = firebase.database().ref("company");
      ref.once('value').then(function (snapshot) {
        callbackIN(snapshot.val())
      });
    }
function genFunction(company) {
  var cdata = [];
  var len = company.length;
  for(var i=1; i<len; i++) {
    cdata.push({
      label: company[i]['label'],
      value: company[i]['value']
    });
  }
  var firebaseChart = new FusionCharts({
    type: "doughnut3d",
    renderAt: "chart-container2",
    width: "100%",
    height: "400px",
    dataFormat: "json",
    dataSource: {
      chart: {
        "caption": "Market Share of Web Servers",
        "plottooltext":
          "<b>$percentValue</b> of web servers run on $label servers",
        "showlegend": "1",
        "showpercentvalues": "1",
        "legendposition": "bottom",
        "usedataplotcolorforlabels": "1",
        "theme": "fusion"
      },
      "data": cdata
    }
  });
  firebaseChart.render();
}
