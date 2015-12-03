import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.createRecord('bot');
  },
  actions: {
    newItemSaved: function(savedItem) {
      this.transitionToRoute('bot', savedItem);
    }
  }
});
