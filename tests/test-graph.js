test( "Graph.sum", Graph_sum );
test( "Graph.mean", Graph_mean );
test( "Graph.median", Graph_median );
test( "Graph.skew", Graph_skew );
test( "Graph.variance", Graph_variance );
test( "Graph.standardDeviation", Graph_standardDeviation );
test( "Graph.kurtosis", Graph_kurtosis );
test( "Graph.sek", Graph_sek );
test( "Graph.meanPower", Graph_meanPower );

function Graph_sum () {
	var arr1 = [0,1,2,3,4,5,6,7,8,9,10];
	var arr2 = [0,1,-2,3,-4,5,-6,7,-8,9,-10];
	var arr3 = [0,0,0,0];
	var arr4 = [];
	equal ( Graph.sum(arr1), 55 );
	equal ( Graph.sum(arr2), -5 );
	equal ( Graph.sum(arr3), 0 );
	equal ( Graph.sum(arr4), 0 );
}

function Graph_mean () {
	var arr1 = [ 90, 80, 70, 75, 88, 91, 75, 55, 59, 69, 60, 50, 75, 88, 91, 75, 55, 59, 69, 60, 50, 55, 59, 69, 60, 50, 40 ];
	var arr2 = [ 0, 0, 0 ];
	var arr3 = [ ];
	equal ( Graph.mean(arr1), 67.29629629629629 );
	equal ( Graph.mean(arr2), 0 );
	equal ( Graph.mean(arr3), undefined );
}

function Graph_median () {
	var arr1 = [ 90, 80, 70, 75, 88, 91, 75, 55, 59, 69, 60, 50, 75, 88, 91, 75, 55, 59, 69, 60, 50, 55, 59, 69, 60, 50, 40 ];
	var arr2 = [ 0,0,0,0,0,0,0,0 ]
	var arr3 = []
	equal ( Graph.median(arr1), 69 );
	equal ( Graph.median(arr2), 0 );
	equal ( Graph.median(arr3), undefined );
}

function Graph_skew () {
	var arr1 = [ 90, 80, 70, 75, 88, 91, 75, 55, 59, 69, 60, 50, 75, 88, 91, 75, 55, 59, 69, 60, 50, 55, 59, 69, 60, 50, 40 ];
	var mean = Graph.mean ( arr1 );
	var median = Graph.median ( arr1 );
	equal ( Graph.skew (mean,median), -5.1111111111111285 );
	equal ( Graph.skew (0,0), 0 );
}

function Graph_variance () {
	var arr1 = [ 90, 80, 70, 75, 88, 91, 75, 55, 59, 69, 60, 50, 75, 88, 91, 75, 55, 59, 69, 60, 50, 55, 59, 69, 60, 50, 40 ];
	var mean = Graph.mean ( arr1 );
	equal ( Graph.variance( arr1 ), 199.02331961591221 );
	equal ( Graph.variance( arr1, mean), 199.02331961591221 );
}

function Graph_standardDeviation () {
	var arr1 = [ 90, 80, 70, 75, 88, 91, 75, 55, 59, 69, 60, 50, 75, 88, 91, 75, 55, 59, 69, 60, 50, 55, 59, 69, 60, 50, 40 ];
	var variance = Graph.variance ( arr1 );
	equal ( Graph.standardDeviation (arr1), 14.107562497324341 );
	equal ( Graph.standardDeviation (variance), 14.107562497324341 );
}

function Graph_kurtosis () {
	expect(0);
}

function Graph_sek () {
	expect(0);
}

function Graph_meanPower () {
	var arr1 = [ 90, 80, 70, 75, 88, 91, 75, 55, 59, 69, 60, 50, 75, 88, 91, 75, 55, 59, 69, 60, 50, 55, 59, 69, 60, 50, 40 ];
	var mean = Graph.mean(arr1);
	var expected = [ 515.4581618655695, 161.38408779149535, 7.310013717421156, 59.34705075445825, 428.6433470507547, 561.8655692729769, 59.34705075445825, 151.19890260630987, 68.82853223593955, 2.9026063100137374, 53.23593964334697, 299.1618655692728, 59.34705075445825, 428.6433470507547, 561.8655692729769, 59.34705075445825, 151.19890260630987, 68.82853223593955, 2.9026063100137374, 53.23593964334697, 299.1618655692728, 151.19890260630987, 68.82853223593955, 2.9026063100137374, 53.23593964334697, 299.1618655692728, 745.0877914951985 ];
	ok ( Graph.meanPower( arr1, mean, 2), expected );
}
