//= require graph

$(function () {

	var scores = [ 90, 80, 70, 75, 88, 91, 75, 55, 59, 69, 60, 50, 75, 88, 91, 75, 55, 59, 69, 60, 50, 55, 59, 69, 60, 50, 40 ];

	var mean = Graph.mean ( scores );
	var median = Graph.median ( scores );
	var skew = Graph.skew ( mean, median );
	var mean_squares = Graph.meanPower( scores, mean, 2 );
	var variance = Graph.variance ( scores, mean );
	var standard_deviation = Graph.standardDeviation(variance);
	var kurtosis = Graph.kurtosis ( scores, mean, standard_deviation );
	var sek = Graph.sek ( scores );
	var z_scores = Graph.zScore ( scores, mean, standard_deviation );

	var log_scores = Graph.log( scores );

	console.log ('scores:', scores);
	console.log ('mean:', mean);
	console.log ('median:', median);
	console.log ('variance:', variance);
	console.log ('standard-deviation:', standard_deviation );
	console.log ('skew', skew);
	console.log ('kurtosis:', kurtosis);
	console.log ('sek:', sek);
	console.log ('z-scores:', z_scores);

	//$('#scores').highcharts({
		//chart: {
			//zoomType: 'xy'
		//},
		//title: {
			//text: 'Grading Curve'
		//},
		//subtitle: {
		//},
		//xAxis: [{
			//labels: { enabled: false }
		//}],
		//yAxis: [{ // Primary yAxis
			//max: 2,
			//min: -3,
			//labels: {
				//format: '{value}',
				//style: {
					//color: '#89A54E'
				//}
			//},
			//title: {
				//text: 'Z Score',
				//style: {
					//color: '#89A54E'
				//}
			//}
		//}, { // Secondary yAxis
			//max: 100,
			//min: 0,
			//title: {
				//text: 'Percentage',
				//style: {
					//color: '#4572A7'
				//}
			//},
			//labels: {
				//format: '{value}%',
				//style: {
					//color: '#4572A7'
				//}
			//},
			//opposite: true
		//}],
		//tooltip: {
			//shared: true
		//},
		//legend: {
			//layout: 'vertical',
			//align: 'left',
			//x: 50,
			//verticalAlign: 'top',
			//y: 320,
			//floating: true,
			//backgroundColor: '#FFFFFF'
		//},
		//series: [{
			//name: 'Score',
			//color: '#4572A7',
			//type: 'scatter',
			//yAxis: 1,
			//data: scores,
			//tooltip: {
				//valueSuffix: '%'
			//}

		//}, {
			//name: 'Z Score',
			//color: '#89A54E',
			//type: 'spline',
			//data: z_scores,
			//tooltip: {
				//valueSuffix: ''
			//}
		//}, {
			//name: 'Transformed Z Score',
			//color: '#E10000',
			//type: 'spline',
			//data: log_z_scores,
			//tooltip: {
				//valueSuffix: ''
			//}

		//}]
	//});
});
