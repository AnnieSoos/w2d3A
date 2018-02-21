function fac(n) {
  var res = 1
  while (n > 1) {
    res *= n
    n -= 1
  }

  return res
}

fac(10)

function fib(n) {
  if (n <= 1) return n             // check if done
  return fib(n - 1) + fib(n - 2)   // smaller n, working towards done
}

fib(11)

function fib(n) {
  if (n <= 1) return n             // check if done
  return fib(n - 1) + fib(n - 2)   // smaller n, working towards done
}

console.log('golden ratio:', fib(13) / fib(12))



/*  Functions that recurse must do two things
check if it is done
call itself with a changed parameters, working towards done

Or written in math: F(n) = F(n - 1) + F(n - 2)*/
