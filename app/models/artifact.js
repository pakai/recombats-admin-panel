import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  type: DS.attr('number'),
  img: DS.attr('string'),
  aspect: DS.attr('number'),
  image: Ember.computed('img', function() {
    return `http://www.recombats.com${this.get('img')}`;
  })
});
