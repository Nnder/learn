describe("pow", function() {

    it("возводит в степень n", function() {
        assert.equal(pow(2, 3), 8);
    });

    it("возводит в степень n", function() {
        assert.equal(pow(2, 4), 16);
    });

    it("возводит в степень n", function() {
        assert.equal(pow(2, 5), 32);
    });

} );

describe("pow2", function() {

    describe("возводит x в степень 3", function() {

        function makeTest(x) {
            let expected = x * x * x;
            it(`${x} в степени 3 будет ${expected}`, function() {
                assert.equal(pow(x, 3), expected);
            });
        }

        for (let x = 1; x <= 5; x++) {
            makeTest(x);
        }

    });

    // ... другие тесты. Можно писать и describe, и it блоки.
});


describe("pow3", function() {

    // ...

    it("для отрицательных n возвращает NaN", function() {
        assert.isNaN(pow(2, -1));
    });

    it("для дробных n возвращает NaN", function() {
        assert.isNaN(pow(2, 1.5));
    });

});



