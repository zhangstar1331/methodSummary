Promise.prototype.all = function (promises) {
    return new Promise((resolve, reject) => {
        let count = 0;
        let result = [];
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(res => {
                count++;
                result[i] = res;
                if (count === promises.length) {
                    resolve(result);
                }
            }, err => {
                reject(err);
            })
        }
    })
}