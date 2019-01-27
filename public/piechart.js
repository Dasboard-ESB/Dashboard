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
    type: "column2d",
    renderAt: "chart-container1",
    width: "100%",
    height: "400px",
    dataFormat: "json",
    dataSource: {
      chart: {
        "caption": "Current Status",
        "plottooltext":
          "<b>$percentValue</b> Current progress",
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
