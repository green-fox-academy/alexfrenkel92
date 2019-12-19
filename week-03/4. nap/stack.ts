'user strict';

function removeOtherHalfFromPile(pile, sock) {
    let newPile = [];
    let otherPairIndex = getIndexOfOtherPair(pile, sock);
    for (let i = 0; i < pile.length; i++) {
      if (i !== otherPairIndex) {
        newPile.push(pile[i]);
      }
    }
    return newPile;
  }
  
  function getIndexOfOtherPair(pile, sock) {
    for (let i = 0; i < pile.length; i++) {
      if (pile[i] === sock) {
        return i;
      }
    }
  }
  
  function doTheShitAfterLaundry() {
    let sock = 'blue';
    let sockPile = ['red', 'red', 'purple', 'blue', 'red'];
    let newPile = removeOtherHalfFromPile(sockPile, sock);
    console.log(newPile); // 'red', 'red', 'purple', 'red'
  }
  
  doTheShitAfterLaundry();