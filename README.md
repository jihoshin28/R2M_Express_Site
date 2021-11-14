## BreadBasket Shopper Application

BreadBasket Shopper provides a realistic grocery delivery service interface, where add items to a cart, which can be checked out to create an order. These orders are sent to a server which then makes the same orders for drivers on the driver application. The application includes a realistic checkout experience where users can pay using either Paypal or the Stripe API. There a variety of familiar shopping locations to choose from, each with their own unique items, and a variety of browsing options. 

## Getting Started

There are 2 ways you can run the application. 

### 1) Run the application locally.

### Installation

To run the application locally first clone the source code onto your local machine.

```
git clone git@github.com:geeuho/BreadBasket_Shopper.git
cd BreadBasket_Shopper
npm install 
```

### Start

Once you've done that, you can run the following command to start the React application.

```
npm start
```

### 2) Visit the hosted website

You can also just visit the hosted live website. 

[https://www.breadbasketdelivery.com/](https://www.breadbasketdelivery.com/)

## Backend

The backend for the application is currently being hosted on Heroku, so you don't have to run the server locally. 

If you do want to run the server locally, this is the github to the backend code. [link](https://github.com/geeuho/BreadBasket_Backend). 

## Using the Site

### Login

Once you get on the site you'll first want to login to the website. All you need to sign in is a Google account. At the top right corner, there should be a sign in button which utilizes Google Authentication and creates a user profile.

If this is your first time signing in, you'll be prompted to add some additional information.  

### Creating an Order

Once you're signed in you can add any item to the cart by simply pressing the plus button on the items. 

If you switch stores, your cart will drop all its items, since orders can't have items from multiple locations. 

You can use the search bar to search for specific items, or click on a category to search based on category. 

### Checking Out

Once you want to check out, you can click on the cart button and check your current order. 

After the cart page, you will be given multiple options for the delivery address, contact number, and other helpful information for your order.

As of now, the site is not meant to take actual orders, so please use the "Test order" option to try creating an order. 

The paypal and stripe options will take you to their pages which are linked to test keys. You can check those out to see what it would look like to checkout with either option.

### Current Orders/Order History

There are tabs for you to check current orders and order history.

For the current orders, you have the ability to update live orders, to which the driver will be notified.

## Technologies/Libraries

- React
- Redux
- Redux Thunk 
- Redux Persist
- Redux Form
- Bootstrap
- Google Authentication
- Google Maps API
- Stripe API
- Paypal API 
- Axios

## Contact

If you have any ideas you would like to contribute or would love to collaborate on the project I would love to connect! 

Email: geeuho@gmail.com

Github: [https://github.com/geeuho/](https://github.com/geeuho/)

LinkedIn: [https://www.linkedin.com/in/allen-shin/](https://www.linkedin.com/in/allen-shin/)
