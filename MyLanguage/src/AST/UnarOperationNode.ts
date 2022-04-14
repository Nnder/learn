import Token from "../Token";
import ExpreesionNode from "./ExpressionNode";

export default class UnarOperationNode {
    operator: Token;
    operand: ExpreesionNode;

    constructor(operator: Token, operand: ExpreesionNode){
        this.operator = operator;
        this.operand = operand;
    }
}