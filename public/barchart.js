window.addEventListener("load", getData(genFunction));
    function getData(callbackIN) {
      var ref = firebase.database().ref("data");
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
        type: 'column3d',
        renderAt: 'chart-container3',
    width: "100%",
    height: "400px",
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Family Age Chart",
                "subCaption": "Age of your family members",
                "subCaptionFontBold": "0",
                "captionFontSize": "20",
                "subCaptionFontSize": "17",
                "captionPadding": "15",
                "captionFontColor": "#8C8C8C",
                "baseFontSize": "14",
                "baseFont": "Barlow",
                "canvasBgAlpha": "0",
                "bgColor": "#FFFFFF",
                "bgAlpha": "100",
                "showBorder": "0",
                "showCanvasBorder": "0",
                "showPlotBorder": "0",
                "showAlternateHGridColor": "0",
                "usePlotGradientColor": "0",
                "paletteColors": "#6AC1A5",
                "showValues": "0",
                "divLineAlpha": "5",
                "showAxisLines": "1",
                "drawAnchors": "0",
                "xAxisLineColor": "#8C8C8C",
                "xAxisLineThickness": "0.7",
                "xAxisLineAlpha": "50",
                "yAxisLineColor": "#8C8C8C",
                "yAxisLineThickness": "0.7",
                "yAxisLineAlpha": "50",
                "baseFontColor": "#8C8C8C",
                "toolTipBgColor": "#FA8D67",
                "toolTipPadding": "10",
                "toolTipColor": "#FFFFFF",
                "toolTipBorderRadius": "3",
                "toolTipBorderAlpha": "0",
                "drawCrossLine": "1",
                "crossLineColor": "#8C8C8C",
                "crossLineAlpha": "60",
                "crossLineThickness": "0.7",
                "alignCaptionWithCanvas": "1"
            },
            "data": cdata
        }
    });
    firebaseChart.render();
    }
