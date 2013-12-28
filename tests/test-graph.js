module ("Graph", { setup: Graph_setup, teardown: Graph_teardown });
test( "Graph.sum", Graph_sum );
test( "Graph.mean", Graph_mean );
test( "Graph.median", Graph_median );
test( "Graph.skew", Graph_skew );
test( "Graph.variance", Graph_variance );
test( "Graph.standardDeviation", Graph_standardDeviation );
test( "Graph.kurtosis", Graph_kurtosis );
test( "Graph.sek", Graph_sek );
test( "Graph.meanPower", Graph_meanPower );
test( "Graph.log", Graph_log );
test( "Graph.zScore", Graph_zScore );

// Setup something before all tests run
function Graph_setup () { }

// Teardown things after each test
function Graph_teardown () { }

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
	var arr3 = [];
	equal ( Graph.mean(arr1), 67.29629629629629 );
	equal ( Graph.mean(arr2), 0 );
	equal ( Graph.mean(arr3), undefined );
}

function Graph_median () {
	var arr1 = [ 90, 80, 70, 75, 88, 91, 75, 55, 59, 69, 60, 50, 75, 88, 91, 75, 55, 59, 69, 60, 50, 55, 59, 69, 60, 50, 40 ];
	var arr2 = [ 0,0,0,0,0,0,0,0 ];
	var arr3 = [];
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
	equal ( Graph.variance( arr1, mean), 199.02331961591221 );
	equal ( Graph.variance( arr1 ), 199.02331961591221 );
}

function Graph_standardDeviation () {
	var arr1 = [ 90, 80, 70, 75, 88, 91, 75, 55, 59, 69, 60, 50, 75, 88, 91, 75, 55, 59, 69, 60, 50, 55, 59, 69, 60, 50, 40 ];
	var variance = Graph.variance ( arr1 );
	equal ( Graph.standardDeviation (arr1), 14.107562497324341 );
	equal ( Graph.standardDeviation (variance), 14.107562497324341 );
}

function Graph_kurtosis () {
	var arr1 = [ 90, 80, 70, 75, 88, 91, 75, 55, 59, 69, 60, 50, 75, 88, 91, 75, 55, 59, 69, 60, 50, 55, 59, 69, 60, 50, 40 ];
	var mean = Graph.mean (arr1);
	var standardDeviation = Graph.standardDeviation ( arr1 );
	equal ( Graph.kurtosis ( arr1, mean, standardDeviation ), 2.0755104209894726 );
	equal ( Graph.kurtosis ( arr1, mean ), 2.0755104209894726 );
	equal ( Graph.kurtosis ( arr1 ), 2.0755104209894726 );
}

function Graph_sek () {
	var arr1 = [ 90, 80, 70, 75, 88, 91, 75, 55, 59, 69, 60, 50, 75, 88, 91, 75, 55, 59, 69, 60, 50, 55, 59, 69, 60, 50, 40 ];
	equal ( Graph.sek ( arr1 ), 1.9472202409246537 );
}

function Graph_meanPower () {
	var arr1 = [ 90, 80, 70, 75, 88, 91, 75, 55, 59, 69, 60, 50, 75, 88, 91, 75, 55, 59, 69, 60, 50, 55, 59, 69, 60, 50, 40 ];
	var mean = Graph.mean(arr1);
	var expected = [ 515.4581618655695, 161.38408779149535, 7.310013717421156, 59.34705075445825, 428.6433470507547, 561.8655692729769, 59.34705075445825, 151.19890260630987, 68.82853223593955, 2.9026063100137374, 53.23593964334697, 299.1618655692728, 59.34705075445825, 428.6433470507547, 561.8655692729769, 59.34705075445825, 151.19890260630987, 68.82853223593955, 2.9026063100137374, 53.23593964334697, 299.1618655692728, 151.19890260630987, 68.82853223593955, 2.9026063100137374, 53.23593964334697, 299.1618655692728, 745.0877914951985 ];
	deepEqual ( Graph.meanPower( arr1, mean, 2), expected );
}

function Graph_log () {
	var arr1 = [ 90, 80, 70, 75, 88, 91, 75, 55, 59, 69, 60, 50, 75, 88, 91, 75, 55, 59, 69, 60, 50, 55, 59, 69, 60, 50, 40 ];
	var expected = [ 4.499809670330265, 4.382026634673881, 4.248495242049359, 4.31748811353631, 4.477336814478207, 4.51085950651685, 4.31748811353631, 4.007333185232471, 4.07753744390572, 4.23410650459726, 4.0943445622221, 3.912023005428146, 4.31748811353631, 4.477336814478207, 4.51085950651685, 4.31748811353631, 4.007333185232471, 4.07753744390572, 4.23410650459726, 4.0943445622221, 3.912023005428146, 4.007333185232471, 4.07753744390572, 4.23410650459726, 4.0943445622221, 3.912023005428146, 3.6888794541139363 ];
	deepEqual ( Graph.log( arr1 ), expected );
}

function Graph_zScore () {
	var arr1 = [ 90, 80, 70, 75, 88, 91, 75, 55, 59, 69, 60, 50, 75, 88, 91, 75, 55, 59, 69, 60, 50, 55, 59, 69, 60, 50, 40 ];
	var mean = Graph.mean(arr1);
	var standardDeviation = Graph.standardDeviation ( arr1 );
	var expected = [ 1.6093285929450762, 0.9004889190540967, 0.19164924516311713, 0.5460690821086069, 1.4675606581668803, 1.6802125603341742, 0.5460690821086069, -0.8716102656733523, -0.5880743961169604, 0.12076527777401916, -0.5171904287278625, -1.226030102618842, 0.5460690821086069, 1.4675606581668803, 1.6802125603341742, 0.5460690821086069, -0.8716102656733523, -0.5880743961169604, 0.12076527777401916, -0.5171904287278625, -1.226030102618842, -0.8716102656733523, -0.5880743961169604, 0.12076527777401916, -0.5171904287278625, -1.226030102618842, -1.9348697765098217 ];
	deepEqual ( Graph.zScore( arr1 ), expected );
	deepEqual ( Graph.zScore( arr1, mean ), expected );
	deepEqual ( Graph.zScore( arr1, mean, standardDeviation ), expected );
}

