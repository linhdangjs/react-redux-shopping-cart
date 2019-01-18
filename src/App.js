import React, { Component } from 'react';
import Header from './components/Header';
import ProductsContainer from './containers/ProductsContainer';
import MessageContainer from './containers/MessageContainer';
import CartContainer from './containers/CartContainer';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <div>
                    { /* HEADER */}
                    <Header />

                    <main id="mainContainer">
                        <div className="container">
                            { /* PRODUCTS */}
                            <ProductsContainer />

                            { /* MESSAGE */}
                            <MessageContainer />

                            { /* Cart */}
                            <CartContainer />
                        </div>
                    </main>
                    { /* FOOTER */ }
                    <Footer />
                
            </div>
        );
    }
}

export default App;
