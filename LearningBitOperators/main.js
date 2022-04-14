import Bitwise from "./src/Bitwise.js";
import View from "./src/View.js";

let position = document.querySelector("#example");

let bit = new Bitwise(5);
let view = new View(position, bit);
view.generate();