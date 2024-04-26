class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let currentNode = this.root
    let continue1 = true
    if (!currentNode) {
      continue1 = false
      this.root = new Node(val)
    }
    while (continue1) {
      if (currentNode.val < val) {
        if (currentNode.right) {
          currentNode = currentNode.right
        }
        else {
          currentNode.right = new Node(val)
          continue1 = false
        }
      }
      else {
        if (currentNode.left) {
          currentNode = currentNode.left
        }
        else {
          currentNode.left = new Node(val)
          continue1 = false
        }
      }
    }
    return this
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    if (!this.root) {
      this.root = new Node(val)
      return this
    }
    function insertRecursivelyHelper(val, currentNode) {
      if (currentNode.val > val) {
        if (currentNode.left) {
          insertRecursivelyHelper(val, currentNode.left)
        } else {
          currentNode.left = new Node(val)
        }
      }
      else {
        if (currentNode.right) {
          insertRecursivelyHelper(val, currentNode.right)
        } else {
          currentNode.right = new Node(val)
        }
      }
    }
    insertRecursivelyHelper(val, this.root)
    return this
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root
    while (true) {
      if (currentNode.val == val) {
        return currentNode
      }
      else if (currentNode.val < val) {
        if (currentNode.right) {
          currentNode = currentNode.right
        }
        else {
          return undefined
        }
      }
      else {
        if (currentNode.left) {
          currentNode = currentNode.left
        }
        else {
          return undefined
        }
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (!this.root) return undefined

    function findRecursivelyHelper(val, currentNode) {
      if (currentNode.val == val) return currentNode
      else if (currentNode.val > val) {
        if (currentNode.left) {
          return findRecursivelyHelper(val, currentNode.left)
        } else {
          return undefined
        }
      } else {
        if (currentNode.right) {
          return findRecursivelyHelper(val, currentNode.right)
        } else {
          return undefined
        }
      }
    }
    return findRecursivelyHelper(val, this.root)

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const arr = []
    function dfsPreOrderHelper(node){
      arr.push(node.val);
      if (node.left) dfsPreOrderHelper(node.left);
      if (node.right) dfsPreOrderHelper(node.right);
    }
    dfsPreOrderHelper(this.root)
    return arr
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const arr = []
    function dfsInOrderHelper(node){
      if (node.left) dfsInOrderHelper(node.left);
      arr.push(node.val);
      if (node.right) dfsInOrderHelper(node.right);
    }
    dfsInOrderHelper(this.root)
    return arr
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const arr = []
    function dfsPostOrderHelper(node){
      if (node.left) dfsPostOrderHelper(node.left);
      if (node.right) dfsPostOrderHelper(node.right);
      arr.push(node.val);
    }
    dfsPostOrderHelper(this.root)
    return arr
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let toVisitQueue = [this.root];
    const arr = []
    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();
      arr.push(current.val)
      if (current.left) toVisitQueue.push(current.left)
      if (current.right) toVisitQueue.push(current.right)
    }
    return arr
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {

  }
}

module.exports = BinarySearchTree;
