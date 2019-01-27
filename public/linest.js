const dataSource = {
  "chart": {
    "caption": "Average Progression Chart",
    "yaxisname": "Amount of work done",
    "subcaption": "2012-2016",
    "showhovereffect": "1",
    "numbersuffix": "",
    "drawcrossline": "1",
    "plottooltext": "<b>$dataValue</b> of work done on on $seriesName",
    "theme": "fusion"
  },
  "categories": [
    {
      "category": [
        {
          "label": "2012"
        },
        {
          "label": "2013"
        },
        {
          "label": "2014"
        },
        {
          "label": "2015"
        },
        {
          "label": "2016"
        }
      ]
    }
  ],
  "dataset": [
    {
      "seriesname": "System Test",
      "data": [
        {
          "value": "62"
        },
        {
          "value": "64"
        },
        {
          "value": "64"
        },
        {
          "value": "66"
        },
        {
          "value": "78"
        }
      ]
    },
    {
      "seriesname": "System Integration Test",
      "data": [
        {
          "value": "16"
        },
        {
          "value": "28"
        },
        {
          "value": "34"
        },
        {
          "value": "42"
        },
        {
          "value": "54"
        }
      ]
    },
    {
      "seriesname": "User Acceptance Test",
      "data": [
        {
          "value": "20"
        },
        {
          "value": "22"
        },
        {
          "value": "27"
        },
        {
          "value": "22"
        },
        {
          "value": "29"
        }
      ]
    }
  ]
};

FusionCharts.ready(function() {
   var myChart = new FusionCharts({
      type: "msline",
      renderAt: "chart-container4",
      width: "100%",
      height: "100%",
      dataFormat: "json",
      dataSource
   }).render();
});
