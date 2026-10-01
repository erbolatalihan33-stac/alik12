# DOM Bug #004: The Content Wipeout

> Fixed: the app now demonstrates the goal. The symptoms and hints below describe the original bug and its fix.

### The Goal
Add a new paragraph below the heading.

### The Symptoms
The heading "Static Heading" vanishes and is replaced by the new text.

### Hints
1. Using `=` on `innerHTML` replaces everything.
2. If you want to keep what's already there and add more, use `+=`.
