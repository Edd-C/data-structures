/**
 * Using a hashmap to speedup searching.
 *
 *	O(1) with hashmap
 *  O(N) without
 *
 *	Imagine you have a list of 1,000,000 books for sale and you want to search them all by title. This is where Hashmaps excel!
 *
 */


var myMap = new Map( );

var myBookDetails = { }

myMap.set( "My Book " + 123, myBookDetails )

console.time('with very few records in the map');
console.log( myMap.get( 'My Book 123' ) );
console.timeEnd('with very few records in the map');

for ( var i = 2; i < 1000000; i++ ) {
	myBookDetails = {
		"title": "My Book " + i,
		"author": "Edd Clarke" + i,
		"Length": '100 pages' + i
	}

	myMap.set( myBookDetails[ 'title' ], myBookDetails )
}

console.time('with lots of records in the map');
console.log( myMap.get( 'My Book 12345' ) ); // O(1)
console.timeEnd('with lots of records in the map');

console.time('with lots of records in the map. FOREACH');
for (var [key, value] of myMap) {
	if ( key === 'My Book 23456' ) {
		console.log( 'FOUND!', value ); // O(N)
		break;
	}
}
console.timeEnd('with lots of records in the map. FOREACH');

console.log( myMap );