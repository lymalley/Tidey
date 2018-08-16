import {equals} from 'ramda'

export default (engineHours) => (dispatch , getState) => {
    const activityEngineHrs = getState().currentActivity.engineHoursEnd
    const

    if 
}

import {} from 'ramda'

export const matchingReminder = (reminder, activity) => {
  allPass(prop('boatId', reminder), prop ('boatId', activity)) && gte(('engineHoursEnd', activity), ('alertAt', reminder))
}
return alert('Boat is due for a service')





const reminderData = [{boatName: 'Orange Crush', engineHours: 2900}]
const activityData = [{boatName: 'Orange Crush', engineHours: 2893}]
const reminderBefore =10
function sendAlert (x, y, z) {
  if (x.boatName === y.boatName && (x-z) <= y) {
    return alert(`Your Service for ${y.boatName} is due`)
  } 
  return
}
sendAlert(reminderData, activityData, reminderBefore)

