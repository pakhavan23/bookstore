import React, { useState } from 'react';
import book from '../images/book.png';
import search from '../images/search.png';
import Results from './Results';
import Book from './Book';
import Profile from './Profile';
import History from './History';
import Cart from  './Cart';
import '../styles/panel.scss';

const Panel = () => {

    const[toggle , toggleMenu] = useState('');
    const[component , changeComponent] = useState('panel');

    return(
        <section className="wrapper panel-wrapper">
            <section className="panel" onClick={toggle ? () => toggleMenu(false) : null}>
                {component !== 'panel' ? 
                    <span className="pback" onClick={() => changeComponent('panel')}>Back to panel</span> : null
                }
                <section className="profilepic" onClick={() => toggleMenu(true)}>

                </section>
                <section className={toggle === true ? "sidebar" : toggle === false ?  "scl" : "sfr"}>
                    <section className="spic">

                    </section>
                    <h3>Name</h3>
                    <section className="sitems">
                        <span className="sitem" onClick={() => changeComponent('profile')}>Profile</span>
                        <span className="sitem" onClick={() => changeComponent('cart')}>Cart</span>
                        <span className="sitem" onClick={() => changeComponent('history')}>History</span>
                        <span className="sitem">Sign out</span>
                    </section>
                </section>
                { component === 'panel' ? 
                    <section className="pcontainer">
                      <h1 className="ptitle1">What do you want to read?</h1>
                      <section className="psearch">
                          <section className="psbar">
                              <textarea placeholder="Search it here!"></textarea>
                              <img src={search} />
                          </section>
                      </section>
                      <section className="pcat">
                              <section className="prow">
                                  <span className="pitem" onClick={() => changeComponent('results')}>
                                      <img src={book} />
                                      <p>All Books</p>
                                  </span>
                                  <span className="pitem" onClick={() => changeComponent('results')}>
                                      <img src={book} />
                                      <p>Classic</p>
                                  </span>
                                  <span className="pitem" onClick={() => changeComponent('results')}>
                                      <img src={book} />
                                      <p>Romance</p>
                                  </span>
                                  <span className="pitem" onClick={() => changeComponent('results')}>
                                      <img src={book} />
                                      <p>Horror</p>
                                  </span>
                              </section>
                              <section className="prow" onClick={() => changeComponent('results')}>
                                  <span className="pitem">
                                      <img src={book} />
                                      <p>Fantasy</p>
                                  </span>
                                  <span className="pitem" onClick={() => changeComponent('results')}>
                                      <img src={book} />
                                      <p>Crime</p>
                                  </span>
                                  <span className="pitem" onClick={() => changeComponent('results')}>
                                      <img src={book} />
                                      <p>Fiction</p>
                                  </span>
                                  <span className="pitem" onClick={() => changeComponent('results')}>
                                      <img src={book} />
                                      <p>Children</p>
                                  </span>
                              </section>
                      </section>
                      <h3 className="ptitle2">Recent purchases</h3>
                      <section className="prec">
                          <span className="prec-item" onClick={() => changeComponent('book')}>
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
                : component === 'results' ?
                    <Results />
                : component === 'book' ?
                    <Book />
                :component === 'profile' ?
                    <Profile />
                :component === 'history' ?
                    <History />
                :component === 'cart' ?
                    <Cart />
                : null
                }
            </section>
        </section>
    )
}

export default Panel;