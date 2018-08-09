action creator - 2 API calls
post to maint
if success, post to reminders
related to the boat, service type, engine hours

2 posts when saves maint if choose to do the reminder in action creator

get maintenance items id back after and POST reminder

after add activity log, if in rance of reminder ad alert doc to db

on API side on POST to Activity Log,
Add activity to db
then still in API grab all reminders for the boat the are still relevent (not completed)
filter your reminders for that vessel , current engine hours
then if any in that array, map over the filtered reminderes and create alert objects and bulk add alert objets in db(like we added the loadData)
send alerts back down in the response to front end from API

THEN on UI side take on backside fetch if res body has alerts, dispatch them to alerts reducer in Redux
contain in alerts list page /alerts

{
\_id: 'reminder_orange_crush_oil_change_2400',
type: 'reminder',
alertAt: 2390,
info: [
{
maintenanceId: 'maintenance_2018-08-06_orange-crush_oil-change',
boat: [{ boatId: 'boat_orange-crush', boatName: 'Orange Crush' }],
service: 'Oil Change',
dueAtHours: 2400,
hrsBefore: 10,
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
completed: false
}
]
}
