var concat = function(array1, array2)
{
  var kal = '';
  for(var i = 0; i < array2.length; i++)
  {
     kal = array2[i];
     array1.push(kal);
  }

  return array1;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]));