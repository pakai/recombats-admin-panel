import Ember from 'ember';

export default Ember.Component.extend({
  onImageSelected: function(file) {
    console.log(file);
  }
});
