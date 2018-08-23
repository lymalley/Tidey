{
  /*
const time = require('time')
const nowTime = new time()
nowTime.setTimeZone



function today() {
  const now = new Date()
  const dd = now.getDate()
  const mm = now.getMonth() + 1
  const yyyy = now.getFullYear()
  if (dd < 10) {
    ;`0${dd}`
  }
  if (mm < 10) {
    ;`0${mm}`
  }
  return `${yyyy}/${mm}/${dd}`
}

export default today





*/
}

const now = new Date()
const today = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`

export default today
