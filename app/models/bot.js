import DS from 'ember-data';
import CaveModelMixin from '../mixins/cave-model';

export default DS.Model.extend(CaveModelMixin, {
  level: DS.attr('number'),
  map: DS.attr('string'),
  align: DS.attr('number'),
  hp: DS.attr('number'),
  stats: DS.attr('string'),
  adds: DS.attr('string'),
  priems: DS.attr('string'),
  sex: DS.attr('number'),
  clan: DS.attr('number'),
  izlom: DS.attr('number')
});
