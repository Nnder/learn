const tree = {
    left: {
        value: 3,
        left: {
            value: 5,
        },
        rigth: {
            value: 7,
        },
    },
    value: 1,
    rigth: {
        value: 2,
        left: {
            value: 4,
        },
        rigth: {
            value: 6,
        },
    },
}


function sumTree(tree){
    if(tree.value){
        return tree.value + sumTree(tree.rigth ? tree.rigth: 0) + sumTree(tree.left ? tree.left: 0)
    } else {
        return 0;
    }
}

console.log(sumTree(tree))


