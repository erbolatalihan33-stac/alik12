# Bug #005: The Mathematical Mystery

> Fixed: the page now displays the goal. The symptoms and hints below describe the original bug and its fix.

### The Goal
The two boxes should sit side-by-side, each taking exactly 50% of the screen.

### The Symptoms
The right box is dropping down to the next line because they are too wide together.

### Hints
1. By default, `width` doesn't include padding or borders.
2. Read about `box-sizing: border-box`.
