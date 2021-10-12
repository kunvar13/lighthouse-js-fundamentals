var judgeVegetable = function(vegetables, metric)
{
  var high = 0;
  var index = 0;
  for(var i = 0; i < vegetables.length; i++)
  {
    if(vegetables[i][metric] > high)
    {
      high = vegetables[i][metric];
      index = i
    }
  }
  return vegetables[index].submitter;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]


const metric = 'redness'
console.log(judgeVegetable(vegetables, metric));
