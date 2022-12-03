var _Node = /** @class */ (function () {
    function _Node(value) {
        this.value = value;
        this.next = null;
    }
    return _Node;
}());
var _SinglyLinkedList = /** @class */ (function () {
    function _SinglyLinkedList() {
        this.list = null;
        this.tail = null;
    }
    _SinglyLinkedList.prototype.add = function (node) {
        if (!this.list) {
            this.list = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
    };
    _SinglyLinkedList.prototype.remove = function () {
        var currentNode = this.list;
        var afterCurrentNode;
        while (true) {
            afterCurrentNode = currentNode.next;
            if (afterCurrentNode.next === null) {
                currentNode.next = null;
                break;
            }
            if (currentNode.next === null) {
                break;
            }
            else {
                currentNode = currentNode.next;
            }
        }
    };
    _SinglyLinkedList.prototype.scan = function () {
        var currentNode = this.list;
        while (true) {
            console.log(currentNode.value);
            if (currentNode.next === null) {
                break;
            }
            else {
                currentNode = currentNode.next;
            }
        }
    };
    return _SinglyLinkedList;
}());
var list1 = new _SinglyLinkedList();
var node1 = new _Node(7);
var node2 = new _Node(3);
var node3 = new _Node(1);
list1.add(node1);
list1.add(node2);
list1.add(node3);
list1.remove();
list1.remove();
list1.scan();
