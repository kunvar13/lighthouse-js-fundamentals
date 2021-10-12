const sumLargestNumbers = function(data) 
{
  let kal = data[0];
  let num = 0;
  let ind = 0;
  let num1 = 0;
    
  if(data.length === 1)
  
  {
    return "pls enter valid array"
  }
  
  else if(data.length === 2)
  
  {
      return data[0] + data[1];
  }


  for(let i = 0; i < data.length; i++)
    {
      kal = data[i];
      
      if(data[i+1] >= kal)
        {
           num = data[i + 1]
           ind = i + 1;
        }
  }

  var data1 = data.splice(ind, 1)
  //console.log(data);

  for(let i = 0; i < data.length; i++)
    {
      kal = data[i];

      if(data[i+1] >= kal)
      {
        num1 = data[i + 1]    
      }
   // console.log(num1);
  }
    
  
  // Put your solution here
  return num + num1;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));