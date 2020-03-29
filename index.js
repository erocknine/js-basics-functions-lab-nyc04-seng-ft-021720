// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
  let distance = 42 - pickup
  return Math.abs(distance)
}

function distanceTravelledInFeet(start, finish) {
  let blocks = finish - start;
  distanceInFeet = Math.abs(blocks) * 264;
  return distanceInFeet
}
