

interface INode {
    value: any
    leftNode: INode
    rightNode: INode
}

class _Node implements INode {
    value: any
    leftNode: INode
    rightNode: INode
    constructor(value: any) {
        this.value = value
        this.leftNode = null
        this.rightNode = null
    }
}

class BinaryTree {
    root: _Node
    constructor(root: _Node) {
        this.root = root
    }
    search(node: _Node, targetNode: _Node = this.root) : _Node {
        if (node.value.id === targetNode.value.id) {
            // console.log({targetNode,node})
            return node
        }
        if (node.value.id > targetNode.value.id) {
            if (targetNode.rightNode) {
                return this.search(node, targetNode.rightNode)
            }
            else {
                return null
            }

        }
        if (node.value.id < targetNode.value.id) {
            if (targetNode.leftNode) {
                return this.search(node, targetNode.leftNode)
            }
            else {
                return null
            }
        }

    }

    addNode(node: _Node, targetNode: _Node = this.root) {
        if (!this.root) {
            this.root = node
            return
        }
        if (targetNode.value.id > node.value.id) {
            if (!targetNode.leftNode) {
                targetNode.leftNode = node
                return
            }
            else {
                this.addNode(node, targetNode.leftNode)
            }
        }
        else {
            if (!targetNode.rightNode) {
                targetNode.rightNode = node
                return
            }
            else {
                this.addNode(node, targetNode.rightNode)
            }
        }

    }

}
// init binart tree
const root = new _Node({ id: 10, name: null })
const binaryTree = new BinaryTree(root)

// add node to binary tree
const node2 = new _Node({ id: 8, name: "Giang" })
const node3 = new _Node({ id: 12, name: "Hieu" })
const node4 = new _Node({ id: 20, name: "Viet" })



binaryTree.addNode(node2)
binaryTree.addNode(node3)
binaryTree.addNode(node4)


const findNode = binaryTree.search(node3)

console.log(findNode)
// binaryTree.search(node2)
export default BinaryTree
