import Token from "../Token";
import ExpreesionNode from "./ExpressionNode";

export default class VariableNode extends ExpreesionNode {
    variable: Token;

    constructor(variable: Token) {
        super();
        this.variable = variable;
    }
}