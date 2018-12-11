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
            card.img = "/cards/" + name1[n] + suits[s] + ".jpg"
            card.suits = suits[s];
            deck.push(card);
    }
}
console.log(deck);



var dealButton = document.getElementById('deal-button');
    dealButton.addEventListener("click", function() {

        card.img = deck.pop()
        card.img = deck.push()

        var dealerHand = document.getElementById('dealer-hand');
        var img = document.createElement('img');
        img.setAttribute('src', assignImgUrl)
            // img.setAttribute('src', 'cards/2C.jpg');
            // console.log(img);
            dealerHand.append(img);

        var playerHand = document.getElementById('player-hand');
        var img = document.createElement('img');
            img.setAttribute('src', 'cards/2C.jpg');
            // console.log(img);
            playerHand.append(img);
    });
    // buttons.appendChild(dealButton);

function assignImgUrl() {
    return card.img
}