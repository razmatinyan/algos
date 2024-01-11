/**
 * Fibonacci
 */
function fibonacci2(n) {
    if (n < 2) return 1;

    const sequence = [1, 1];
    while(sequence.length < n) {
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    }

    return sequence
}
console.log(fibonacci(8));

const fibonacci = (function () {
    const seq = [1, 1];

    return function (n) {
        if (seq.length >= n) {
            console.log('No compute');
            return seq.slice(0, n);
        }

        while (seq.length < n) {
            const last = seq[seq.length - 1];
            const prev = seq[seq.length - 2];
            seq.push(last + prev);
        }

        return seq;
    }
})();

console.log(fibonacci(10));
console.log(fibonacci(8));
console.log(fibonacci(12));

function fibonacciIterative(n) {
    if (n <= 1) {
        return n;
    }

    let fibPrev = 0;
    let fibCurr = 1;

    for (let i = 2; i <= n; i++) {
        let temp = fibCurr;
        fibCurr = fibPrev + fibCurr;
        fibPrev = temp;
    }

    return fibCurr;
}

console.log(fibonacciIterative(8));