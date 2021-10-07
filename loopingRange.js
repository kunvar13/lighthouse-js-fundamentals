var range = function(start, end, step)
{
  var rangeArray = [];
    if(start === undefined || end === undefined || step === undefined)
    {
      return rangeArray;
    }
  
    else if (start > end || step < 0)
    { 
      return rangeArray;
    }
  
    else
    { 
      rangeArray[0] = start;
      for(var i = start; i < end; i++)
      {
        start += step;
        if (start > end)
        {
          break;
        }
        else
        {
          rangeArray.push(start);
        }
      
      }
    }

    return rangeArray;
}

console.log(range());