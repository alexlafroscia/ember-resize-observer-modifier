# ember-resize-observer-modifier

Use [`ResizeObserver`][resize-observer] through an Ember Modifier

## Compatibility

- Ember.js v3.12 or above
- Ember CLI v2.13 or above
- Node.js v10 or above

## Installation

```
ember install ember-resize-observer-modifier
```

## Usage

This addon provides an Ember [modifier][ember-modifier] for attaching a [`ResizeObserver`][resize-observer] to an element in your Ember template and calling an action when the observer fires.

In the following example, `this.onChange` will be called any time that the element changes size.

```handlebars
<div {{observe-resize this.onChange}} />
```

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).

[resize-observer]: https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver
[ember-modifier]: https://guides.emberjs.com/release/components/template-lifecycle-dom-and-modifiers/#toc_out-of-component-modifications
