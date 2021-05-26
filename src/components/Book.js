import React from 'react';
import '../styles/book.scss';

const Book = () => {
    return(
        <section className="pcontainer">
            <h1 className="ptitle1">All Books / Book Name</h1>
            <section className="book-name">
                <section className="book-text">
                    <h1>Book Name</h1>
                    <p>Author's name</p>    
                    <p className="bprice">Price</p>
                    <button type="button" className="bbtn">Add to cart</button>
                </section>
                <section className="book-img">

                </section>
            </section>
            <section className="book-desc">
                <h3 className="ptitle1 bdesc">About Book</h3>
                <p>This is book description lorem ipsum dolor sds</p>
            </section>
        </section>
    )
}

export default Book;