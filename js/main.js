/*----- constants -----*/
const WIN_AUDIO = new Audio('audio/mixkit-animated-small-group-applause-523.wav');
const LOSE_AUDIO = new Audio('audio/mixkit-losing-bleeps-2026.wav');
const CORRECT_AUDIO = new Audio('audio/mixkit-achievement-bell-600.wav');
const WRONG_AUDIO = new Audio('audio/mixkit-game-show-wrong-answer-buzz-950.wav');
const CARD_LOOKUP = [
    { img: "https://cdn11.bigcommerce.com/s-spem6oukby/images/stencil/1280x1280/products/123/442/AS__68652__03825.1681313264.png?c=1", matched: false },
    { img: "https://cdn11.bigcommerce.com/s-spem6oukby/images/stencil/1280x1280/products/123/446/KH__01216__30660.1681470474.png?c=1", matched: false },
    { img: "https://cdn11.bigcommerce.com/s-spem6oukby/images/stencil/80w/products/123/448/QD__14920__31462.1681313265.jpg?c=1", matched: false },
    { img: "https://cdn11.bigcommerce.com/s-spem6oukby/images/stencil/80w/products/123/447/JC__86231__74895.1681313265.jpg?c=1", matched: false },
    { img: "https://cdn11.bigcommerce.com/s-spem6oukby/images/stencil/80w/products/123/439/10H__11470__91447.1681313264.jpg?c=1", matched: false },
    { img: "https://cdn11.bigcommerce.com/s-spem6oukby/images/stencil/80w/products/123/444/3C__99122__01407.1681313264.jpg?c=1", matched: false },

];
const CARD_BACK = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqRrahdiAM-GMB5DXWUS1_-Bwj6V0CGL1K0N55gPpQvkpKZPMFQsyRXpSRFmF-0EvrhGE&usqp=CAU";

/*----- state variables -----*/
let cards;
let firstCard;
let winner;
let numRemaining;
let ignoreClicks;

/*----- cached elements  -----*/
const boardEl = document.getElementById("game-board");
const msgEl = document.querySelector('h2');
const replayBtn = document.querySelector('button');

/*----- event listeners -----*/
document.querySelector("main").addEventListener("click", handleChoice);
replayBtn.addEventListener("click", init);

/*----- functions -----*/
init();

function init() {
    cards = getShuffleCards();
    firstCard = null;
    winner = null;
    numRemaining = 10;
    ignoreClicks = false;
    render();
}

function handleChoice(evt) {
    const cardIdx = parseInt(evt.target.id);
    if (isNaN(cardIdx) || winner !== null || ignoreClicks) return;
    const card = cards[cardIdx];
    if (firstCard) {
        if (firstCard.img !== card.img || firstCard === card) {
            card.matched = true;
            --numRemaining;
            ignoreClicks = true;
            WRONG_AUDIO.play();
            setTimeout(function () {
                card.matched = false;
                firstCard = null;
                ignoreClicks = false;
                render();
            }, 1000);
        } else {
            firstCard.matched = card.matched = true;
            firstCard = null;
            CORRECT_AUDIO.play();
        }
    } else {
        firstCard = card;
    }
    winner = getWinCondition();
    render();
}

function render() {
    if (winner === null) {
        msgEl.innerHTML = `Number of Choices left : ${numRemaining}`;
    } else if (winner) {
        msgEl.innerHTML = "Congratulations, You Win!";
        WIN_AUDIO.play();
    } else {
        msgEl.innerHTML = "Too Bad...Try Again";
        LOSE_AUDIO.play();
    }
    cards.forEach(function (card, idx) {
        const imgEl = document.getElementById(`${idx}`);
        imgEl.src = (card.matched || card === firstCard) ? card.img : CARD_BACK;;
    });
    replayBtn.style.visibility = winner === null ? "hidden" : "visible";
};

function getShuffleCards() {
    let tempCard = [];
    let cards = [];
    for (let card of CARD_LOOKUP) {
        tempCard.push({ ...card }, { ...card });
    }

    while (tempCard.length) {
        let random = Math.floor(Math.random() * tempCard.length);
        let card = tempCard.splice(random, 1)[0];
        cards.push(card);
    }
    return cards;
}

function getWinCondition() {
    if (cards.every(cardsOne => cardsOne.matched)) return true;
    if (numRemaining === 0) return false;
    return null;
}
