import Token from "../Token";
import ExpreesionNode from "./ExpressionNode";

export class BinOperatinoNode extends ExpreesionNode {
    operator: Token;
    leftNode: ExpreesionNode;
    rightNode: ExpreesionNode;

    constructor(operator: Token, leftNode: ExpreesionNode, rightNode: ExpreesionNode){
        super();
        this.operator = operator;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
    }
}