import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  type: DS.attr('number'),
  img: DS.attr('string'),
  level: DS.attr('number'),
  map: DS.attr('string'),
  align: DS.attr('number'),
  image: Ember.computed('img', function() {
    return `http://www.recombats.com${this.get('img')}`;
  })
});
