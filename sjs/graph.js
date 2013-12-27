var Graph = {
	sum: function ( arr ) {
		var s = 0;
		var i = arr.length; while (i--) {
			s += arr[i];
		}
		return s;
	},

	mean: function ( arr ) {
		if (arr.length) {
			return Graph.sum ( arr ) / arr.length;
		} else {
			return;
		}
	},

	median: function ( arr ) {
		var mid, median, sort = arr.slice(0).sort(compareNumbers);
		if ( sort.length % 2 === 0 ) {
			mid = sort.length / 2;
			median = sort[mid];
		} else {
			mid = Math.floor(sort.length / 2);
			median = (sort[mid] + sort[mid+1] ) / 2
		}

		function compareNumbers(a, b) {
			return a - b;
		}

		return median;
	},

	skew: function ( mean, median ) {
		return 3 * ( mean - median );
	},

	meanPower: function ( arr, mean, pow ) {
		if (typeof pow === 'undefined') pow = 2;
		if (typeof mean === 'undefined') {
			mean = Graph.mean(arr);
		}

		var ms = [];
		var i = arr.length; while (i--) {
			ms.unshift (Math.pow(arr[i] - mean, pow) );
		}
		return ms;
	},

	// Variance:
	// For each score: (x - μ)^2
	// Calculate μ of result set
	variance: function ( arr, mean ) {
		if (typeof mean === 'undefined') {
			mean = Graph.mean(arr);
		}
		return Graph.sum( Graph.meanPower( arr, mean, 2 ) ) / arr.length;
	},

	// Standard Deviation:
	// Square Root of Variance
	// Arguments: Variance (Number) -or- Data set (Array)
	standardDeviation: function ( v ) {
		if (typeof v === 'number') {
			return Math.sqrt ( v );
		} else if( Object.prototype.toString.call( v ) === '[object Array]' ) {
			return Math.sqrt ( Graph.variance ( v ) );
		} else {
			return;
		}
	},

	// Kurtosis:
	// (x - μ)^4 / standard_deviation^4
	kurtosis: function ( arr, mean, standardDeviation ) {
		if (typeof mean === 'undefined') {
			mean = Graph.mean(arr);
		}
		if (typeof standardDeviation === 'undefined') {
			standardDeviation = Graph.standardDeviation ( arr );
		}

		var meanFourths = Graph.meanPower (arr, mean, 4);
		return Graph.sum(meanFourths) / (arr.length * Math.pow( standardDeviation, 4 ) );
	},

	// SEK (Standard error of kurtosis):
	// sek = 2(SES) Math.sqrt( (n^2-1) / (n-3)(n+5) )
	sek: function ( arr ) {
		var n = arr.length;
		return 2 * Math.sqrt ( ((n*n)-1) / ( (n-3) * (n + 5) ) );
	},

	// Take log(e) of each item in data, return new array
	log: function ( arr ) {
		var ls = [];
		var i = arr.length; while (i--) {
			ls.unshift ( Math.log( arr[i] ) );
		}
		return ls;
	},

	// Z-Score:
	// ( x - μ ) / standard_deviation
	zScore: function ( arr, mean, standardDeviation ) {
		if (typeof mean === 'undefined') {
			mean = Graph.mean(arr);
		}
		if (typeof standardDeviation === 'undefined') {
			standardDeviation = Graph.standardDeviation ( arr );
		}

		var zs = [];
		var i = arr.length; while (i--) {
			zs.unshift ( (arr[i] - mean) / standardDeviation );
		}
		return zs;
	}
}
