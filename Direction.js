var finalPosition = function(moves)
{ 
  let y = 0;
  let x = 0;
  const direction = [];
  
  for(var i = 0; i <= moves.length; i++)
  {
    if(moves[i] === 'north')
    {
      y++;
    }
    else if (moves[i] === 'south')
    {
      y--;
    }
    else if (moves[i] === 'west')
    {
      x--;
    }
    else if (moves[i] === 'east')
    {
      x++
    }
  }
  direction[0] = x;
  direction[1] = y;
return direction;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));