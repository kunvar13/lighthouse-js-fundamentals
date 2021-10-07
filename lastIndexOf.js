var lastIndexOf = function(array,num)
{
  var kal = -1;
  if (array === [])
  {
    return kal;
  }

  else
  {
    for(var i = 0; i < array.length; i++)
    {
      if(array[i] === num)
      {
        kal = i;
      }
    }

  }
  return kal;
}

console.log(lastIndexOf([], 1));