//= require graph

$(function () {

	var scores = [ 90, 80, 70, 75, 88, 91, 75, 55, 59, 69, 60, 50, 75, 88, 91, 75, 55, 59, 69, 60, 50, 55, 59, 69, 60, 50, 40 ];
	var log_scores = [];
	var z_scores = [];

	var mean = Graph.mean ( scores );
	var median = Graph.median ( scores );
	var skew = Graph.skew ( mean, median );
	var mean_squares = Graph.meanPower( scores, mean, 2 );
	var variance = Graph.variance ( scores, mean );
	var standard_deviation = Graph.standardDeviation(variance);

	// Kurtosis:
	// (x - μ)^4 / standard_deviation^4
	var mean_fourths = mean_power(scores, mean, 4);
	var kurtosis = sum(mean_fourths) / (mean_fourths.length * Math.pow( standard_deviation, 4 ) );

	// SEK (Standard error of kurtosis):
	// sek = 2(SES) Math.sqrt( (n^2-1) / (n-3)(n+5) )
	var n = scores.length;
	sek = 2 * Math.sqrt ( ((n*n)-1) / ( (n-3) * (n + 5) ) );

	// Z-Score:
	// ( x - μ ) / standard_deviation
	z_scores = z_score ( scores, mean, standard_deviation );


	log_scores = log_score( scores );
	var log_sort_scores = log_scores.slice(0).sort();
	var log_mean = sum ( log_scores ) / log_scores.length;
	var log_mean_squares = mean_power ( log_scores, log_mean, 2 );
	var log_variance = sum(log_mean_squares) / log_mean_squares.length;
	var log_standard_deviation = Math.sqrt ( log_variance );
	var log_mean_fourths = mean_power(log_scores, log_mean, 4);
	var log_kurtosis = sum(log_mean_fourths) / (log_mean_fourths.length * Math.pow( log_standard_deviation, 4 ) );
	var log_mid, log_median;
	if ( log_sort_scores.length % 2 === 0 ) {
		log_mid = log_sort_scores.length / 2;
		log_median = log_sort_scores[log_mid];
	} else {
		log_mid = Math.floor(log_sort_scores.length / 2);
		log_median = (log_sort_scores[log_mid] + log_sort_scores[log_mid+1] ) / 2
	}
	var log_skew = 3 * ( log_mean - log_median );
	var log_z_scores = z_score ( log_scores, log_mean, log_standard_deviation );

	console.log ('scores:', scores);
	console.log ('mean:', mean);
	console.log ('median:', median);
	console.log ('variance:', variance);
	console.log ('standard-deviation:', standard_deviation );
	console.log ('skew', skew);
	console.log ('kurtosis:', kurtosis);
	console.log ('sek:', sek);
	console.log ('z-scores:', z_scores);

	console.log ('----------------------------');

	console.log ('log-scores:', log_scores);
	console.log ('log-mean:', log_mean);
	console.log ('log-median:', log_median);
	console.log ('log-variance:', log_variance);
	console.log ('log-skew', log_skew);
	console.log ('log-standard-deviation:', log_standard_deviation);
	console.log ('log-kurtosis:', log_kurtosis);
	console.log ('log-z-scores:', log_z_scores);

	console.log ('----------------------------');

	var grades_perc = get_grade_by_perc ( scores );
	var grades_raw = get_letter_grades ( z_scores );
	var grades_log = get_letter_grades ( log_z_scores );

	console.log ('scores:', scores);
	console.log ( 'Per Grades:', grades_perc );
	console.log ( 'Raw Grades:', grades_raw );
	console.log ( 'Log Grades:', grades_log );


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
