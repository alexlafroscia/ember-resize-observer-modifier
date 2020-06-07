import { modifier } from "ember-modifier";

const observerMap = new WeakMap();

/**
 * @param {Element} [element] The DOM element this modifier is applied to
 * @param {[Function]} [params] Positional modifier params
 */
export function observeResize(element, [changeHandler]) {
  let observer;

  if (observerMap.has(changeHandler)) {
    observer = observerMap.get(changeHandler);
  } else {
    observer = new ResizeObserver(changeHandler);
    observerMap.set(changeHandler, observer);
  }

  observer.observe(element);

  return function () {
    observer.unobserve(element);
  };
}

export default modifier(observeResize);
