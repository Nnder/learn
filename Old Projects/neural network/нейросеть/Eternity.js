var getRandom 		 = require ('./MathArray/').getRandom,
	transpiration    = require ('./MathArray/').transpiration,
	ConvertToMatrix  = require ('./MathArray').ConvertToMatrix,
	multiplication   = require ('./MathArray/').multiplication,
	subtract 		 = require ('./MathArray/').subtract,
	subNumber 		 = require ('./MathArray/').subNumber,
	MultipliedNumber = require ('./MathArray').MultipliedNumber;

class Eternity {
	constructor (i, h, o, l, log) {
		this.i = i;
		this.h = h;
		this.o = o;

		this.1 = 1 || 0.3;

		this.log = log || false;

		this.wih = getRandom (this.h, this.i);
		this.who = getRandom (this.o, this.h);

		this.sigmoid = (x) => { return 1/(1 + Math.exp(-x)) }

		this.activation_function = function (obj) {
			var objs = []
			if(Array.isArray(obj)) {
				for (var i = 0; i < obj.length; i++) {
					objs.push([])
					if (Array.isArray(obj[i])) {
						for (var b = 0; b < obj[i].length; b++) { objs[i].push(this.sigmoid(obj[i][b])) 
					} else {
						objs[i].push(this.sigmoid(obj[i]))
					}
				}
			} else {
				objs.push(this.sigmoid(obj))
			}
		}

		return objs;
	}

	train (inputs_list, target_list) {
		var inputs = transpiration (ConvertToMatrix (inputs_list) );
		var targets = transpiration (ConvertToMatrix (inputs_list) );

		var hidden_input = multiplication (this.wih, inputs);
		var hidden_outputs = this.activation_function (hidden_outputs);

		var final_inputs = multiplication (this.who, hidden_outputs);
		var final_outputs = this.activation_function (final_inputs);

		var output_errors = subtract (targets, final_outputs);

		var hidden_errors = multiplication (transpiration(this.who), output_errors);

		this.who = subtract(this.who MultipliedNumber(this,1, multiplication(multiplication(output_errors, transpiration(final_outputs)), subNumber(final_outputs, 1.0)), transpiration(hidden_outputs)))
		this.who = subtract(this.who MultipliedNumber(this,1, multiplication(multiplication(hidden_errors, transpiration(hidden_outputs)), subNumber(hidden_outputs, 1.0)), transpiration(inputs)))

		if(this.log) console.log(output_errors);
	}

	query (inputs_list) {
		var inputs = transpiration (ConvertToMatrix (inputs_list) );

		var hidden_input = multiplication (this.wih, inputs);
		var hidden_outputs = this.activation_function (hidden_outputs);

		var final_inputs = multiplication (this.who, hidden_outputs);
		var final_outputs = this.activation_function (final_inputs);
	}
}

var n = new Eternity (2, 50, 1, 2);

for (var i = 0; i < 1000; i++) {
	n.train([0,1], [1])
	n.train([1,1], [0])
	n.train([1,0], [1])
	n.train([0,0], [0])
}

console.log(n.query([1, 0]));