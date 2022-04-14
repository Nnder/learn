window.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    let textNodes = [];
    //рекурсия
    function recursy (element){
        // все потомки body
        element.childNodes.forEach(node => {
            // если <div> есть еще <div> и тд то он доходит до конца
           if (node.nodeName.match(/^H\d/)){
               const obj = {
                   header: node.nodeName,
                   content: node.textContent
               };
               textNodes.push(obj);
               // помещаем в ноду все что нашли
               //textNodes.push(node.textContent);
           } else {
               recursy(node);
           }
        });
    }
    // именно с этого элемента все и начнеться
    recursy(body);
    console.log(textNodes);
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(textNodes)
    })
        .then(response => response.json())
        .then(json => console.log(json));
});

//node.trim()