import Day from '../models/Day'

const Days = Backbone.Collection.extend({
  model: Day,
  url: 'http://shintech.ninja:8000/api/days'
})

export default Days
