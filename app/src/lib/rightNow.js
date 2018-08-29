{
  /*export const timeNow = time =>
time ? new Date(time).getHours() : new Date().getHours()*/
}

const now = new Date()
const getTime = `${now.getHours()}:${now.getMinutes()}`

export default getTime
