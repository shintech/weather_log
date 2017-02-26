import DayView from './DayView'

const DaysView = Backbone.Marionette.CollectionView.extend({
  tagName: 'tbody',
  childView: DayView
})

export default DaysView
