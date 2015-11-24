import Ember from 'ember';

export default Ember.Component.extend({
  name: '',
  items: [],
  visibleItems: Ember.computed('name', 'items', function() {
    return this.get('items').filter(item => item.get('name') && item.get('name').toLowerCase().indexOf(this.get('name').toLowerCase()) !== -1);
  })
});
