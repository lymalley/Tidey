const { compose, join, concat } = require('ramda')

module.exports = fields =>
  compose(
    concat('You are missing the following fields in your body: '),
    join(',')
  )(fields)
