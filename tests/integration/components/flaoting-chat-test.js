import { module, test } from 'qunit';
import { setupRenderingTest } from 'thehive/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | flaoting-chat', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<FlaotingChat />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <FlaotingChat>
        template block text
      </FlaotingChat>
    `);

    assert.dom().hasText('template block text');
  });
});
