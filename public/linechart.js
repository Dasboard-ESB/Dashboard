const dataSource = {
  "chart": {
    "caption": "Execution Trend",
    "yaxisname": "Test Cases",
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
          "label": "W1"
        },
        {
          "label": "W2"
        },
        {
          "label": "W3"
        },
        {
          "label": "W4"
        },
        {
          "label": "W5"
        }
      ]
    }
  ],
  "dataset": [
    {
      "seriesname": "Planned",
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
      "seriesname": "Executed",
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
      "seriesname": "Passed",
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
    },
    {
      "seriesname": "Failed",
      "data": [
        {
          "value": "0"
        },
        {
          "value": "12"
        },
        {
          "value": "17"
        },
        {
          "value": "12"
        },
        {
          "value": "19"
        }
      ]
    }
  ]
};

FusionCharts.ready(function() {
   var myChart1 = new FusionCharts({
      type: "msline",
      renderAt: "chart-container4",
      width: "100%",
      height: "100%",
      dataFormat: "json",
      dataSource
   }).render();
});
