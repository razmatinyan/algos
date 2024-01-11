/**
 * Custom Bind
 */
Function.prototype.myBind = function(context, ...args) {
    return (...rest) => {
        return this.call(context, ...args.concat(rest));
    }
}

function log(...props) {
    console.log(this.name, this.age, ...props);
}

const obj = {
    name: 'Razo',
    age: 20
}

log.myBind(obj, 1, 2)('rest elems');