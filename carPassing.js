var cars = [
  {
    time: 1568329654807,
    speed: 40
  },
  {
    time: 1568329821632,
    speed: 42
  },
  {
    time: 1568331115463,
    speed: 35
  }
]
var carPassing = function(cars, speed)
{
  var ncar = [];
  if (speed >= 0)
  {
    ncar = {time: Date.now(), speed: speed}
    cars.push(ncar)
  }

  else{
    "enter valid speed"
  }

  return cars;

}


const speed = 38

console.log(carPassing(cars, speed));