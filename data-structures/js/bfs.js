class Node {
	constructor( data ) {
		this.data = data;
		this.left;
		this.right;
	}
}

class Tree {
	constructor( node ) {
		this.root = node;
	}

	insert( data ) {
		var currentNode = this.root,
			data = parseInt( data );

		while( true ) {
			if ( data < currentNode.data ) {
				if ( currentNode.left === undefined ) { // go left
					currentNode.left = new Node( data );
					break;
				}
				else {
					currentNode = currentNode.left;
				}
			}
			else if ( data > currentNode.data ) { // go right
				if ( currentNode.right === undefined ) {
					currentNode.right = new Node( data );
					break;
				}
				else {
					currentNode = currentNode.right;
				}
			}
			else {
				// duplicate
				break;
			}
		}
	}

	visit( node ) {
		console.log( node. data );
	}

	// In-order traversal (DFS)
	inOrder( node ) {
		if ( node !== undefined ) {
			this.inOrder( node.left ); // left
			this.visit( node );// root
			this.inOrder( node.right );// right
		}
	}

	// pre-order traversal (DFS)
	preOrder( node ) {
		if ( node !== undefined ) {
			this.visit( node );
			this.preOrder( node.left );
			this.preOrder( node.right );
		}
	}

	// post-order traversal
	postOrder( node ) {
		if ( node !== undefined ) {
			this.preOrder( node.left );
			this.preOrder( node.right );
			this.visit( node);
		}
	}

	// Breadth first search
	bfs( ) {
		var queue = new Queue( ),
			currentNode;

		// get things started
		queue.enqueue( this.root );

		while ( queue.getSize( ) > 0 ) {
			currentNode = queue.dequeue( );

			this.visit( currentNode );

			// visit left, add to que
			if ( currentNode.left !== undefined ) {
				queue.enqueue( currentNode.left );
			}

			// visit right, add to que
			if ( currentNode.right !== undefined ) {
				queue.enqueue( currentNode.right );
			}
		}
	}

	minDepth( node ) {
		var queue = new Queue(),
			currentNode,
			depth = 0;

		if ( node !== undefined ) {
			queue.enqueue( node );
			queue.enqueue( '+' )
			depth++;
		}

		while( true ) {
			currentNode = queue.dequeue( );

			if ( currentNode === '+' ) {
				currentNode = queue.dequeue( );
				queue.enqueue( '+' );
				depth++;
			}

			if ( currentNode.left === undefined && currentNode.right === undefined ) {
				return depth;
			}

			if ( currentNode.left !== undefined ) {
				queue.enqueue( currentNode.left );
			}

			if ( currentNode.right !== undefined ) {
				queue.enqueue( currentNode.right );
			}
		}

	}

	maxDepth( node ) {
		var left, right, max = 0;

		if ( node === undefined ) {
			return 0;
		}

		left = this.maxDepth( node.left );
		right = this.maxDepth( node.right );

		max = Math.max( left, right );

		return max + 1;
	}

	maxWidth( node ) {
		var queue = new Queue( ),
			currentNode = node,
			width = 0,
			widthArr = [ ];

		if ( currentNode === undefined ) {
			return 0;
		}

		queue.enqueue( currentNode );
		queue.enqueue( '+' );

		while ( queue.getSize( ) > 0 ) {
			currentNode = queue.dequeue( );

			if ( currentNode === '+' ) {
				widthArr.push( width );
				width = 0;
				queue.enqueue( '+' );
				currentNode = queue.dequeue( );

			}

			if ( currentNode !== '+' ) {
				if ( currentNode.left !== undefined ) {
					queue.enqueue( currentNode.left );
					width++;
				}

				if ( currentNode.right !== undefined ) {
					queue.enqueue( currentNode.right );
					width++;
				}
			}
		}

		//return Math.max( ...widthArr );
		return Math.max.apply( null, widthArr );
	}

}

// Make this better
class Queue {
	constructor( ) {
		this._newestIndex = 0;
		this._oldestIndex = 0;
		this._storage = { };
	}

	enqueue( node ) {
		this._storage[ this._newestIndex ] = node;

		this._newestIndex++;
	}

	dequeue( ) {
		if ( this._oldestIndex < this._newestIndex ) {
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


var tree = new Tree( new Node( 10 ) ),
	nodeData = [ 6, 8, 2, 1, 5, 15, 19 ];

for ( var i = 0; i < nodeData.length; i++ ) {
	console.log( 'run' );
	tree.insert( nodeData[ i ] );
}

console.log( tree );

console.log( 'IN ORDER: ' );
tree.inOrder( tree.root )

console.log( 'PRE ORDER: ' );
tree.preOrder( tree.root )

console.log( 'POST ORDER: ' );
tree.postOrder( tree.root )

console.log( 'BFS: ' );
tree.bfs( );

/*
	TO DO...

	1) Get min depth ( done ).
	2) Get max depth (done)
	3) get width ( is that a thing? )
	4) Find common ancestors
*/

console.log( 'Min Depth: ' );
console.log( tree.minDepth( tree.root ) );

console.log( 'Max Depth: ' );
console.log( tree.maxDepth( tree.root ) );

console.log( 'Max Width: ' );
console.log( tree.maxWidth( tree.root ) );



