import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('artifact', params.artifact_id);
  },
  actions: {
    error(reason) {
      alert(`Can't find artifact because of: ${reason}`); // "FAIL"

      // Can transition to another route here, e.g.
      // this.transitionTo('index');

      // Uncomment the line below to bubble this error event:
      // return true;
      this.transitionTo('artifacts');
    }
  }
});
