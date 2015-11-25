import DS from 'ember-data';
import CaveModelMixin from '../mixins/cave-model';

export default DS.Model.extend(CaveModelMixin, {
  aspect: DS.attr('number')
});
