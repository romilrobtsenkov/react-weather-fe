export const removeEmpty = obj => {
  Object.keys(obj).forEach(key => obj[key] == null && delete obj[key])
  return obj
}

export const getTempString = (temp, units, round) => {
  let postfix = 'C'
  if (units === 'F') {
    temp = (temp * 9 / 5) - 459.67
    postfix = 'F'
  } else {
    temp -= 273.15
  }

  const roundTo = round || 1
  return temp.toFixed(roundTo) + ' ' + postfix
}

export const getSpeedString = (speed, units, round) => {
  let postfix = 'm/s'
  if (units === 'F') {
    speed = speed * 2.23694
    postfix = 'm/h'
  }

  const roundTo = round || 1
  return speed.toFixed(roundTo) + ' ' + postfix
}
