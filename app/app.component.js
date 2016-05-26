(function(app) {
  app.AppComponent = ng.core
    .Component({
      selector: 'py-app',
      template: '<input-form></input-form>',
      directives: [app.FormComponent]
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
