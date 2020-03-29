// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
  let distance = 42 - pickup
  return Math.abs(distance)
}

function distanceFromHqInFeet(distance) {
  let distanceInFeet = Math.abs(distanceFromHqInBlocks(distance)) * 264;
  return distanceInFeet
}

function distanceTravelledInFeet(){
  
}