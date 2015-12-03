import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('bot', params.bot_id);
  },
  actions: {
    error(reason) {
      alert(`Can't find bot because of: ${reason}`); // "FAIL"

      // Can transition to another route here, e.g.
      // this.transitionTo('index');

      // Uncomment the line below to bubble this error event:
      // return true;
      this.transitionTo('bots');
    }
  }
});
