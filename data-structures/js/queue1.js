class Queue {
	constructor( ) {
		this._oldestIndex = 0;
		this._newestIndex = 0;
		this._storage = { };
	}

	enqueue( data ) {
		this._storage[ this._newestIndex ] = data;

		this._newestIndex++;
	}

	dequeue( ) {
		if ( this._newestIndex !== this._oldestIndex ) {
			var deleted = this._storage[ this._oldestIndex ];

			delete this._storage[ this._oldestIndex ];

			this._oldestIndex++;

			return deleted;
		}
	}

	getSize( ) {
		return this._newestIndex - this._oldestIndex;
	}
}


var myQueue = new Queue( );

console.log( 'Get size: ', myQueue.getSize( ) ); // Should output 0

myQueue.enqueue( 10 );
myQueue.enqueue( 20 );

console.log( 'Get size: ', myQueue.getSize( ) ); // Should output 2

console.log( 'Dequeue: ', myQueue.dequeue( ) ); // Should output 10
console.log( 'Dequeue: ', myQueue.dequeue( ) ); // Should output 20
console.log( 'Dequeue: ', myQueue.dequeue( ) ); // Should output undefinded

myQueue.enqueue( 100 );

console.log( 'Get size: ', myQueue.getSize( ) ); // Should output 1