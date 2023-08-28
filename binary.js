//!build the class for the nodes

class newNode {
    constructor(data) {
        this.data = data
        this.right = null
        this.left = null
    }
}

class tree {
    constructor(array) {
        this.root = null
        this.sortedArray = [...new Set(array)].sort((a, b) => a - b);
        this.root = this.treeBuildingFunction(this.sortedArray)
    }

    treeBuildingFunction(array) {
        if(array.length === 0) {
            return null
        }

        const mid = Math.floor(array.length / 2);
        const root = new newNode(array[mid])
        root.left = this.treeBuildingFunction(array.slice(0, mid))
        root.right = this.treeBuildingFunction(array.slice(mid+1));
        return root
    }

    prettyPrint(node = this.root, prefix = "", isLeft = true) {
        if (node === null) {
            return;
        }
        if (node.right !== null) {
            this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
            this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    }

}

const testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const treeTest = new tree(testArray)

console.log([...new Set(testArray)].sort((a, b) => a - b))

treeTest.prettyPrint()
