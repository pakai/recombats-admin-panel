import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('cave-element-edit-form', 'Integration | Component | cave element edit form', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{cave-element-edit-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#cave-element-edit-form}}
      template block text
    {{/cave-element-edit-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
