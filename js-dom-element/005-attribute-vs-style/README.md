# DOM Bug #005: The Attribute Illusion

> Fixed: the app now demonstrates the goal. The symptoms and hints below describe the original bug and its fix.

### The Goal
Change the text color of the heading to blue.

### The Symptoms
The color doesn't change, even though the code "runs" without errors.

### Hints
1. CSS colors must be set via the `style` object in JavaScript.
2. `setAttribute("color", ...)` doesn't exist for most HTML tags (except maybe old table tags).
3. Try `title.style.color = "blue";`.
