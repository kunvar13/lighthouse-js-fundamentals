const instructorWithLongestName = function(instructors) {

  let high = 0;
  let num = 0;
 
   for(var i = 0; i < instructors.length; i++)
   {
       if(instructors[i].name.length > high)
       {
         high = instructors[i].name.length;
         index = i
       }
     
   }
   return instructors[index];
 };
 
 console.log(instructorWithLongestName([
   {name: "Samuel", course: "iOS"},
   {name: "Jeremiah", course: "Web"},
   {name: "Ophilia", course: "Web"},
   {name: "Donald", course: "Web"}
 ]));
 console.log(instructorWithLongestName([
   {name: "Matthew", course: "Web"},
   {name: "David", course: "iOS"},
   {name: "Domascus", course: "Web"}
 ]));