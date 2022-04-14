function countPositivesSumNegatives (n) {

    if (n == [] || n == false){
        return []
    } else {
        return [n.filter((n) => n > 0).length, n.filter((n) => n < 0).reduce((acc,n) => acc + n)]
    }

}

function sumMix(x){
    return x.map(n => Number(n)).reduce((acc, n) => acc + n);
}


function getPlanetName(id){
    switch(id){
        case 1: return 'Mercury'
        case 2: return 'Venus'
        case 3: return 'Earth'
        case 4: return 'Mars'
        case 5: return 'Jupiter'
        case 6: return 'Saturn'
        case 7: return 'Uranus'
        case 8: return 'Neptune'
    }
}

switchItUp=n=>["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]





var min = function(list){

    return Math.min(list);
}

var max = function(list){

    return Math.max(list);
}


let sumArray = (arr) =>
    (arr == null || arr.length <= 1 || arr == [] ? 0 : (arr.reduce((acc, n) => acc + n) - Math.min(...arr) - Math.max(...arr)));



String.prototype.isUpperCase = function() {
    return this == this.toUpperCase()
}
String.prototype.isUpperCase=function() {return this==this.toUpperCase()}



var moveZeros = function (arr) {
    let zero = arr.length - arr.filter( n => n !== 0).length;
    arr = arr.filter( n => n !== 0);
    for (let i = 0; i < zero; i++){
        arr.push(0);
    }
    return arr
}

function usdcny(usd) {
    usd = usd*675/100;
    return usd.toFixed(2) + ' Chinese Yuan';
}

const quarterOf = (month) => [1,1,1,1,2,2,2,3,3,3,4,4,4][month]


function correct(string) {
    return [...string].map(a => ({'0':'O','5':'S','1':'I'})[a]||a).join('')
}

function removeEveryOther(arr){
    return arr.forEach((n,i) => i % 2 !==0 );
}

function howMuchILoveYou(nbPetals) {
    // your code
}

console.log(Math.pow(2,2));



function alphabetPosition(text) {
    return text.toLowerCase()
        .split('')
        .filter(c => c.charCodeAt(0) < 123 && c.charCodeAt(0) > 96)
        .map(c => c.charCodeAt(0) - 96)
        .join(' ');
}


function alphabetPosition(text) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';

    return text.toLowerCase()
        .split('')
        .filter(t => letters.indexOf(t) > -1)
        .map(t => letters.indexOf(t)+1 || '')
        .join(' ');
}

function alphabetPosition(text) {
    return text.toLowerCase().split('').map(a => a.charCodeAt(0) - 96).filter(a => a > 0 && a < 27).join(' ');
}




function pigIt(str){
    //Code here
    return str.replace(/\b(\w)(\w*)\b/g,"$2$1ay");
}


function pigIt(str){
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}


function digital_root(n) {
    if (n < 10) return n;  return digital_root(
        n.toString().split('').reduce((acc, d) => {
            return acc + +d;
        },0));
}



