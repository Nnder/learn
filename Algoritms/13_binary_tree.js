class BinaryTree {
    constructor(){
        this.root = null
    }

    add(value){
        if(!this.root){
            this.root = new TreeNode(value)
        } else {
            let node = this.root;
            let newNode = new TreeNode(value);
            while(node) {
                if(value > node.value){
                    if(!node.rigth){
                        break
                    }
                    node = node.rigth
                } else {
                    if(!node.left){
                        break
                    }
                    node = node.left
                }
            }
            if(value > node.value){
                node.rigth = newNode
            } else{
                node.left = newNode
            }
        }
    }

    print(root = this.root){
        if(!root){
            return true;
        }
        console.log(root.value)
        this.print(root.left)
        this.print(root.rigth)
    }
}


class TreeNode {
    constructor(value){
        this.value = value;
        this.left = null;
        this.rigth = null;
    }
}


const tree = new BinaryTree();

tree.add(5);
tree.add(4);
tree.add(11);
tree.add(56);
tree.add(5);
tree.add(4);
tree.add(7);
tree.add(10);
tree.print()