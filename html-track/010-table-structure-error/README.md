# Bug #010: The Floating Data

> Fixed: the page now displays the goal. The symptoms and hints below describe the original bug and its fix.

### The Goal
Display John's data correctly inside the table rows.

### The Symptoms
The table looks broken, and the data might not align under the headers "Name" and "Email".

### Hints
1. Every piece of data (`<td>`) must be inside a table row (`<tr>`).
2. Check the `<tbody>` section.
