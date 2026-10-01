# DOM Bug #009: The Hidden Dataset

> Fixed: the app now demonstrates the goal. The symptoms and hints below describe the original bug and its fix.

### The Goal
Retrieve the `user-id` from the `data-user-id` attribute.

### The Symptoms
The alert says "Check console for ID: undefined".

### Hints
1. HTML Data attributes (`data-*`) are automatically converted to camelCase in the `dataset` object.
2. `data-user-id` becomes `userId`.
3. Try accessing `info.dataset.userId`.
