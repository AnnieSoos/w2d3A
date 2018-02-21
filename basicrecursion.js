function fac(n) {
  var res = 1
  while (n > 1) {
    res *= n
    n -= 1
  }

  return res
}

console.log(fac(10))


function factorial(numbers) {
  if (numbers <=1) return 1
  return numbers*factorial(numbers-1)
}

console.log(factorial(6))
