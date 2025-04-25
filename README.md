# ShopHub

ShopHub is a simple e-commerce website that allows users to browse a selection of products 📱, add them to a shopping cart🛒 , view the cart, and simulate a checkout process. It uses HTML for structure, CSS for styling, and JavaScript to handle the dynamic behaviour of the website 🌐 , such as adding products to the cart, updating the cart display, and simulating the checkout.The use of Bootstrap makes the site responsive, and jQuery simplifies DOM manipulation. 😁

Here is a breakdown of the code.👇

index.html:

This is the main HTML file that structures the webpage.
It includes the basic layout with a header, product display area, a modal for the shopping cart, and a footer.
It links to external CSS (Bootstrap and Font Awesome) for styling and icons, and a custom CSS file (styles.css).
It also includes links to JavaScript files: jQuery, Bootstrap's JavaScript bundle, and the custom script.js for the website's logic.
The header contains the website's name ("ShopHub") and a cart button that displays the number of items in the cart.
The main content area (<div class="row" id="productGrid"></div>) is where the product listings will be dynamically inserted by JavaScript.
The cart modal (<div class="modal fade" id="cartModal" ...>) provides a popup display of the items added to the shopping cart, the total price, and options to close the cart or proceed to checkout.
The footer provides navigation links, social media links, and copyright information.

script.js:

This file contains the JavaScript code that adds interactivity to the webpage.
It defines an array called products which holds data for each product (ID, name, description, price, image, and rating).
The getStarRating() function generates the HTML to display star ratings based on a product's rating.
The renderProducts() function dynamically creates HTML elements for each product and inserts them into the productGrid element in index.html. Each product is displayed as a card with an image, name, description, star rating, price, and a "Buy Now" button.
The updateCartCount() function updates the number displayed on the cart button.
The calculateCartTotal() function calculates the total price of the items in the cart.
The renderCart() function displays the items in the cart modal. It shows each item's image, name, and price, and provides a button to remove items. It also updates the total price in the modal.
The $(document).ready() function ensures that the JavaScript code runs after the HTML document is fully loaded. Inside this function:
renderProducts() is called to initially display the products.
A click event listener is attached to the "Buy Now" buttons. When a button is clicked, the corresponding product is added to the cart array, the cart count is updated, the cart is rendered, and an alert notifies the user.
A click event listener is attached to the "remove-item" buttons in the cart modal. Clicking these removes the corresponding item from the cart, updates the cart count, and re-renders the cart.
A click event listener is attached to the cart button (#cartBtn) to display the cart modal.
A click event listener is attached to the checkout button (#checkoutBtn). It simulates a checkout process by displaying an order ID (a randomly generated string) and clearing the cart.

styles.css:

This file contains the CSS rules that define the visual appearance of the webpage.
It styles the product cards, images, star ratings, prices, and the cart modal.
It also styles the navbar and footer.
It includes hover effects for the product cards.
It makes the layout responsive using media queries so that it adapts to different screen sizes.

How the ShopHub Website Works

Displaying Products:

When the webpage loads, the index.html provides the basic structure.
The script.js code then dynamically generates the product listings by iterating through the products array and creating HTML elements for each product. These elements are inserted into the productGrid in the HTML.
The styles.css file styles these product elements to make them look appealing.

Adding to Cart:

When a user clicks the "Buy Now" button on a product, JavaScript code retrieves the product's details and adds it to the cart array.
The number displayed on the cart button is updated to reflect the new number of items in the cart.
A notification alerts the user that the product has been added.

Viewing the Cart:

When the user clicks the cart button, a modal (cartModal) is displayed.
The script.js code generates the HTML to display the items currently in the cart array within this modal.
The total price of the items in the cart is calculated and displayed.
Users can remove items from the cart within the modal.

Checkout:

When the user clicks the "Checkout" button in the cart modal, the code simulates an order placement.
It generates a random order ID and displays it in an alert message.
The cart array is cleared, and the cart count is reset.


