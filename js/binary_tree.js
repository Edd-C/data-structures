class Tree {
	constructor( node ) {
		this.rootNode = node;
	}

	getRoot( ) {
		return this.rootNode;
	}

	insert( node ) {
		var currentNode = this.rootNode;

		while ( currentNode !== undefined ) {
			if ( node.data < currentNode.data ) {
				// traverse left
				if ( currentNode.left === undefined ) {
					currentNode.left = node;
					break;
				}
				else {
					// node found here, set to currentNode and try again.
					currentNode = currentNode.left;
				}
			}
			else if ( node.data > currentNode.data ) {
				// traverse right
				if ( currentNode.right === undefined ) {
					// no node here, add
					currentNode.right = node;
					break;
				}
				else {
					// node found here, set to currentNode and try again.
					currentNode = currentNode.right;
				}
			}
			else {
				break; // Duplicate
			}
		}
	}
}

class Node {
	constructor( data ) {
		this.data = data;
		this.left;
		this.right;
	}
}

var tree = new Tree( new Node( 10 ) );

tree.insert( new Node( 6 ) );
tree.insert( new Node( 8 ) );
tree.insert( new Node( 15 ) );
tree.insert( new Node( 2 ) );
tree.insert( new Node( 5 ) );
tree.insert( new Node( 1 ) );
tree.insert( new Node( 4 ) );
tree.insert( new Node( 19 ) );

console.log( tree );


function inOrderTraverse( root ) {
   if ( root !== undefined ) {
      inOrderTraverse( root.left );
      console.log( root.data );
      inOrderTraverse( root.right );
   }
}

inOrderTraverse( tree.getRoot( ) );




