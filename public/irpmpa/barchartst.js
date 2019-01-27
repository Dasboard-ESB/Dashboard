window.onload = function () {

var chart = new CanvasJS.Chart("stbar", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	title:{
		text: "System Test Status"
	},
	axisY: {
		title: "Test Cases"
	},
	data: [{
		type: "column",
		showInLegend: true,
		legendMarkerColor: "grey",
		legendText: " ",
		dataPoints: [
			{ y: 100, label: "Passed" },
			{ y: 2,  label: "Failed" },
			{ y: 5,  label: "Blocked" },
			{ y: 10,  label: "N/A" },
			{ y: 5,  label: "Not Completed" },
			{ y: 30, label: "No Run" },
			{ y: 1,  label: "Deferred" }
		]
	}]
});
chart.render();

}
