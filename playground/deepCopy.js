const deepCopy = function (input) {
  if (input instanceof Array) {
    let output = []
    for (let i=0; i< input.length; i+=1) {
      output[i] = deepCopy(input[i])
    }
    console.log(output)
    return output

  } else if (input instanceof Object) {
    let output = {}
    for (let i in input) {
      output[i] = deepCopy(input[i])
    }
    console.log(output)
    return output

  } else {
    console.log(input)
    return input
  }
}

const a = [0, [1, 2], {c: null}, null]

const b = deepCopy(a)
console.log(b)
