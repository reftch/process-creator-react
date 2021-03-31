import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Button from './Button';

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('it renders with or without title', () => {
  act(() => {
    render(<Button />, container);
  });
  expect(container.textContent).toBe("");

  act(() => {
    render(<Button title="Test it!" />, container);
  });
  expect(container.textContent).toBe("Test it!");
});
