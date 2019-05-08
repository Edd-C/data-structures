class SinglyLinkedList {
	constructor( data ) {
		this.head = new Node( data );
	}

	addToHead( data ) {
		this.head = new Node( data, this.head );
	}

	addToTail( data ) {
		if ( this.head !== undefined ) {
			var currNode = this.head;

			while ( currNode.next !== undefined ) {
				currNode = currNode.next;
			}

			currNode.next = new Node( data );
		}
	}

	deleteNode( key ) {
		var pos = 0,
			currNode = this.head,
			lastNode;

		if ( currNode !== undefined ) {
			// Delete the head node
			if ( key === 0 && currNode.next !== undefined ) {
				return this.head = currNode.next;
			}

			// Delete N node
			while ( currNode.next !== undefined ) {
				lastNode = currNode;
				currNode = currNode.next;
				pos++;

				if ( pos === key ) {
					lastNode.next = currNode.next;
				}
			}
		}
	}

	print( ) {
		var currNode = this.head;

		while ( currNode.next !== undefined ) {
			console.log( currNode.data );
			currNode = currNode.next;
		}

		console.log( currNode.data );
	}
}

class Node {
	constructor( data, next ) {
		console.log( typeof next );
		this.next = next;
		this.data = data;
	}
}

var sll = new SinglyLinkedList( 30 );

sll.addToHead( 20 );
sll.addToHead( 10 );
sll.addToTail( 40 );

sll.addToTail( 5 )
sll.addToHead( 1 );

console.log( "Print 1: " );
sll.print( );

sll.deleteNode( 1000 );
sll.deleteNode( 2 );

console.log( "Print 2: " );
sll.print( );

console.log( sll );
