import Marionette from 'marionette'
import Controller from './controller'

const Router = Marionette.AppRouter.extend({
  initialize: function (options) {
    this.controller = new Controller({ app: options.app })
  }
})

export default Router
