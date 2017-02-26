import Marionette from 'marionette'
import Days from './collections/Days'
import TableView from './views/TableView'

const Controller = Marionette.Object.extend({
  initialize: function (options) {
    this.app = options.app
    this.days = new Days()
    this.days.fetch({
      success: function () {
        console.log('Successfully fetched days...')
      }
    })
    this.tableView = new TableView({ collection: this.days })
    this.app.view.showChildView('main', this.tableView)
  }
})

export default Controller
