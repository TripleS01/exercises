function prime(n) {
    let result = [];

    if (n < 2) {
        return "Incorrect number";
    }

    function isPrime(x) {
        if (x < 2) return false;
        for (let i = 2; i <= Math.sqrt(x); i++) {
            if (x % i === 0) return false;
        }
        return true;
    }

    for (let i = 2; i <= n; i++) {
        if (n % i === 0 && isPrime(i)) {
            result.push(i);
        }
    }

    return result;
}

console.log(prime(15));
console.log(prime(12));
console.log(prime(11));
console.log(prime(2)); 