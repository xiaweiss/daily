
const req = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('data')
    }, 1000)
})

const get = async () => {
    // const res = await req()
    // return res
    return undefined
}

const run = async () => {
    try {
        const res = await get()
        console.log('ok', res)
        return res
    } catch (error) {
        console.log('fail', error)
        return error
    }
}

const r = run().then((res) => console.log(res))
