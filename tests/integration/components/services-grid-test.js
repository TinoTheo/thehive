import { module, test } from 'qunit';
import { setupRenderingTest } from 'thehive/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | services-grid', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ServicesGrid />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <ServicesGrid>
        template block text
      </ServicesGrid>
    `);

    assert.dom().hasText('template block text');
  });
});
