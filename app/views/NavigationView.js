import Backbone from 'backbone'

const NavigationView = Backbone.Marionette.View.extend({
  tagName: 'nav',
  className: 'navbar navbar-inverse',
  initialize: function (options) {
    this.title = options.title
  },
  template: require('../templates/navigation-view-template.html'),
  serializeData: function () {
    return {
      'title': this.title
    }
  }
})

export default NavigationView
