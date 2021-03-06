export default class View {
    static colors = {
        1:'cyan',2:'blue',3:'orange',4:'yellow',5:'green',6:'purple',7:'red'
    };

    asd = 10;
    
    constructor(element, width, height, rows, colums){
        this.element = element;
        this.width = width;
        this.height = height;

        this.canvas = document.createElement('canvas');
        this.canvas.height = this.height;
        this.canvas.width = this.width;
        this.context = this.canvas.getContext('2d');

        this.element.appendChild(this.canvas)

        this.blockWidth = this.width/colums;
        this.blockHeight = this.height/rows;
    }

    render(state){
        this.clearScreen();
        this.renderPlayfield(state.playfield)
        // this.renderPanel(state);
        
    }

    clearScreen(){
        this.context.clearRect(0,0,this.width, this.height)
    }

    renderPlayfield(playfield){
        for (let y = 0; y < playfield.length; y++) {
            const line = playfield[y]
            for (let x = 0; x < line.length; x++) {
                const block = line[x]
                
                if(block){
                    this.renderBlock(x * this.blockWidth, y * this.blockHeight , this.blockWidth, this.blockHeight, View.colors[block]);
                }
            }
        }
    }

    // renderPanel({level, score, lines, nextPiece}){
    //     this.context.textAlign = 'start';
    //     this.context.textBaseline = 'top';
    //     this.context.fillStyle = 'white';
    //     this.context.font = '14px "Press Start 2P"'

    //     this.context.fillText(`Level: ${level}`,0,0)
    //     this.context.fillText(`Score: ${score}`,0,24)
    //     this.context.fillText(`Next:`,0,96);

    //     for (let y = 0; y < nextPiece.blocks.length; y++) {
    //         for (let x = 0; x < nextPiece.blocks[y].length; x++) {
    //             const block = nextPiece.blocks[y][x];
    //             if (block){
    //                 this.renderBlock(
    //                     x*this.blockWidth, y*this.blockHeight, this.blockWidth, this.blockHeight, View.colors[block]
    //                 );
    //             }
                
                
    //         }
    //     }

    // }

    renderBlock(x, y, width, height, color){
        this.context.fillStyle = color;
        this.context.strokeStyle = 'black';
        this.context.lineWidth = 2;
        this.context.fillRect(x, y , width, height);
        this.context.strokeRect(x, y , width, height);

    }
}

