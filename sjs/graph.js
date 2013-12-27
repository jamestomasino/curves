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

	variance: function ( arr, mean ) {
		return Graph.sum( Graph.meanPower( arr, mean, 2 ) ) / arr.length;
	},

	logScore: function ( arr ) {
		var ls = [];
		var i = arr.length; while (i--) {
			ls.unshift ( Math.log( arr[i] ) );
		}
		return ls;
	},

	zScore: function ( arr, mean, standard_deviation ) {
		var zs = [];
		var i = arr.length; while (i--) {
			zs.unshift ( (arr[i] - mean) / standard_deviation );
		}
		return zs;
	}
}
