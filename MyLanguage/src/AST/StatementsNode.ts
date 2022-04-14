import ExpreesionNode from "./ExpressionNode";

export default class StatementsNode extends ExpreesionNode {
    codeStrings: ExpreesionNode[] = [];

    addNode(node: ExpreesionNode){
        this.codeStrings.push(node);
    }
}