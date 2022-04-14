

let observer = new MutationObserver((mutation)=>{
    console.log(mutation)
    console.log('was changed')
});

observer.observe(document.body, {
    childList: true, // наблюдать за непосредственными детьми
    subtree: true, // и более глубокими потомками
    characterDataOldValue: true // передавать старое значение в колбэк
});

// config – это объект с булевыми параметрами «на какие изменения реагировать»:

// childList – изменения в непосредственных детях node,
// subtree – во всех потомках node,
// attributes – в атрибутах node,
// attributeFilter – массив имён атрибутов, чтобы наблюдать только за выбранными.
// characterData – наблюдать ли за node.data (текстовое содержимое),

// И ещё пара опций:

// characterDataOldValue – если true, будет передавать и старое и новое значение node.data в колбэк (см далее), иначе только новое (также требуется опция characterData),
// attributeOldValue – если true, будет передавать и старое и новое старое значение атрибута в колбэк (см далее), иначе только новое (также требуется опция attributes).


console.log(observer);

//Метод, останавливающий наблюдение за узлом:
observer.disconnect()

let mutationRecords = observer.takeRecords();
// получает список необработанных записей изменений, которые произошли, но колбэк для них ещё не выполнился.


// Объекты MutationRecord имеют следующие свойства:

//     type – тип изменения, один из:
//         "attributes" изменён атрибут,
//         "characterData" изменены данные elem.data, это для текстовых узлов
//         "childList" добавлены/удалены дочерние элементы,
//     target – где произошло изменение: элемент для "attributes", текстовый узел для "characterData" или элемент для "childList",
//     addedNodes/removedNodes – добавленные/удалённые узлы,
//     previousSibling/nextSibling – предыдущий или следующий одноуровневый элемент для добавленных/удалённых элементов,
//     attributeName/attributeNamespace – имя/пространство имён (для XML) изменённого атрибута,
//     oldValue – предыдущее значение, только для изменений атрибута или текста, если включена соответствующая опция attributeOldValue/characterDataOldValue.



let range = new Range();

//В основе выделения лежит Range – диапазон. Он представляет собой пару «граничных точек»: начало и конец диапазона.

//Каждая точка представлена как родительский DOM-узел с относительным смещением от начала. 
//Если этот узел – DOM-элемент, то смещение – это номер дочернего элемента, а для текстового узла смещение – позиция в тексте. Скоро будут примеры.




range.setStart(p, 0) //– устанавливает начало диапазона на нулевом дочернем элементе тега <p> (Это текстовый узел "Example: ").
range.setEnd(p, 2) //– расширяет диапазон до 2го (но не включая его) дочернего элемента тега <p> (это текстовый узел " and ", 
                      // но так как конец не включён, последний включённый узел – это тег <i>).


alert(range); // Example: italic

  document.getSelection().addRange(range);

// Затем мы установим границы выделения, используя range.setStart(node, offset) и range.setEnd(node, offset).
// Не обязательно использовать один и тот же элемент в setStart и setEnd. 
// Диапазон может охватывать множество не связанных между собой элементов. Важно лишь чтобы конец шёл после начала.
// выделим текст частично

range.setStart(p.firstChild, 2);
range.setEnd(p.querySelector('b').firstChild, 3);

window.getSelection().addRange(range);



// Существует множество удобных методов для манипулирования диапазонами.

// Установить начало диапазона:

    // setStart(node, offset) установить начальную границу в позицию offset в node
    // setStartBefore(node) установить начальную границу прямо перед node
    // setStartAfter(node) установить начальную границу прямо после node

// Установить конец диапазона (похожи на предыдущие методы):

    // setEnd(node, offset) установить конечную границу в позицию offset в node
    // setEndBefore(node) установить конечную границу прямо перед node
    // setEndAfter(node) установить конечную границу прямо после node

// Как было показано, node может быть как текстовым узлом, так и элементом: для текстовых узлов offset пропускает указанное количество символов, в то время как для элементов – указанное количество дочерних узлов.

// Другие:

    // selectNode(node) выделить node целиком
    // selectNodeContents(node) выделить всё содержимое node
    // collapse(toStart) если указано toStart=true, установить конечную границу в начало, иначе установить начальную границу в конец, схлопывая таким образом диапазон
    // cloneRange() создать новый диапазон с идентичными границами

// Чтобы манипулировать содержимым в пределах диапазона:

    // deleteContents() – удалить содержимое диапазона из документа
    // extractContents() – удалить содержимое диапазона из документа и вернуть как DocumentFragment
    // cloneContents() – склонировать содержимое диапазона и вернуть как DocumentFragment
    // insertNode(node) – вставить node в документ в начале диапазона
    // surroundContents(node) – обернуть node вокруг содержимого диапазона. Чтобы этот метод сработал, диапазон должен содержать как открывающие, так и закрывающие теги для всех элементов внутри себя: не допускаются частичные диапазоны по типу <i>abc.




document.getSelection()

// Основные свойства выделения:

//     anchorNode – узел, с которого начинается выделение,
//     anchorOffset – смещение в anchorNode, где начинается выделение,
//     focusNode – узел, на котором выделение заканчивается,
//     focusOffset – смещение в focusNode, где выделение заканчивается,
//     isCollapsed – true, если диапазон выделения пуст или не существует.
//     rangeCount – количество диапазонов в выделении, максимум 1 во всех браузерах, кроме Firefox.

// Существуют события, позволяющие отслеживать выделение:
// elem.onselectstart – когда с elem начинается выделение, например пользовать начинает двигать мышкой с зажатой кнопкой. 


// Методы Selection для добавления и удаления диапазонов:

//     getRangeAt(i) – взять i-ый диапазон, начиная с 0. Во всех браузерах, кроме Firefox, используется только 0.
//     addRange(range) – добавить range в выделение. Все браузеры, кроме Firefox, проигнорируют этот вызов, если в выделении уже есть диапазон.
//     removeRange(range) – удалить range из выделения.
//     removeAllRanges() – удалить все диапазоны.
//     empty() – сокращение для removeAllRanges.

// Также существуют методы управления диапазонами выделения напрямую, без обращения к Range:

//     collapse(node, offset) – заменить выделенный диапазон новым, который начинается и заканчивается на node, на позиции offset.
//     setPosition(node, offset) – то же самое, что collapse (дублирующий метод-псевдоним).
//     collapseToStart() – схлопнуть (заменить на пустой диапазон) к началу выделения,
//     collapseToEnd() – схлопнуть диапазон к концу выделения,
//     extend(node, offset) – переместить фокус выделения к данному node, с позиции offset,
//     setBaseAndExtent(anchorNode, anchorOffset, focusNode, focusOffset) – заменить диапазон выделения на заданные начало anchorNode/anchorOffset и конец focusNode/focusOffset. Будет выделено всё содержимое между этими границами
//     selectAllChildren(node) – выделить все дочерние узлы данного узла node.
//     deleteFromDocument() – удалить содержимое выделения из документа.
//     containsNode(node, allowPartialContainment = false) – проверяет, содержит ли выделение node (частично, если второй аргумент равен true)

// Так что для многих задач мы можем вызывать методы Selection, не обращаясь к связанному объекту Range.


let promise = new Promise((resolve, reject)=>{
  //fetch.mutationRecords(url);
  new Promise((_,reject)=> setTimeout(reject,3000))
})


function* gen(){
  try{
    choice = yield "Its time to choose"
  }
  catch(e){
    choice = e
  }

  yield choice
}

let test = gen()
console.log(test.next())
console.log(test.next(123))
console.log(test.next())

// document.querySelector("#test");

let test2 = gen()
console.log(test2.next())
console.log(test2.throw("12332132"))
console.log(test2.next())



function tested(){
  return new Promise(function(resolve, reject){
    if(test.next().value){
      resolve()
    }
  })
}

async function qqs(b){
  for await (q of b){
    
  }
}

