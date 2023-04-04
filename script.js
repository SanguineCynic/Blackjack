window.onload = function(){

  var hand = document.getElementById('hand')
  var dealer = document.getElementById('dealer')
  var interface = document.getElementById('ifc')
  var hitbtn = interface.getElementsByTagName('button')[0]
  var staybtn = interface.getElementsByTagName('button')[1]
  var score = []
  var dealerscore = []
  var handArray = []
  var dealerArray = []
  var status = document.getElementById("statusdiv")

// Deck
  var card_template = ['2_of_clubs', '2_of_diamonds', '2_of_hearts', '2_of_spades', '3_of_clubs', '3_of_diamonds', '3_of_hearts', '3_of_spades', '4_of_clubs', '4_of_diamonds', '4_of_hearts', '4_of_spades', '5_of_clubs', '5_of_diamonds', '5_of_hearts', '5_of_spades', '6_of_clubs', '6_of_diamonds', '6_of_hearts', '6_of_spades', '7_of_clubs', '7_of_diamonds', '7_of_hearts', '7_of_spades', '8_of_clubs', '8_of_diamonds', '8_of_hearts', '8_of_spades', '9_of_clubs', '9_of_diamonds', '9_of_hearts', '9_of_spades', '10_of_clubs', '10_of_diamonds', '10_of_hearts', '10_of_spades', 'king_of_clubs', 'king_of_diamonds', 'king_of_hearts', 'king_of_spades', 'queen_of_clubs', 'queen_of_diamonds', 'queen_of_hearts', 'queen_of_spades', 'jack_of_clubs', 'jack_of_diamonds', 'jack_of_hearts', 'jack_of_spades', 'ace_of_clubs', 'ace_of_diamonds', 'ace_of_hearts', 'ace_of_spades']
  var current_deck = []
// This is so the deck starts off as full and is capable of being reset back to a default
  for (let i = 0; i < card_template.length; i++) {
    current_deck.push(card_template[i])
  }

  function reset(){
    if (hand.style.visibility == 'hidden'){
      hand.style.visibility = 'visible'
    }
    else{
      hand.style.visibility = 'hidden'
    }
  }

  function draw(playerhand, playerscore, htmlhand){
    if (playerscore.reduce((a, b) => a + b, 0) < 21){
      //Generate number between 1 and 52
      let randN = Math.random()
      let drawIndex = Math.floor(randN * current_deck.length)

      //Add card to hand
      playerhand.push(current_deck[drawIndex])
      let addCard = document.createElement("img")
      addCard.src = "../Cards/cards/PNG-cards-1.3/" + current_deck[drawIndex] +".png"
      htmlhand.appendChild(addCard)

      //Prevent duplicates once drawn
      current_deck.splice(current_deck.indexOf(current_deck[drawIndex]),1)

      //Points system
      let cardval = current_deck[drawIndex].split("_")[0]
      switch(cardval){
        case "king":
            cardval = 10
            break
        case "queen":
            cardval = 10
            break
        case "jack":
            cardval = 10
            break
        case "ace":
            cardval = 10
            break
      }

      playerscore.push(parseInt(cardval))
      console.log(playerscore)
      if (playerscore.reduce((a, b) => a + b, 0) > 21){
        // status.innerHTML = "<h3> Failure </h3>"
        // reset()
        window.alert(">21")
      }
      else if(playerscore.reduce((a, b) => a + b, 0) == 21){
        status.innerHTML = "<h3> Blackjack! </h3>"
      }

  }
}

  function hit(playerhand, playerscore, htmlhand){
    hand.style.visibility = "visible"
    draw(playerhand, playerscore, htmlhand)
    }

  function stay(){
    if (score < 21){
      //Generate number between 1 and 52
      let randN = Math.random()
      let drawIndex = Math.floor(randN * current_deck.length)

      //Add card to hand1
      handArray.push(current_deck[drawIndex])
      let addCard = document.createElement("img")
      addCard.src = "../Cards/cards/PNG-cards-1.3/" + current_deck[drawIndex] +".png"
      hand.appendChild(addCard)

      //Prevent duplicates once drawn
      current_deck.splice(current_deck.indexOf(current_deck[drawIndex]),1)

      //Points system
      let cardval = current_deck[drawIndex].split("_")[0]
      switch(cardval){
        case "king":
            cardval = 10
            break
        case "queen":
            cardval = 10
            break
        case "jack":
            cardval = 10
            break
        case "ace":
            cardval = 10
            break
      }
  }
}

  hitbtn.addEventListener("click",function(){
    // console.log("hit")
    hit(handArray, score, hand)

  })

  reset()
  // stay()

}

// setTimeout(function() {
//     b = a + 4;
// }, (3 * 1000));
//
// const arr = [1, 2, 3, 4];
// const sum = arr.reduce((a, b) => a + b, 0);
