var bst = (function BinarySearchTree() {
    var root = null
    var current = null
    var newNode = function(value) {
        return {
            value: value,
            left: null,
            right: null
        }
    }
    return {
    
        insertNode : function(node) {
            if(!root) {
                root = newNode(node)
                return root
            }
            current = root
            while (true) {
                if(node === current.value) { return}
                else if(node > current.value) {
                        if(!current.right) {
                            current.right = newNode(node)
                            return root
                        }
                        current = current.right
                }
                else if(node < current.value) {
                    if(!current.left) {
                        current.left = newNode(node)
                        return root
                    }
                    current = current.left
                }
            }
        },

        findNode : function(node) {
            if(!node) return
            current = root
            while(true) {
                if(!current) {
                return null
                }
                if(node === current.value){
                    return current
                }
                else if(node > current.value) {
                    current = current.right
                }
                else if(node < current.value) {
                    current = current.left
                }
            }
        },
        
        getTree : function() {
            return root
        },  
    } 
})()

bst.insertNode(10)
bst.insertNode(6)
bst.insertNode(15)
bst.insertNode(20)
bst.insertNode(8)
bst.insertNode(3)
// bst.findNode(4)
