var howManyHundreds = function(num)
{ 
  var mul = 0;
  var kal = num % 100;
  if ( kal == 0)
  {
    mul = num / 100;
  }

  else
  {
    mul = (num / 100) - (kal / 100);
  }
  return mul;
}

console.log(howManyHundreds(22));