## Fresca Burger!!! - Eat-Da-Burger! 
Fresca Burger is a restaurant app that lets users input the names of burgers they'd like to eat.

It's a simple page like app, where most of the action happen in the same page.

It's been done by using [Node](https://nodejs.org/en/) & its package friends:

- [MySQL](https://www.npmjs.com/package/mysql), 
- [Express](https://www.npmjs.com/package/express), 
- [Handlebars](https://www.npmjs.com/package/express-handlebars)
- [Bulma](https://bulma.io/) for styling
- and a homemade ORM as a secret ingredient! (yum!).


### How does it work?
- Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.
- Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page.
- Your app will store every burger in a database, whether devoured or not.