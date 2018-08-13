const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
const {
  map,
  prop,
  merge,
  not,
  isEmpty,
  split,
  propOr,
  filter
} = require('ramda')
const pkGen = require('./lib/pkGen')

const COUCHDB_SERVER = process.env.COUCHDB_SERVER
const COUCHDB_DBNAME = process.env.COUCHDB_DBNAME
const DB_URL = `${COUCHDB_SERVER}${COUCHDB_DBNAME}`

const db = new PouchDB(DB_URL)
const { getAllDocs } = require('./lib/dal-helper')

///////////////////////
///// Activities /////
//////////////////////

const getActivities = query => {
  const [key, value] = not(isEmpty(query)) ? split(':', query) : ['', '']
  return getAllDocs(db, {
    include_docs: true,
    startkey: 'activity_',
    endkey: 'activity_\ufff0'
  }).then(
    activities =>
      isEmpty(query)
        ? activities
        : filter(
            activity => contains(value, propOr('', key, activity)),
            activities
          )
  )
}

const getActivity = id => db.get(id)

const addActivity = activity => {
  const newActivity = merge(activity, {
    _id: pkGen('activity_', `${activity.date}T${activity.startTime}`),
    type: 'activity'
  })
  return db.put(newActivity)
}

const updateActivity = id => db.put(id)

const deleteActivity = id => db.remove(id)

///////////////////////
/////    Boats   /////
//////////////////////

const getBoats = query => {
  const [key, value] = not(isEmpty(query)) ? split(':', query) : ['', '']
  return getAllDocs(db, {
    include_docs: true,
    startkey: 'boat_',
    endkey: 'boat_\ufff0'
  }).then(
    boats =>
      isEmpty(query)
        ? boats
        : filter(boat => contains(value, propOr('', key, boat)), boats)
  )
}

const getBoat = id => db.get(id)

const addBoat = boat => {
  const newBoat = merge(boat, {
    _id: pkGen('boat_', boat.name),
    type: 'boat'
  })
  return db.put(newBoat)
}

const updateBoat = id => db.put(id)

const deleteBoat = id => db.remove(id)

///////////////////////
/////    Crew    /////
/////////////////////

const getCrew = query => {
  const [key, value] = not(isEmpty(query)) ? split(':', query) : ['', '']
  return getAllDocs(db, {
    include_docs: true,
    startkey: 'crew-member_',
    endkey: 'crew-member_\ufff0'
  }).then(
    crew =>
      isEmpty(query)
        ? crew
        : filter(
            crewMember => contains(value, propOr('', key, crewMember)),
            crew
          )
  )
}

const getCrewMember = id => db.get(id)

const addCrewMember = crewMember => {
  const newCrewMember = merge(crewMember, {
    _id: pkGen(
      'crew-member_',
      `${crewMember.lastName}-${crewMember.firstName}`
    ),
    type: 'crew member'
  })
  return db.put(newCrewMember)
}

const updateCrewMember = id => db.put(id)

const deleteCrewMember = id => db.remove(id)

/////////////////////////
///// Maintenances /////
///////////////////////

const getMaintenance = id => db.get(id)

const getMaintenances = query => {
  const [key, value] = not(isEmpty(query)) ? split(':', query) : ['', '']
  return getAllDocs(db, {
    include_docs: true,
    startkey: 'maintenance_',
    endkey: 'maintenance_\ufff0'
  }).then(
    maintenances =>
      isEmpty(query)
        ? maintenances
        : filter(
            maintenance => contains(value, propOr('', key, maintenance)),
            maintenances
          )
  )
}

const addMaintenance = maintenance => {
  const newMaintenance = merge(maintenance, {
    _id: pkGen(
      'maintenance_',
      `${maintenance.date}-${maintenance.boat.boatName}-${
        maintenance.serviceType
      }`
    ),
    type: 'maintenance'
  })
  return db.put(newMaintenance)
}

const updateMaintenance = id => db.put(id)

const deleteMaintenance = id => db.remove(id)

////////////////////////
/////  Reminders  /////
//////////////////////

const getReminders = query => {
  const [key, value] = not(isEmpty(query)) ? split(':', query) : ['', '']
  return getAllDocs(db, {
    include_docs: true,
    startkey: 'reminder_',
    endkey: 'reminder_\ufff0'
  }).then(
    reminders =>
      isEmpty(query)
        ? reminders
        : filter(
            reminder => contains(value, propOr('', key, reminder)),
            reminders
          )
  )
}

const getReminder = id => db.get(id)

const addReminder = reminder => {
  const newReminder = merge(reminder, {
    _id: pkGen(
      'reminder_',
      `${reminder.boatName}-${reminder.service}-${reminder.dueAtHours}`
    ),
    type: 'reminder'
  })
  return db.put(newReminder)
}

const updateReminder = id => db.put(id)

const deleteReminder = id => db.remove(id)

module.exports = {
  getActivities,
  getBoats,
  getCrew,
  getMaintenances,
  getReminders,
  getActivity,
  getBoat,
  getCrewMember,
  getMaintenance,
  getReminder,
  addActivity,
  addBoat,
  addCrewMember,
  addMaintenance,
  addReminder,
  updateActivity,
  updateBoat,
  updateCrewMember,
  updateMaintenance,
  updateReminder,
  deleteActivity,
  deleteBoat,
  deleteCrewMember,
  deleteMaintenance,
  deleteReminder
}
