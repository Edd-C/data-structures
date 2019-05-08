/**
 * 	Example code
 */

class Stack {
	constructor( ) {
		this._size = 0;
		this._storage = { };
	}

	push( data ) {
		// increases the size counter
	    this._size++;

	    // assigns size as a key of storage
	    // assigns data as the value of this key
	    this._storage[ this._size ] = data;
	}

	pop( ) {
	    var deletedData = this._storage[ this._size ];

	    if ( this._size > 0 ) {
	    	delete this._storage[ this._size ];

			this._size--;

			return deletedData;
	    }
	}

	getSize( ) {
		return this._size;
	}
}



/**
 * 	Test code
 */

var myStack = new Stack( );

console.log( 'Popped data (no data added yet): ', myStack.pop( ) );
console.log( 'Size: ', myStack.getSize( ) );

console.log( 'Adding 10 entries. ' );
for ( var i = 0; i < 10; i++ ) {
	myStack.push( 'Stack item ' + i );
}
console.log( 'Size: ', myStack.getSize( ) );

console.log( 'Popped data: ', myStack.pop( ) );

console.log( 'Size: ', myStack.getSize( ) );
