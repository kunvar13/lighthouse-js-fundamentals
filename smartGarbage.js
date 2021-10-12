
    var bin = {
      //bin1: 'waste',
      //bin2: 'recycling',
      //bin3: 'compost',
      waste: 0,
      recycling: 0,
      compost: 0
    }

var smartGarbage = function(trash,bin)
{


    if(trash === 'waste')
    {
      bin.waste++;
    }

    else if(trash === 'recycling')
    {
      bin.recycling++;
    }

    else if(trash === 'compost')
    {
      bin.compost++;
    }
    else
    {
        console.log("Invalid i/p")

    }
return bin;
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));