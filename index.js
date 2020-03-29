// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
  let distance = 42 - pickup
  return Math.abs(distance)
}

function distanceTravelledInFeet(distance) {
  let blocks = distanceFromHqInBlocks(distance)
  distanceInFeet = Math.abs(blocks) * 264;
  return distanceInFeet
}
