const urlEncode = function(text) {

  var kal = "";

  for(let i = 0; i < text.length; i++)
  {
    
    if(text[i] === " ")
    {
      kal += "%20"
    }

    else
    {
      kal += text[i];
    }

  }
  return kal;
  // Put your solution here
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));