var deck = [];
var suits = ["H", "D", "C", "S"];
var name1 = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
var playerPoints = 0
var dealerPoints = 0
// console.log(name1);
var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

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
var dealerPointsSqr = document.getElementById('dealer-points');
var playerPointsSqr = document.getElementById('player-points');
var messageDisplay = document.getElementById('messages');

var dealButton = document.getElementById('deal-button');
    dealButton.addEventListener("click", function() {
        // dealerCards
        
        var card1 = deck.pop()
        var card1_img = getCardImgUrl(card1)
        dealerPoints += card1.points;
        console.log(card1.points)
        dealerCards.push(card1)

        // console.log(card1_img)

        var card2 = deck.pop()
        var card2_img = getCardImgUrl(card2)
        dealerPoints += card2.points;
        card2 = dealerCards.push(card2)

        // playerCards
        var card3 = deck.pop()
        var card3_img = getCardImgUrl(card3)
        playerPoints += card3.points;
        card3 = playerCards.push(card3)

        // console.log(card3_img)

        var card4 = deck.pop()
        var card4_img = getCardImgUrl(card4)
        playerPoints += card4.points;
        card4 = playerCards.push(card4)

        var dealerHand = document.getElementById('dealer-hand');
        var img = document.createElement('img');
        var img2 = document.createElement('img');
            img.setAttribute('src', card1_img);
            img2.setAttribute('src', card2_img);
            dealerHand.append(img);
            dealerHand.append(img2);
            dealerPointsSqr.textContent = dealerPoints
            

        var playerHand = document.getElementById('player-hand');
        var img3 = document.createElement('img');
        var img4 = document.createElement('img');
            img3.setAttribute('src', card3_img);
            img4.setAttribute('src', card4_img);
            playerHand.append(img3);
            playerHand.append(img4);
            playerPointsSqr.textContent = playerPoints
            console.log(dealerPoints);
            console.log(playerPoints);
    });
    // buttons.appendChild(dealButton);


// Step 5: Hit button
var hitButton = document.getElementById('hit-button');
    hitButton.addEventListener("click", function() {

        var card5 = deck.pop()
        var card5_img = getCardImgUrl(card5)
    
        
        playerPoints += card5.points;
        console.log(playerPoints)
        card5 = playerCards.push(card5)
        

        var playerHand = document.getElementById('player-hand');
        var img5 = document.createElement('img');
            img5.setAttribute('src', card5_img);
            // img.setAttribute('src', card4_img);
            // console.log(img5);
            playerHand.append(img5);
            playerPointsSqr.textContent = playerPoints
            // winner()
            winOrBust()
    });

// Stand Button
var standButton = document.getElementById('stand-button');
    standButton.addEventListener("click", function () {
        while (dealerPoints < 17) {
            var card6 = deck.pop()
            var card6_img = getCardImgUrl(card6)


            dealerPoints += card6.points;
            // console.log(dealerPoints)
            card6 = playerCards.push(card6)


            var dealerHand = document.getElementById('dealer-hand');
            var img6 = document.createElement('img');
                img6.setAttribute('src', card6_img);
                // img.setAttribute('src', card4_img);
                // console.log(img5);
                dealerHand.append(img6);
                dealerPointsSqr.textContent = dealerPoints
                // winner()
                winOrBust()
        } if (dealerPoints < playerPoints)
            messageDisplay.textContent = 'Dealer busted! Player wins!'
});

// Step 7: Deal the deck
function getCardImgUrl(card) {
    return card.img
}

// Step 9: Shuffle the deck
function shuffleArray(deck) {
    for (var i = deck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    return deck;
}
shuffleArray(deck)

function winOrBust() {
    if (playerPoints == 21) {
    messageDisplay.textContent = 'Player wins!'
    } 
        else if (playerPoints > 21) {
            messageDisplay.textContent = 'Player busted! Dealer wins!'
        }
        else if (dealerPoints == 21) {
            messageDisplay.textContent = 'Dealer wins!'
            }
        else if (dealerPoints > 21) {
            messageDisplay.textContent = 'Dealer busted! Player wins!'
        }

        // else if (dealerPoints > playerPoints) {
        //     messageDisplay.textContent = 'Dealer wins!'
        // }
        // else if (playerPoints > dealerPoints) {
        //     messageDisplay.textContent = 'Player wins!'
        // }
        else if (playerPoints == dealerPoints) {
            messageDisplay.textContent = 'Draw!'
        }
}

// function winner() {
//     if (playerPoints == 21) {
//     messageDisplay.textContent = 'Player wins!'
//     } else if (dealerPoints <= 21 || dealerPoints > playerPoints) {
//             messageDisplay.textContent = 'Dealer wins!'
//         }
//         else { (playerPoints === dealerPoints) 
//             messageDisplay.textContent = 'Draw!'
//         }
// }