//import React, { useState } from 'react';
//import Signup from './Signup';
//import Signin from './Signin';

//const App = () => {
//    const [showSignup, setShowSignup] = useState(false);

//    const toggleForm = () => {
//        setShowSignup(!showSignup);
//    };

//    return (
//        <div>
//            <h1>E-commerce App</h1>
//            {showSignup ? (
//                <>
//                    <Signup />
//                    <button onClick={toggleForm}>Already have an account? Signin</button>
//                </>
//            ) : (
//                <>
//                    <Signin />
//                    <button onClick={toggleForm}>Don't have an account? Signup</button>
//                </>
//            )}
//        </div>
//    );
//};

//export default App;




import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'; // Import your Navbar component
import Home from './Home'; // Import your Home component
//import Products from './Products'; // Import your Products component
//import ProductDetails from './ProductDetails'; // Import your ProductDetails component
//import Cart from './Cart'; // Import your Cart component
//import Checkout from './Checkout'; // Import your Checkout component
import Signup from './Signup'; // Import yo ur Signup component
import Signin from './Signin'; // Import your Signin component
//import NotFound from './NotFound'; // Import your NotFound component

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                {/*<Route path="/products" element={<Products />} />*/}
                {/*<Route path="/product/:id" element={<ProductDetails />} />*/}
                {/*<Route path="/cart" element={<Cart />} />*/}
                {/*<Route path="/checkout" element={<Checkout />} />*/}
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
                {/*<Route path="*" element={<NotFound />} />*/}
            </Routes>
        </Router>
    );
};

export default App;
