import Ember from 'ember';

export default Ember.Component.extend({
  item: null,
  parentRouteName: '',
  sectionName: '',
  accept: '',
  error: false,
  isArtifact: Ember.computed('sectionName', function () {
    return this.get('parentRouteName') === 'artifacts';
  }),
  isBot: Ember.computed('sectionName', function () {
    return this.get('parentRouteName') === 'bots';
  }),
  uploadImage: function (imageFile) {
    var reader = new FileReader();
    reader.onload = (evt) => {
      let imageDataURL = evt.target.result,
      //remove data url start like data:image/gif;base64,
      //remove untill "," character
        imagePureData = imageDataURL.slice(imageDataURL.indexOf(',') + 1);
      this.item.set('binaryImage', imagePureData);
      this.item.save().then(() => {
        this.item.notifyPropertyChange('img');
      });
    };
    reader.readAsDataURL(imageFile);
  },
  actions: {
    uploadLocalImage() {
      let imageEl = document.getElementById('cave-element-edit-form-image-file'),
        imageFile = imageEl.files && imageEl.files[0];

      this.uploadImage(imageFile);
    },
    uploadRemoteImage(imageURL) {
      if (imageURL) {
        this.item.set('binaryImage', imageURL);
        this.item.save().then(() => {
          this.item.notifyPropertyChange('img');
        });
      }
    },
    save() {
      this.set('error', false);

      this.item.save().then(savedItem => {
        if (this.parentRouteName && savedItem) {
          this.container.lookup('controller:application').transitionToRoute(savedItem.get('constructor.modelName'), savedItem);
        }
      }).catch((response) => {
        this.set('error', response&& response.get('Error') || true);
      });
    }
  }
});
