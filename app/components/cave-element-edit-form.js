import Ember from 'ember';

export default Ember.Component.extend({
  item: null,
  actions: {
    changeImage() {
      let $form = $('#cave-element-edit-form'),
        data = $form.serialize();

    }
  }
});
