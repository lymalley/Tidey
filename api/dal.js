const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
const { map, prop } = require('ramda')

const COUCHDB_SERVER = process.env.COUCHDB_SERVER
const COUCHDB_DBNAME = process.env.COUCHDB_DBNAME
const DB_URL = `${COUCHDB_SERVER}${COUCHDB_DBNAME}`

const db = new PouchDB(DB_URL)
const { getAllDocs } = require('./lib/dal-helper')

const getActivities = () => {
  const options = {
    include_docs: true,
    startkey: 'activity_',
    endkey: 'activity_\ufff0'
  }

  return db.allDocs(options).then(res => map(prop('doc'), res.rows))
}

const getActivity = id => db.get(id)

const getBoats = () => {
  const options = {
    include_docs: true,
    startkey: 'boat_',
    endkey: 'boat_\ufff0'
  }
  return db.allDocs(options).then(res => map(prop('doc'), res.rows))
}

const getBoat = id => db.get(id)

const getCrew = () => {
  const options = {
    include_docs: true,
    startkey: 'crew-member_',
    endkey: 'crew-member_\ufff0'
  }
  return db.allDocs(options).then(res => map(prop('doc'), res.rows))
}

const getCrewMember = id => db.get(id)

const getMaintenances = () => {
  const options = {
    include_docs: true,
    startkey: 'maintenance_',
    endkey: 'maintenance_\ufff0'
  }
  return db.allDocs(options).then(res => map(prop('doc'), res.rows))
}

const getMaintenance = id => db.get(id)

const getReminders = () => {
  const options = {
    include_docs: true,
    startkey: 'reminder_',
    endkey: 'reminder_\ufff0'
  }
  return db.allDocs(options).then(res => map(prop('doc'), res.rows))
}

const getReminder = id => db.get(id)

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
  getReminder
}
