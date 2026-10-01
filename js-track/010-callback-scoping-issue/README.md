# Bug #010: The Callback Scope Trap

> Fixed: the app now demonstrates the goal. The symptoms and hints below describe the original bug and its fix.

### The Goal
Display the names "Ada", "Grace", and "Linus" one at a time, one second apart, after clicking the button.

### The Symptoms
The delayed messages appear, but each one says `Hello, undefined!` instead of showing a name.

### Hints
1. Check how the loop variable is declared.
2. What value does that variable have by the time the delayed callbacks run?
3. Which declaration keyword gives each loop iteration its own variable?
