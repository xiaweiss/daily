console.log('sync1');

// setTimeout 1
setTimeout(function () {
    console.log('setTimeout1')
}, 0);

var promise = new Promise(function (resolve, reject) {
    // setTimeout 2
    setTimeout(function () {
        console.log('setTimeoutPromise')
    }, 0);
    console.log('promise');
    resolve();
});

// 微任务
promise.then(() => {
    console.log('pro_then');
    // setTimeout 4
    setTimeout(() => {
        console.log('pro_timeout');
    }, 0)
})

// setTimeout 3
setTimeout(function () {
    console.log('last_setTimeout')
}, 0);
console.log('sync2');

/*
---macro js---
sync1
(setTimeout 1)
(setTimeout 2)
promise
(setTimeout 3)
sync2

---micro
pro_then
(setTimeout 4)

---macro setTimeout---
setTimeout1
setTimeoutPromise
last_setTimeout
pro_timeout

*/
