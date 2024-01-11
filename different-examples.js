function sum(n) {
    console.log(n);
    return function (a) {
        return sum(a + n);
    }
}

sum(5)(4);

function mergeSameKeysOfObjects(obj1, obj2) {
    for (const key in obj1) {
        if (obj2.hasOwnProperty(key)) { // or obj2[key]
            obj1[key] = obj2[key];
        }
    }
    return obj1
}

console.log(mergeSameKeysOfObjects(
    { foo: 'foo', bar: 'bar' },
    { bar: 'foo', some: 'some' }
));

function groupBy(array, cb) {
    const result = {};
    for (let i = 0; i < array.length; i++) {
        const current = array[i];
        const key = typeof cb === 'function' ? cb(current) : current[cb];
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(current);
    }
    return result;
}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
console.log(groupBy([6.1, 4.2, 6.3], Math.ceil));
console.log(groupBy(['one', 'two'], 'length'));

// 
Function.prototype.delay = function (ms) {
    return (...args) => {
        setTimeout(() => {
            // this.call(this, ...args);
            this.apply(this, args);
        }, ms);
    }
}

const START = Date.now();

function someFn() {
    console.log('time', Date.now() - START);
    console.log(arguments);
}

const f = someFn.delay(500);
f('arg1', 'arg2', 1, 2);

// Algo
const tree = [
    {
        v: 5,
        c: [
            {
                v: 10,
                c: [
                    {
                        v: 11,
                    }
                ]
            },
            {
                v: 7,
                c: [
                    {
                        v: 5,
                        c: [
                            {
                                v: 1
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        v: 5,
        c: [
            {
                v: 10
            },
            {
                v: 15
            }
        ]
    }
];

const recursive = (tree) => {
    let sum = 0;
    tree.forEach(node => {
        sum += node.v;
        if (!node.c) return node.v;
        sum += recursive(node.c);
    });
    return sum;
}

const iteration = (tree) => {
    if (!tree.length) return 0;
    let sum = 0;
    let stack = [];
    tree.forEach(node => stack.push(node));
    while (stack.length) {
        let node = stack.pop();
        sum += node.v;
        if (node.c) node.c.forEach(n => stack.push(n));
    }
    return sum;
}

console.log(recursive(tree));
console.log(iteration(tree));