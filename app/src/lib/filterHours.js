

const checkHours = reminderHours(dispatch , getState) => {
    const reminderHours =getState().reminderHours.alertAt

    const compareHours = compose(
        Map(propEq('name')),
        map ()
}