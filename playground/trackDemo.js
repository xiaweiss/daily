input =
`Writing Fast Tests Against Enterprise Rails 60min
Overdoing it in Python 45min
Lua for the Masses 30min
Ruby Errors from Mismatched Gem Versions 45min
Common Ruby Errors 45min
Rails for Python Developers lightning
Communicating Over Distance 60min
Accounting-Driven Development 45min
Woah 30min
Sit Down and Write 30min
Pair Programming vs Noise 45min
Rails Magic 60min
Ruby on Rails: Why We Should Move On 60min
Clojure Ate Scala (on my project) 45min
Programming in the Boondocks of Seattle 30min
Ruby vs. Clojure for Back-End Development 30min
Ruby on Rails Legacy App Maintenance 60min
A World Without HackerNews 30min
User Interface CSS in Rails Apps 30min`

// AM 9 - 12, PM 1-5,  Network pm 4-5
input = input.split('\n')

str = 'Lua for the Masses 30min'

m = str.match(/([0-9]+)min/)[1]

time = {h: 9, m: 0}

trackNum = 1
track = ['Track '+trackNum]

input.forEach((val, index) => {
  const min = val.match(/([0-9]+)min/) && val.match(/([0-9]+)min/)[1]

  setItem(+min || 10, val)
})

function setItem (min, val) {
  const nowTime = {...time}
  addTime(min)
  const {h, m} = time // nextTime
  // checkLaunch
  if (h === 12 && m === 0) {
    track.push(showTime(nowTime) + ' ' + val)
    track.push('12:00PM Lunch')
    time.h = 13
    time.m = 0
    return
  }

  //  checkNetworking  next day
  if (h === 17 && m === 0) {
    track.push(showTime(nowTime) + ' ' + val)
    track.push(showTime(time) + ' Networking Event')
    return
  } else if ((h === 17 && m > 0) || h > 17) {
    track.push('17:00PM Networking Event')
    trackNum += 1
    track.push('Track '+ trackNum)
    time.h = 9
    time.m = 0
    setItem(min, val)
    return
  }

  track.push(showTime(nowTime) + ' ' + val)
  // console.log(index, min, {h, m}, time);
}

function addTime (min = 0) {
  if ((time.m + min) / 60 > 0) {
    time.h += parseInt((time.m + min) / 60)
    time.m = (time.m + min) % 60
  } else {
    time.m += min
  }
}

function showTime ({h, m}) {
  const hh = h.toString().length === 2 ? (+h) : ('0'+h)
  const mm = m.toString().length === 2 ? (+m) : ('0'+m)

  let ampm = hh >= 12 ? 'PM' : 'AM'

  return hh + ':' + mm + ampm
}

if (track.indexOf('Track') > track.indexOf('17:00PM')) {
  track.push('17:00PM Networking Event')
}

output = track.join('\n')


console.log(output)
