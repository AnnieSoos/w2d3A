// At the question marks, fill in on of the options: transform, select, reduce, map, or filter
route.map(), route.filter(), route.reduce()

/* var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]


 */
 var route1 = [2.1, 3.5, 0.3, 5.2]

 function kilometerToMile(km) {
   return km / 1.6
 }

const mile = route1.map(route => route1*1.6);
console.log(mile)

 function routeInMiles(route) {
   // rewrite ...
   var res = []
   for (var i = 0; i < route.length; i++) { // iterate
     var mile = kilometerToMile(route[i]) // ? ..., ? ...
     res[i] = mile                        // keep
   }
   return res
 }

const longroutes = route1.map(route => route>2);

console.log(longroutes)

 // test
 console.log(JSON.stringify(routeInMiles(route1)))

 function longStretches(route) {
   // rewrite ...
   var res = []
   for (var i = 0; i < route.length; i++) { // iterate
     var stretch = route[i]               // ? ...
     if (stretch > 2) {                   // check
       res.push(stretch)                // keep
     }
   }
   return res
 }

 // test
 console.log(JSON.stringify(longStretches(route1)))


 function total(route) {
   // rewrite ...
   var res = 0
   for (var i = 0; i < route.length; i++) { // iterate
     res += route[i]                      // ? ..., ? ...
   }
   return res
 }
 

 // test
 console.log(total(route1) === 11.1)
