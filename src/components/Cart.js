import React from 'react';
import '../styles/cart.scss';

const Cart = () => {
    return(
        <section className="pcontainer">
            <h1 className="ptitle1">Your Purchases</h1>
            <section className="prs">
                <section className="prs-item">
                    <section className="prs-text">
                        <h3>Book Name</h3>
                        <p>Price</p>
                    </section>
                    <section className="prs-img">
                        
                    </section>
                </section>
                <section className="prs-item">
                    <section className="prs-text">
                        <h3>Book Name</h3>
                        <p>Price</p>
                    </section>
                    <section className="prs-img">
                        
                    </section>
                </section>
                
            </section>
            <section className="prs-btn">
                <p>Total price: $34</p>
                <button type="button" className="bbtn prsb">Add to cart</button>
            </section>
        </section>
    )
}

export default Cart;