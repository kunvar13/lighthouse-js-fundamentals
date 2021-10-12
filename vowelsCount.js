const numberOfVowels = function(data) {
  var j = 0;
  for(var i = 0; i < data.length; i++)
  {
    let kal = data[i];
    if (kal === "a" || kal === "e" || kal === "i" || kal === "o" || kal === "u")
    {
      j++;
    }
  }
  return j;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));