import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";
import td from "testdouble";

module("Integration | Modifier | observe-resize", function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.onChange = td.function();
  });

  test("observing a size change", async function (assert) {
    this.small = true;

    await render(hbs`
      <div
        class={{if this.small 'small' 'large'}}
        data-test-element
        {{observe-resize this.onChange}}
      >
        Content
      </div>
    `);

    this.set("small", false);

    await assert.waitFor(() => {
      assert.verify(
        this.onChange(),
        { ignoreExtraArgs: true },
        "Called the action"
      );
    });
  });
});
