/*----- constants -----*/
const AUDIO = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-simple-countdown-922.mp3');
const CARD_LOOKUP = [
    { img: "https://cdn11.bigcommerce.com/s-spem6oukby/images/stencil/1280x1280/products/123/442/AS__68652__03825.1681313264.png?c=1", matched: false },
    { img: "https://cdn11.bigcommerce.com/s-spem6oukby/images/stencil/1280x1280/products/123/442/AS__68652__03825.1681313264.png?c=1", matched: false },
    { img: "https://cdn11.bigcommerce.com/s-spem6oukby/images/stencil/1280x1280/products/123/442/AS__68652__03825.1681313264.png?c=1", matched: false },
    { img: "https://cdn11.bigcommerce.com/s-spem6oukby/images/stencil/1280x1280/products/123/442/AS__68652__03825.1681313264.png?c=1", matched: false },
    { img: "https://cdn11.bigcommerce.com/s-spem6oukby/images/stencil/1280x1280/products/123/442/AS__68652__03825.1681313264.png?c=1", matched: false },
    { img: "https://cdn11.bigcommerce.com/s-spem6oukby/images/stencil/1280x1280/products/123/442/AS__68652__03825.1681313264.png?c=1", matched: false },
    { img: "https://cdn11.bigcommerce.com/s-spem6oukby/images/stencil/1280x1280/products/123/442/AS__68652__03825.1681313264.png?c=1", matched: false },
    { img: "https://cdn11.bigcommerce.com/s-spem6oukby/images/stencil/1280x1280/products/123/442/AS__68652__03825.1681313264.png?c=1", matched: false },
    { img: "https://cdn11.bigcommerce.com/s-spem6oukby/images/stencil/1280x1280/products/123/442/AS__68652__03825.1681313264.png?c=1", matched: false },
    { img: "https://cdn11.bigcommerce.com/s-spem6oukby/images/stencil/1280x1280/products/123/442/AS__68652__03825.1681313264.png?c=1", matched: false },
    { img: "https://cdn11.bigcommerce.com/s-spem6oukby/images/stencil/1280x1280/products/123/442/AS__68652__03825.1681313264.png?c=1", matched: false },
    { img: "https://cdn11.bigcommerce.com/s-spem6oukby/images/stencil/1280x1280/products/123/442/AS__68652__03825.1681313264.png?c=1", matched: false },

];

const CARD_BACK = "https://cdn11.bigcommerce.com/s-spem6oukby/images/stencil/1280x1280/products/118/398/purple_back__35358.1681245806.png?c=1";

/*----- state variables -----*/
let cards;
let firstCard;


/*----- cached elements  -----*/
const boardEl = document.getElementById("game-board");


/*----- event listeners -----*/


/*----- functions -----*/

init();


function init() {
    cards = getShuffleCards();
    firstCard = null;
    render();

}

function render() {

};

function getShuffleCards() {
    let tempCard = [];
    let cards = [];
    for (let card of CARD_LOOKUP) {
        tempCard.push(card, card);
    }

    while (tempCard.length) {
        let random = Math.floor(Math.random() * tempCard.length);
        let card = tempCard.splice(random, 1)[0];
        cards.push(cards);
    }
    return cards;
}

