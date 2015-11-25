import DS from 'ember-data';
import CaveModelMixin from '../mixins/cave-model';

export default DS.Model.extend(CaveModelMixin, {
  level: DS.attr('number'),
  map: DS.attr('string'),
  align: DS.attr('number')
});
