# Adventure Cap Italy St 🇮🇹

## Entities

1. Player: he's the one who plays the game, have a capital and want to increase it buying new business, getting money
from them clicking or doing it automatically hiring a manager.
He expects to earn money also while he's away so there should be a last_update timestamp mechanism to calculate
revenue while game's not opened.
We could say: that player has a name, pic, capital, business_list, last_time_opened

2. Business: there are several types, but they have in common same props, only values can change.
They can produce money if you "sell" (click) the product or you hire a manager that essentially clicks for you.
They have a cost, they have a level, they have a min time to produce money that can change based to level, they can be managed by a manager
they can produce money also when user's away
We could say that business has: name, pic, initial_cost, state (busy or available to be clicked), has_manager, time_to_complete, levels, (each levels has a cost, time to produce the money, a qnty of money produced)

3. Managers: they own a Business and their job is to click for you, they have a business id and a cost.

## Components

We should have a main screen, with all business available, and a lateral menu where's possible to buy managers. 
In the top bar we can have a profile pic and the amount of money available.


// TODO:

1. css media query for business when page is small

2. save to localStorage tunable to X seconds with a queue mechanism 

3. show modal  when user came back, when you don't have enough money and when you buy something

4. Add achievements (?) different types of 

5. polish components (props type)

6. Unit tests on functions

7. Script for generate different difficulties

8. export and host

9. Fix progress on click
