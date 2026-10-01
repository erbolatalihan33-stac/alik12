# Bug #001: The Endless Row

> Fixed: the page now displays the goal. The symptoms and hints below describe the original bug and its fix.

### The Goal
Photos should stay inside the black border and wrap to new lines if they don't fit.

### The Symptoms
The boxes are flying out of the container to the right!

### Hints
1. Look at the `.gallery` class in `style.css`.
2. By default, `flex-direction: row` does not wrap.
3. Search for the `flex-wrap` property.
