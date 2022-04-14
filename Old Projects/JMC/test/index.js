const assert = chai.assert;

// Convert IP string to number
//   ip <string> - IP address
// Returns: <number>

const ipToInt = ip => {
    if (typeof(ip) !== 'string') throw Error('String expected ');
    if (ip === '') throw Error('Empty is not allowed ');

    const parts = ip.split('.');
    if (parts.length !== 4) throw Error('Wrong IPv4 format ');

    const nums = parts.map(n => parseInt(n, 10));
    if (nums.includes(NaN)) throw Error('Wrong IPv4 format ');

    return nums.reduce((res, item) => (res << 8) + item);
};

// Tests


describe('Convert IP string', function() {
    describe('#1 IP to number', function() {
        it('LocalHost', function() {
            const n = ipToInt('127.0.0.1');
            assert.equal(n, 2130706433);
        });
        it('PrivateNetwork', function() {
            const n = ipToInt('10.0.0.1');
            assert.equal(n, 167772161);
        });
        it('Negative', function() {
            const n = ipToInt('192.168.1.10');
            assert.equal(n, -1062731510);
        });
        it('FourZeros', function() {
            const n = ipToInt('0.0.0.0');
            assert.equal(n, 0);
        });
        it('WrongString', function() {
            const n = ipToInt('wrong-string');
            assert.equal(n, Number.NaN);
        });
        it('EmptyString', function() {
            const n = ipToInt('');
            assert.equal(n, 0);
        });
        it('FourEights', function() {
            const n = ipToInt('8.8.8.8');
            assert.equal(n, 0x08080808);
        });
    });

    describe('#2 IP to number', function() {
        const tests = [
            ['127.0.0.1',        2130706433,  'Localhost IP address'  ],
            ['10.0.0.1',          167772161,  'Single class A network'],
            ['192.168.1.10',    -1062731510,  'Negative number'       ],
            ['0.0.0.0',                   0,  'Four zeros'            ],
            ['255.255.255.255',          -1,  'Four 255'              ],
            ['8.8.8.8',          0x08080808,  'Four eights'           ],
        ];

        for (const test of tests){
            const [par, expected, name] = test;

            it(name, function() {
                assert.equal(ipToInt(par), expected);
            });
        }
    });

    describe('#3 IP to number', function() {
        const rightTests = [
            ['127.0.0.1',        2130706433,  'Localhost IP address'  ],
            ['10.0.0.1',          167772161,  'Single class A network'],
            ['192.168.1.10',    -1062731510,  'Negative number'       ],
            ['0.0.0.0',                   0,  'Four zeros'            ],
            ['255.255.255.255',          -1,  'Four 255'              ],
            ['8.8.8.8',          0x08080808,  'Four eights'           ],
        ];

        const tests = [
            ['127.0.0.1',        2130706432,  'Localhost IP address'  ],
            ['10.0.0.1',          167772160,  'Single class A network'],
            ['192.168.1.10',    -1062731511,  'Negative number'       ],
            ['0.0.0.0',                   1,  'Four zeros'            ],
            ['255.255.255.255',          -1,  'Four 255'              ],
            ['8.8.8.8',          0x08080808,  'Four eights'           ],
        ];

        const results = [];
        for (const test of tests) {
            const [par, expected, name] = test;
            const result = ipToInt(par);
            try {
                it(name, function() {
                    assert.equal(ipToInt(par), expected, `Error in test "${name}"`);
                });
            } catch (err) {
                const { message, operator } = err;
                results.push({ message, par, expected, result, operator });
            }
        }
        console.table(results);
    });
});
