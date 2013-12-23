var scores = [ 90, 80, 70, 75, 88, 91, 75, 55, 59, 69, 60, 50, 40 ];
var sort_scores = [];
var mean_squares = [];
var mean_fourths = [];
var z_scores = [];

// Median:
// Middle value when sorted
var median = 0;
var mid = 0;
sort_scores = scores.slice(0).sort();

if ( sort_scores.length % 2 === 0 ) {
	mid = sort_scores.length / 2;
	median = sort_scores[mid];
} else {
	mid = Math.floor(sort_scores.length / 2);
	median = (sort_scores[mid] + sort_scores[mid+1] ) / 2
}

// Mean:
// Sum all scores and divide by n
var mean = sum(scores) / scores.length;

// Variance:
// For each score: (x - μ)^2
// Calculate μ of result set
mean_squares = mean_power(scores, 2);
variance = sum(mean_squares) / mean_squares.length;

// Standard Deviation:
// Square Root of Variance
σ = Math.sqrt(variance);

// Skew:
// 3(Mean - Median)
var skew = 3 * ( mean - median );

// Kurtosis:
// (x - μ)^4 / σ^4
mean_fourths = mean_power(scores, 4);
var kurtosis = sum(mean_fourths) / (mean_fourths.length * Math.pow( σ, 4 ) );

// SEK (Standard error of kurtosis):
// sek = 2(SES) Math.sqrt( (n^2-1) / (n-3)(n+5) )
var n = scores.length;
sek = 2 * Math.sqrt ( ((n*n)-1) / ( (n-3) * (n + 5) ) );

// Z-Score:
// ( x - μ ) / σ
z_scores = z_score ( scores );


console.log ('scores:', scores);
console.log ('mean:', mean);
console.log ('median:', median);
console.log ('variance:', variance);
console.log ('σ:', σ );
console.log ('skew', skew);
console.log ('kurtosis:', kurtosis);
console.log ('sek:', sek);
console.log ('z-scores:', z_scores);


function sum ( arr ) {
	var s = 0;
	var i = arr.length; while (i--) {
		s += arr[i];
	}
	return s;
}

function mean_power ( arr, pow ) {
	var ms = [];
	var i = arr.length; while (i--) {
		ms.unshift (Math.pow(arr[i] - mean, pow) );
	}
	return ms;
}

function z_score ( arr ) {
	var zs = [];
	var i = arr.length; while (i--) {
		zs.unshift ( (arr[i] - mean) / σ );
	}
	return zs;
}

