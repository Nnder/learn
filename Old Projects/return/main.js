// у всех обьектов в js есть конструкторы
// у этих конструкторов есть тоже в свою очередь конструкторы
c=`constructor`
// в данном случае c будет являться обьектом
// у этого обьекто будет конструктор
// добавим ещё один конструктор и получим конструктор конструктора строки
// он являеьться функцией и если в аргументе этой функции передать какойто код то он будет выполнен
// в результате получаем анонимную функцию которая будет выполнять код заданный в аргументе этого конструктора

console.log(c[c][c](`f=()=>2*5`));

b=
`\
c\
o\
n\
s\
t\
r\
u\
c\
t\
o\
r`

b[
b]
[b
](
`f
=(
)\
=>
'\
h\
e\
l\
l\
o\
,\
 \
w\
o\
r\
l\
d\
!\
'`
)(
)




