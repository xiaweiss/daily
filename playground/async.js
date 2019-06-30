// function sleep (s) {
//     return new Promise(resolve => setTimeout(resolve, s * 1000));
// }

// async function run () {
//     console.log('green')
//     await sleep(3)

//     console.log('yellow')
//     await sleep(1)

//     console.log('red')
//     await sleep(2)

// }

function light(status, wait) {
    console.log(status);
    return new Promise(reslove => setTimeout(reslove, wait * 1000));
}

async function run () {
    while(true) {
        await light('green', 3)
        await light('yellow', 1)
        await light('red', 2);
    }
}

run()
