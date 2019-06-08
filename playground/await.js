
let time = 0

const req = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('res ok', time)
        time += 1;
        if (time === 3) {
            resolve({processStatus: 'SUCCESS'})
        }
        resolve({processStatus: 'PROCESS'})
    }, 1000)
})

const wait1s = () => new Promise(resolve => {
    setTimeout(() => resolve(), 1000)
})
const get = async () => {
    await wait1s()
    const res = await req()
    return res
    // return undefined
}

const roundRobin = async (params) => {
    const repayInfo = await req(params);
    if (repayInfo.processStatus === 'SUCCESS') {
        return repayInfo;
    } else if (repayInfo.processStatus === 'PROCESS') {
        // setTimeout(() => , 1000);
        // setTimeout(async () => {
            const res = await roundRobin(params);
            return res;
        // }, 500);
    }
    console.log('FAIL');
    return Promise.reject();
};

const run = async () => {
    let res = null
    try {
        res = await get()
        console.log('res', res);
        return res
    } catch (error) {
        console.log('fail', error)
        return error
    }
}

run()