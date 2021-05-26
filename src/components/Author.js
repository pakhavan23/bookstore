import React from 'react';
import '../styles/book.scss';

const Author = () => {
    return(
        <section className="pcontainer">
            <h1 className="ptitle1">All Books / Author's Name</h1>
            <section className="book-name">
                <section className="book-text">
                    <h1>Author's Name</h1>
                    <p>Author's nationality</p>    
                </section>
                <section className="book-img auth-img">

                </section>
            </section>
            <h3 className="ptitle1 bdesc">Books by this author:</h3>
            <section className="prec">
                        <span className="prec-item">
                            <section className="prec-img">
  
                            </section>
                            <h3>Name</h3>
                            <p>Price</p>
                        </span>
                        <span className="prec-item">
                            <section className="prec-img">
  
                            </section>
                            <h3>Name</h3>
                            <p>Price</p>
                        </span>
                        <span className="prec-item">
                            <section className="prec-img">
  
                            </section>
                            <h3>Name</h3>
                            <p>Price</p>
                        </span>
                        <span className="prec-item">
                            <section className="prec-img">
  
                            </section>
                            <h3>Name</h3>
                            <p>Price</p>
                        </span>
            </section>
        </section>
    )
}

export default Author;