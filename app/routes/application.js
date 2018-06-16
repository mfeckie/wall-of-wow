import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll("appreciation");
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('showWeeknd', false)
  },
  actions: {
    clickWeeknd() {
      this.controller.toggleProperty("showWeeknd")
    }
  }
});
