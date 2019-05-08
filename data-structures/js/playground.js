/*
 * Practice question 1.
 * Question: Given an array of unique integers, return a pair of integers that sum up to a target sum.
 * O(N^2) ?
 */

/*var arr = [ 1, 2, 3, 4, 5 ],
	sum = 6;

function returnPair( arr, sum ) {
	for ( var i = 0; i < arr.length; i++ ) {
		for ( var j = 0; j < arr.length; j++ ) {
			if ( i !== j && ( arr[ i ] + arr[ j ] === sum ) ) {
				return [ arr[ i ], arr [ j ] ];
			}
		}
	}
}

console.log( returnPair( arr, sum ) );*/

/*
 * Practice question 2a.
 * Question: Return N fibonacci value (iterative).
 *
 */

// Sample: 0,1,1,2,3,5,8,13,21

function fibonacci( num ) {
	var seq = [ 1, 1 ];

	for ( var i = 2; i < num; i++ ) {
		seq.push( seq[ i - 2 ] + seq[ i - 1 ] );
	}

	console.log( seq );
	console.log( seq[ num - 1 ] );
}
console.log( "Fibonacci iterative" );
fibonacci( 3 );

/*
 * Practice question 2b.
 * Question: Return N fibonacci value (recursive).
 *
 */

function fib( n ) {
	console.log( 'run' );
	if ( n < 2 ) return n;

	return ( fib( n - 1) + fib( n - 2 ) );
}

fib( 1 );
