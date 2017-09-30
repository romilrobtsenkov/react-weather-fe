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

const iconMap = {
  '01': { desc: 'clear sky', d: 'wi-day-sunny', n: 'wi-night-clear' },
  '02': { desc: 'few clouds', d: 'wi-day-cloudy', n: 'wi-night-alt-cloudy' },
  '03': { desc: 'scattered clouds', d: 'wi-cloud', n: 'wi-cloud' },
  '04': { desc: 'broken clouds', d: 'wi-cloudy', n: 'wi-cloudy' },
  '09': { desc: 'shower rain', d: 'wi-showers', n: 'wi-showers' },
  '10': { desc: 'rain', d: 'wi-day-rain', n: 'wi-night-alt-rain' },
  '11': { desc: 'thunderstorm', d: 'wi-thunderstorm', n: 'wi-thunderstorm' },
  '13': { desc: 'snow', d: 'wi-snow', n: 'wi-snow' },
  '50': { desc: 'mist', d: 'wi-windy', n: 'wi-windy' }
}

export const getIconClass = (code) => {
  const mainIconKey = code.substring(0, 2)
  const iconVersion = code.substring(2, 3)
  return 'wi ' + iconMap[mainIconKey][iconVersion]
}
