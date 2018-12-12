var deck = [];
var suits = ["H", "D", "C", "S"];
var name1 = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

// console.log(name1);
var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

for (var s = 0; s < suits.length; s++) {
    for (var n = 0; n < name1.length; n++) {
        var card = {};
            card.name = name1[n];
            console.log(name1[1])
            card.points = values[n];
            card.img = "./cards/" + name1[n] + suits[s] + ".jpg"
            card.suits = suits[s];
            deck.push(card);
    }
}
console.log(deck);


// Deal button
dealerCards = []
playerCards = []

var dealButton = document.getElementById('deal-button');
    dealButton.addEventListener("click", function() {
        // dealerCards
        var card1 = deck.pop()
        var card1_img = getCardImgUrl(card1)
        dealerCards.push(card1)

        // console.log(card1_img)

        var card2 = deck.pop()
        var card2_img = getCardImgUrl(card2)
        card2 = dealerCards.push(card2)

        // playerCards
        var card3 = deck.pop()
        var card3_img = getCardImgUrl(card3)
        card3 = playerCards.push(card3)

        // console.log(card3_img)

        var card4 = deck.pop()
        var card4_img = getCardImgUrl(card4)
        card4 = playerCards.push(card4)

        var dealerHand = document.getElementById('dealer-hand');
        var img = document.createElement('img');
        var img2 = document.createElement('img');
            img.setAttribute('src', card1_img);
            img2.setAttribute('src', card2_img);
            // img.setAttribute('src', card2_img);
            // img.setAttribute('src', 'cards/2C.jpg');
            // console.log(img);
            // console.log(img2);
            dealerHand.append(img);
            dealerHand.append(img2);

        var playerHand = document.getElementById('player-hand');
        var img3 = document.createElement('img');
        var img4 = document.createElement('img');
            img3.setAttribute('src', card3_img);
            img4.setAttribute('src', card4_img);
            // img.setAttribute('src', card4_img);
            // console.log(img3);
            // console.log(img4);
            playerHand.append(img3);
            playerHand.append(img4);
    });
    // buttons.appendChild(dealButton);


// Step 5: Hit button
var hitButton = document.getElementById('hit-button');
    hitButton.addEventListener("click", function() {

        var card5 = deck.pop()
        var card5_img = getCardImgUrl(card5)
        card5 = playerCards.push()

        var playerHand = document.getElementById('player-hand');
        var img5 = document.createElement('img');
            img5.setAttribute('src', card5_img);
            // img.setAttribute('src', card4_img);
            // console.log(img5);
            playerHand.append(img5);
    })

// Step 7: Deal the deck
function getCardImgUrl(card) {
    return card.img
}

// Step 8: Calculate points

function calculatePoints(playerPoints) {
    var playerPoints = 0;
        for(var i = 0; i < playerCards.length; i++) {
            card = playerCards[i];
            var point = card.points;
            playerPoints += point;
            // playerPoints = playerPoints + point
        }   return playerPoints;
}  
console.log(calculatePoints());

// Step 9: Shuffle the deck
// function shuffleArray(array) {
//     for (var i = array.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
//     return array;
// }