# E-Commerce
This is an e-commerce like app where a user can create, edit, or, delete products and add products to the cart.

### This project is hosted at: https://ecommerce-react-wsuyash.vercel.app/

# Tech Stack
1. React
2. React-Redux
3. Redux Toolkit
4. Tailwind CSS

# Run Project Locally
### 1. Clone this repository and change into the directory:
```
git clone https://github.com/wsuyash/ecommerce-react.git
cd ecommerce-react/
```
### 2. Install the dependencies:
```
npm install
```
### 3. Start the project:
```
npm start
```

### The project should be running at: http://localhost:3000/

* To get the original list of products after deleting products, clear your browser's Local Storage and refresh.

# Directory Structure
```
.
├── package.json
├── package-lock.json
├── postcss.config.js
├── public
│   ├── images
│   │   ├── cart.png
│   │   ├── default_product.png
│   │   └── logo.png
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── src
│   ├── components
│   │   ├── AddProduct.js
│   │   ├── App.js
│   │   ├── Cart.js
│   │  ├── Navbar.js
│   │   ├── ProductDetail.js
│   │   ├── Product.js
│   │   └── Products.js
│   ├── features
│   │   ├── cart
│   │   │   └── cartSlice.js
│   │   └── products
│   │       └── productsSlice.js
│   ├── index.js
│   ├── public
│   │   └── styles
│   │       └── index.css
│   └── redux
│       └── store.js
└── tailwind.config.js

10 directories, 23 files 
```
