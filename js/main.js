/*----- constants -----*/
const AUDIO = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-simple-countdown-922.mp3');
const CARD_LOOKUP = [
    { img: "https://cdn11.bigcommerce.com/s-spem6oukby/images/stencil/1280x1280/products/123/442/AS__68652__03825.1681313264.png?c=1", matched: false },
    { img: "https://cdn11.bigcommerce.com/s-spem6oukby/images/stencil/1280x1280/products/123/446/KH__01216__30660.1681470474.png?c=1", matched: false },
    { img: "https://cdn11.bigcommerce.com/s-spem6oukby/images/stencil/80w/products/123/448/QD__14920__31462.1681313265.jpg?c=1", matched: false },
    { img: "https://cdn11.bigcommerce.com/s-spem6oukby/images/stencil/80w/products/123/447/JC__86231__74895.1681313265.jpg?c=1", matched: false },
    { img: "https://cdn11.bigcommerce.com/s-spem6oukby/images/stencil/80w/products/123/439/10H__11470__91447.1681313264.jpg?c=1", matched: false },
    { img: "https://cdn11.bigcommerce.com/s-spem6oukby/images/stencil/80w/products/123/444/3C__99122__01407.1681313264.jpg?c=1", matched: false },
    { img: "https://cdn11.bigcommerce.com/s-spem6oukby/images/stencil/80w/products/123/440/8S__27839__42923.1681313264.jpg?c=1", matched: false },
    // { img: "https://cdn11.bigcommerce.com/s-spem6oukby/images/stencil/960w/products/123/436/2D__57497__49826.1681470474.jpg?c=1", matched: false },
    // { img: "https://cdn11.bigcommerce.com/s-spem6oukby/images/stencil/80w/products/123/437/4H__83243__13942.1681313264.jpg?c=1", matched: false },
    // { img: "https://cdn11.bigcommerce.com/s-spem6oukby/images/stencil/80w/products/123/445/5S__90574__11272.1681313264.jpg?c=1", matched: false },
    // { img: "https://cdn11.bigcommerce.com/s-spem6oukby/images/stencil/80w/products/123/441/6D__92916__54479.1681313264.jpg?c=1", matched: false },
    // { img: "https://cdn11.bigcommerce.com/s-spem6oukby/images/stencil/80w/products/123/443/7C__93490__11317.1681313264.jpg?c=1", matched: false },

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
    cards.forEach(function(card,idx){
        
        const imgEl=document.getElementById(`cell${idx}`);
        const src=(card.matched|| card===firstCard) ? card.img:CARD_BACK ;
        imgEl.src=src;
    });
};

function getShuffleCards() {
    let tempCard = [];
    let cards = [];
    for (let card of CARD_LOOKUP) {
        tempCard.push({...card}, {...card});
    }

    while (tempCard.length) {
        let random = Math.floor(Math.random() * tempCard.length);
        let card = tempCard.splice(random, 1)[0];
        cards.push(card);
    }
    return cards;
}

