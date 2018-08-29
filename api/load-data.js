require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))

const COUCHDB_SERVER = process.env.COUCHDB_SERVER
const COUCHDB_DBNAME = process.env.COUCHDB_DBNAME
const DB_URL = `${COUCHDB_SERVER}${COUCHDB_DBNAME}`

const db = new PouchDB(DB_URL)

db.bulkDocs([
  {
    _id: 'activity_orange-crush_2018-08-06T13:00:00-4:00',
    type: 'activity',
    date: '2018-08-06',
    startTime: '14:00:00-5:00',
    endTime: '16:00:00-5:00',
    boat: [{ boatId: 'boat_orange-crush', boatName: 'Orange Crush' }],
    engineHoursStart: 2136.5,
    engineHoursEnd: 2138.6,
    tripType: 'parasail',
    cruiseFrom: 'IOP',
    cruiseTo: 'ATL',
    passengerCount: 11,
    captain: [
      {
        crewMemberId: 'crew-member_malley-michael',
        firstName: 'Michael',
        lastName: 'Malley'
      }
    ],
    mate: [
      {
        crewMemberId: 'crew-member_melin_matt',
        firstName: 'Matt',
        lastName: 'Melin'
      }
    ],
    other: null,
    tripNotes: '37, chute - vents open',
    images: null,
    enteredBy: 'MCM'
  },
  {
    _id: 'boat_orange-crush',
    type: 'boat',
    name: 'Orange Crush',
    image: '',
    boatMake: 'Commercial Water Sport',
    boatModel: '31',
    boatYear: 2010,
    lengthFt: 31,
    beamFt: 10.5,
    hullMaterial: 'FRP',
    numOfEngines: 1,
    engine1MakeModel: 'Volvo Penta D-6 330 Diesel',
    additionalInfo: 'Parasail Boat'
  },
  {
    _id: 'crew-member_malley-michael',
    type: 'crew member',
    firstName: 'Michael',
    lastName: 'Malley',
    image: null,
    title: 'Captain',
    email: 'malley33@gmail.com',
    phoneNumber: '843-901-4696'
  },
  {
    _id: 'crew-member_melin-matt',
    type: 'crew member',
    firstName: 'Matt',
    lastName: 'Melin',
    image: null,
    title: null,
    email: null,
    phoneNumber: '843-478-2423'
  },
  {
    _id: 'crew-member_fiem-mark',
    type: 'crew member',
    firstName: 'Mark',
    lastName: 'Fiem',
    image: null,
    title: 'Captain',
    email: null,
    phoneNumber: '843-296-3836'
  },

  {
    _id: 'maintenance_2018-08-06_orange-crush_oil-change',
    type: 'maintenance',
    date: '2018-08-06',
    boat: [{ boatId: 'boat_orange-crush', boatName: 'Orange Crush' }],
    serviceType: 'Oil Change',
    performedBy: [
      {
        crewMemberId: 'crew-member_fiem_mark',
        firstName: 'Mark',
        lastName: 'Fiem'
      }
    ],
    location: 'IOP',
    engineHours: [
      {
        activityID: 'activity_orange-crush_2018-08-06T13:00:00-4:00',
        engineHoursEnd: 2138.6
      }
    ],
    materials: [
      {
        partNumber: 1234,
        name: 'Racor Filter',
        qty: 6,
        from: 'Jerrys',
        priceEach: 24.99
      },
      {
        partNumber: 987,
        name: 'Spark Plugs',
        qty: 16,
        from: 'Amazon',
        priceEach: 1.49
      }
    ],
    totalCost: 220.0,
    comments: null,
    images: null,
    reminderCreated: true,
    reminder: [
      {
        dueAtHours: 2400,
        hrsBefore: 10
      }
    ],
    enteredBy: 'MAF'
  },
  {
    _id: 'reminder_orange_crush_oil_change_2400',
    type: 'reminder',
    alertAt: 2390,
    maintenanceId: 'maintenance_2018-08-06_orange-crush_oil-change',
    boatId: 'boat_orange-crush',
    boat: 'Orange Crush',
    service: 'Oil Change',
    dueAtHours: 2400,
    hrsBefore: 10,
    completed: false
  }
])
  .then(result => console.log('success', JSON.stringify(result, null, 2)))
  .catch(err => console.log('err', err))
