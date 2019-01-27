window.addEventListener("load", getData(genFunction));
    function getData(callbackIN) {
      var ref = firebase.database().ref("company");
      ref.once('value').then(function (snapshot) {
        callbackIN(snapshot.val())
      });
    }
    function genFunction(data) {
      var cdata = [];
      var len = data.length;
      for(var i=1; i<len; i++) {
        cdata.push({
          label: data[i]['label'],
          value: data[i]['value']
        });
      }


var firebaseChart = new FusionCharts({
      type: "column3d",
      renderAt: "defects",
      width: "100%",
      height: "100%",
      dataFormat: "json",
      dataSource :{
        "chart": {
          "caption": "Defect Status",
          "yaxisname": "Defects",
          "decimals": "1",
          "theme": "fusion"
        },
        "data":cdata
      }
    });
    firebaseChart.render();
    }
