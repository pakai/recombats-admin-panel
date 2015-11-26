import Ember from 'ember';

export default Ember.Component.extend({
  item: null,
  actions: {
    changeImage() {
      let imageEl = document.getElementById('cave-element-edit-form-image-file'),
        imageFile = imageEl.files && imageEl.files[0];

      var reader = new FileReader();
      reader.onload = (evt) => {
        let imageDataURL = evt.target.result,
          //remove data url start like data:image/gif;base64,
          //remove untill "," character
          imagePureData =  imageDataURL.slice(imageDataURL.indexOf(',') + 1);
        this.item.set('binaryImage', imagePureData);
        this.item.save().then(() => {
          this.item.notifyPropertyChange('img');
        });
      };
      reader.readAsDataURL(imageFile);
    }
  }
});
