
class _Node {
    value : any
    next : any
    constructor(value: any) {
        this.value = value
        this.next = null
    }
}

class _SinglyLinkedList {
    list: any
    tail: _Node
    constructor() {
        this.list = null
        this.tail = null
    }
    add(node: _Node) {
        if (!this.list) {
            this.list = node
            this.tail = node
        }
        else {
            this.tail.next = node
            this.tail = node

        }
    }

    remove() {
        let currentNode = this.list
        let afterCurrentNode 
        while(true){
            afterCurrentNode = currentNode.next

            if(afterCurrentNode.next === null){
                currentNode.next = null
                break
            }

            if(currentNode.next === null){
                break
            }
            else{
                currentNode = currentNode.next
            }
         
        }
    }

    scan() {
        let currentNode = this.list
        
        while(true){
            console.log(currentNode.value)

            if(currentNode.next === null){
                break
            }
            else{
                currentNode = currentNode.next
            }
         
        }
    }

}

const list1 = new _SinglyLinkedList()

const node1 = new _Node(7)
const node2 = new _Node(3)
const node3 = new _Node(1)



list1.add(node1)
list1.add(node2)
list1.add(node3)

list1.remove()
list1.remove()


list1.scan()

export default _SinglyLinkedList

