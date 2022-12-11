"use strict";
exports.__esModule = true;
var _Node = /** @class */ (function () {
    function _Node(value) {
        this.value = value;
        this.leftNode = null;
        this.rightNode = null;
    }
    return _Node;
}());
var BinaryTree = /** @class */ (function () {
    function BinaryTree(root) {
        this.root = root;
    }
    BinaryTree.prototype.search = function (node, targetNode) {
        if (targetNode === void 0) { targetNode = this.root; }
        if (node.value.id === targetNode.value.id) {
            // console.log({targetNode,node})
            return node;
        }
        if (node.value.id > targetNode.value.id) {
            if (targetNode.rightNode) {
                return this.search(node, targetNode.rightNode);
            }
            else {
                return null;
            }
        }
        if (node.value.id < targetNode.value.id) {
            if (targetNode.leftNode) {
                return this.search(node, targetNode.leftNode);
            }
            else {
                return null;
            }
        }
    };
    BinaryTree.prototype.addNode = function (node, targetNode) {
        if (targetNode === void 0) { targetNode = this.root; }
        if (!this.root) {
            this.root = node;
            return;
        }
        if (targetNode.value.id > node.value.id) {
            if (!targetNode.leftNode) {
                targetNode.leftNode = node;
                return;
            }
            else {
                this.addNode(node, targetNode.leftNode);
            }
        }
        else {
            if (!targetNode.rightNode) {
                targetNode.rightNode = node;
                return;
            }
            else {
                this.addNode(node, targetNode.rightNode);
            }
        }
    };
    return BinaryTree;
}());
// init binart tree
var root = new _Node({ id: 10, name: null });
var binaryTree = new BinaryTree(root);
// add node to binary tree
var node2 = new _Node({ id: 8, name: "Giang" });
var node3 = new _Node({ id: 12, name: "Hieu" });
var node4 = new _Node({ id: 20, name: "Viet" });
binaryTree.addNode(node2);
binaryTree.addNode(node3);
binaryTree.addNode(node4);
var findNode = binaryTree.search(node3);
console.log(findNode);
// binaryTree.search(node2)
exports["default"] = BinaryTree;
