import DaysView from './DaysView'

const TableView = Backbone.Marionette.View.extend({
  tagName: 'div',
  className: 'panel panel-primary',
  template: require('../templates/table-view-template.html'),
  regions: {
    body: {
      el: 'tbody',
      replaceElement: true
    }
  },
  onRender: function () {
    this.showChildView('body', new DaysView({ collection: this.collection }))
  }
})

export default TableView
