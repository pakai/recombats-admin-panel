import Ember from 'ember';

export default Ember.Component.extend({
  item: null,
  actions: {
    changeImage() {
      let imageEl = document.getElementById('cave-element-edit-form-image-file'),
        imageFile = imageEl.files && imageEl.files[0];

      var reader = new FileReader();
      reader.onload = (evt) => {
        this.item.set('binaryImage', evt.target.result);
        this.item.save().then(() => {
          this.item.propertyDidChange('img');
        });
      };
      reader.readAsBinaryString(imageFile);
    }
  }
});
