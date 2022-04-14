function q(str) {
// make the string lowercase because we are case insensitive
    str = str.toLowerCase();

// put the string into an array
    let arrayOfCharacters = str.split("");

//count the x's
    let countX = arrayOfCharacters.reduce(function (n, val) {
        return n + (val === 'x');
    }, 0);

// count the o's
    let countO = arrayOfCharacters.reduce(function (n, val) {
        return n + (val === 'o');
    }, 0);

// do these numbers match? if so return true and if not return false
    if (countX == countO) {
        return true;
    } else {
        return false;
    }
}