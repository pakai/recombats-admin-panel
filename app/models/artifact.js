import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  type: DS.attr('number'),
  img: DS.attr('string'),
  aspect: DS.attr('number'),
  binaryImage: DS.attr('string'),
  image: Ember.computed('img', function () {
    return `http://www.recombats.com${this.get('img')}`;
  }),
  freshImage: Ember.computed('image', function () {
    return this.get('image') + '?no_cache=' + Date.now();
  })
});
