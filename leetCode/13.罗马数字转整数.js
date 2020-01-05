/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */
/**
 * @param {string} s
 * @return {number}
 */


var romanToInt = function(s) {
    const roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    // 转为数组后，再将每个字母转为对应的数值
    const result = s.split('').map((val, i, arr) => {
        // 处理特殊情况
        // I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
        // X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
        // C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
        switch(val + arr[i+1]) {
            case 'IV':
            case 'IX':
                return -1;
            case 'XL':
            case 'XC':
                return -10;
            case 'CD':
            case 'CM':
                return -100;
        }

        return roman[val]
    })

    // 各项相加
    let sum = 0
    for (let n of result) {
        sum += n
    }
    return sum
};

console.log(romanToInt('III')) // 3
console.log(romanToInt('IV')) // 4
console.log(romanToInt('IX')) // 9
console.log(romanToInt('LVIII')) // 58
console.log(romanToInt('MCMXCIV')) // 1994

// TODO


