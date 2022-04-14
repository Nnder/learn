import Game from './src/game.js'
import View from './src/view.js'

const element = document.querySelector('#root');

const game = new Game();
const view = new View(root,320,640,20,10);

view.render(game.getState())

document.addEventListener('keydown', (e)=>{
        switch (e.keyCode){
            case 37:
                game.movePieceLeft()
                view.render(game.getState())
                break
            case 38:
                game.rotationPiece()
                view.render(game.getState())
                break
            case 39:
                game.movePieceRight()
                view.render(game.getState())
                break
            case 40:
                game.movePieceDown()
                view.render(game.getState())
                break
        }
})

View.render(game.getState())

window.game = game;
window.view = view;