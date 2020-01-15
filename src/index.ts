
import './styles.css';
import { getRandomInt } from './math';


// 1. find the valuable things

const secretNumber = getRandomInt(1, 9);
const squares = document.querySelectorAll('.square') as NodeListOf<HTMLDivElement>;


let currentSquare = 1;
squares.forEach(sq => {
    if (currentSquare === secretNumber) {
        sq.dataset.secret = 'true';
    }

    currentSquare++;
    sq.addEventListener('click', handleClick);
});

function handleClick() {
    const that = this as HTMLDivElement;
    const isWinner = this.dataset.secret === 'true';
    if (isWinner) {
        that.classList.add('winner');
    } else {
        that.classList.add('loser');

    }
    that.removeEventListener('click', handleClick);

}

// once you win, all the other guessed should be marked as loserss
// may be make a play again button that resets everything.
// if you win, display a message telling them how awesome they are.
// if they lose (You picked every one but teh winner) they should be told they lose


