function paramList(p = []) {
    function addZero (num, length = 4) {
        return (Array(length).join('0') + num).slice(-length);
    }

    const result = [];
    for (let i = 0; i < Math.pow(2, p.length); i++) {
        let j = addZero(i.toString(2), p.length);
        j = j.split('').map((flag, index) => {
            return flag === '1' ? '_' : p[index];
        }).join('.');
        result.push(j);
    }
    return result
}

var bar1 = paramList(['a', 'b', 'c'])

bar1