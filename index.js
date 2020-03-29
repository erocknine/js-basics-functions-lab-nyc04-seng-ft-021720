// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
  return Math.abs(42 - pickup)
}

function distanceFromHqInFeet(distance) {
  let distanceInFeet = Math.abs(distanceFromHqInBlocks(distance)) * 264;
  return distanceInFeet
}

function distanceTravelledInFeet(loc1, loc2){
  return Math.abs(loc1 - loc2) * 264
}

function calculatesFarePrice() {
  
}