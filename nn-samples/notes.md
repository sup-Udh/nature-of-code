21. Changing the weights

The chapter uses:

Δweight = error × input

Then:

new weight =
old weight + error × input

And adds a learning constant:

new weight =
old weight +
(error × input × learningConstant)


22. What's the learning constant?

Think of it as:

How big of a correction should I make?

Example:

error = 2
input = 0.5
learning rate = 0.1

Then:

change = 2 × 0.5 × 0.1
       = 0.1

So:

old weight = 0.7

new weight = 0.8

If learning rate was:

0.001

the adjustment would be tiny.

The chapter explains that a large learning constant can make learning faster but risks overshooting, while a small one learns more slowly but makes smaller adjustments.