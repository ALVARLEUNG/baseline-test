'use strict';

function collectSameElements(collectionA, collectionB) {
  var collectionC = [];
  for(var i = 0; i<collectionB.length; i++) {
    for (var j = 0; j<collectionA.length; j++) {
      if(collectionA[j] == collectionB[i]) {
          collectionC.push(collectionA[i]);
    }
    }
  }
  return collectionC;
}
