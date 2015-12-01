import Ember from 'ember';

export default Ember.Component.extend({
  item: null,
  field: '',
  label: '',
  textarea: false,
  caption: Ember.computed('label', 'field', function () {
    return this.get('label') || this.get('field').capitalize();
  })
});
