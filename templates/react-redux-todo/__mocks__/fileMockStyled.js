const handler = {
    get(target, prop) {
        let value = target[prop]
        if (value) {
            if (typeof value === 'object') {
                return new Proxy(s => s, handler)
            }
            return s => s;
        }
        return new Proxy(s => s, handler);
    },
}

const proxyObject = new Proxy(s => s, handler);

module.exports = proxyObject;