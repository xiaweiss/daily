const waitSec = (sec) => new Promise(resolve => {
    setTimeout(() => resolve(), sec * 1000);
});

async function run () {
    console.log(1)
    await waitSec(2)
    console.log(2)
}


run()