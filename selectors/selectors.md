обощенный и соседний родственный комбинатор

.class + .class{
	margin-left: 20px
}

li.active + li{
	margin-left: 20px
}

даст следующий элемент после li.active


.class ~ .class{
	margin-left: 20px
}

наследственный и потомственный комбинатор

.container-1 .button {
	
}

обращение к кнопкам в контейнере

li.active ~ li {
	
}

обращение ко всем элементам которые идут после li.active

.container-1 > .button {
	
}

кнопка должна напрямую находится в контейнере
если 1 из кнопок закинуть в див то она перестанет отображаться

универсальный селектор

* {
	
}

все стили

.container-1 * {
	
}

все элементы в контейнере

обращение по атрибутам

a[class="asd"] {
	
}

a[class$="all-links"] {
	
}
неполное окончание названия класса (все совпадения)

a[class^="all-links"] {
	
}

неполное начало названия класса (все совпадения)

a[href$=".com"]

a[class*="a-b"] {
	
}

если ли совпадения

a[class~="active"] {
	
}

несколько классов


a[class|="active"] {
	
}

находит элементы с полным совпадением или до дефиса

Псевдоклсассы и псевдоселекторы

.list .item:first-child {
	
}

.list - контекст

.list .item:not(:first-child){
	
}

not() - не

tr:nth-child(odd) // even {
	
}

nth-child() // какие элементы (четные нечетные)
nth-child(2) // любые цифры

nth-child(3n) // каждый n элемент (третий)

nth-child(3n+1) // с первого элемента


div:empty {
	
}

к пустым элементам

a:hover // при наведении
a:active // посещение ссылки

input:focus
input:checked
input:required

span:only-child{
	
}

он единственный элемент

span:first-of-type {
	
}


найти первые элементы на странице(в каждом новом элементе он ищет span)


nth-of-type(2)


div.red::before {
	content: 'Yes';	
}

вставит текст Yes перед элементом div.red

div.red::after {
	content: 'No';	
}


[data-red]{
	
}

[data-red="true"]{
	
}









selectors

input[type="checkbox"]
input[type="checkbox"]:not(checked)
a[href$=".zip"]
h3#widget-title + *
h3#widget-title ~ a
*[id|="message"]
*[id^="message-"]

ul a:last-child
ul:nth-type-off(even)

*[data-action*="delete"] // [data-action~="delete"]
*[data-action]:not([data-action*="delete"]) // [data-action]:not([data-action~="delete"])





ul + *
ul ~ :first-

li:nth-child(even)
li + li

li:nth-child(odd):not(:first-child)
