// Description:
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

//My Solutions:
//1)
function countSheeps(sheep) {
    // TODO
   return sheep.filter(Boolean).length 
  }

//2)
function countSheeps2(sheep) {
    // TODO
   let filt = sheep.filter(x => x = true)
   return filt.length

  }