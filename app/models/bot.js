import DS from 'ember-data';
import CaveModelMixin from '../mixins/cave-model';

export default DS.Model.extend(CaveModelMixin, {
  level: DS.attr('number'),
  map: DS.attr('string', { defaultValue: '' }),
  align: DS.attr('number', { defaultValue: 0 }),
  hp: DS.attr('number'),
  stats: DS.attr('string', { defaultValue: '' }),
  adds: DS.attr('string', { defaultValue: '' }),
  priems: DS.attr('string', { defaultValue: '' }),
  sex: DS.attr('number', { defaultValue: 0 }),
  clan: DS.attr('number', { defaultValue: 0 }),
  izlom: DS.attr('number', { defaultValue: 0 })
});
