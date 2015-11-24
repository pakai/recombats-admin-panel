import Ember from 'ember';

export default Ember.Component.extend({
  item: null,
  actions: {
    save() {
      this.item.save();
    }
  }
});
