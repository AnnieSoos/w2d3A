// At the question marks, fill in on of the options: transform, select, reduce, map, or filter
route.map(), route.filter(), route.reduce()

/* var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
 */


var route1 = [2.1, 3.5, 0.3, 5.2] // a route of different stretches in kilometers

var distance1 = route1[0]               // ? ...
var distance1InMiles = distance1 / 1.6  // ? ...

// what does this function do? ...
function kilometerToMile(km) {
  return km / 1.6
}

route=[1,2,3,4,5,6,7,8]
// what does this function do? ...
function total(route) {
  var res = 0
  for (var i = 0; i < route.length; i++) { // iterate
    res += route[i]                      // ? ..., ? ...
  }
  return res
}

// what does this function do? ...
function routeInMiles(route) {
  var res = []
  for (var i = 0; i < route.length; i++) { // iterate
    var mile = kilometerToMile(route[i]) // ? ..., ? ...
    res[i] = mile                        // keep
  }
  return res
}

// what does this function do? ...
function longStretches(route) {
  var res = []
  for (var i = 0; i < route.length; i++) { // iterate
    var stretch = route[i]               // ? ...
    if (stretch > 2) {                   // check
      res.push(stretch)                // keep
    }
  }
  return res
}

// what kind of function is this? ...
function averageStretch(route) {
  var average = []
  for (var i = 0; i < route.length; i++){
    var
  }
  return average

}


function total(route) {
  var res = 0
  for (var i = 0; i < route.length; i++) { // iterate

    res = route/route.length                     // ? ..., ? ...
  }
  return res
}


console.log('average kilometers per stretch:', averageStretch(route1))

/* var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
 */
