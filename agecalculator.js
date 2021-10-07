var ageCalculator = function(name, yearOfBirth, currentYear)
{
  if (currentYear > yearOfBirth)
  {
    var age = currentYear - yearOfBirth;
  }

  else
  {
    "pls enter correct values"
  }
  return name + " is " + age + " years old.";
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));