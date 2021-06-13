import React, { useState } from 'react';
import book from '../images/book.png';
import search from '../images/search.png';
import Results from './Results';
import Recent  from './Recent';
import Book from './Book';
import Profile from './Profile';
import History from './History';
import Cart from  './Cart';
import '../styles/panel.scss';


const Panel = (props) => {

    const[toggle , toggleMenu] = useState('');
    const[component , changeComponent] = useState('panel');
    const[type, changeType] = useState('all');
    const[keyword , addKeyword] = useState('');

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
                              <textarea placeholder="Search it here!" onChange={(event) => addKeyword(event.target.value)}></textarea>
                              <img src={search} onClick={() => changeComponent('results')} />
                          </section>
                      </section>
                      <section className="pcat">
                              <section className="prow">
                                  <span className="pitem" onClick={() => changeComponent('results')}>
                                      <img src={book} />
                                      <p>All Books</p>
                                  </span>
                                  <span className="pitem" onClick={() => {changeComponent('results'); changeType('classic')}}>
                                      <img src={book} />
                                      <p>Classic</p>
                                  </span>
                                  <span className="pitem" onClick={() => {changeComponent('results'); changeType('romance')}}>
                                      <img src={book} />
                                      <p>Romance</p>
                                  </span>
                                  <span className="pitem" onClick={() => {changeComponent('results'); changeType('horror')}}>
                                      <img src={book} />
                                      <p>Horror</p>
                                  </span>
                              </section>
                              <section className="prow">
                                  <span className="pitem" onClick={() => {changeComponent('results'); changeType('fantasy')}}>
                                      <img src={book} />
                                      <p>Fantasy</p>
                                  </span>
                                  <span className="pitem" onClick={() => {changeComponent('results'); changeType('crime')}}>
                                      <img src={book} />
                                      <p>Crime</p>
                                  </span>
                                  <span className="pitem" onClick={() => {changeComponent('results'); changeType('fiction')}}>
                                      <img src={book} />
                                      <p>Fiction</p>
                                  </span>
                                  <span className="pitem" onClick={() => {changeComponent('results'); changeType('children')}}>
                                      <img src={book} />
                                      <p>Children</p>
                                  </span>
                              </section>
                      </section>
                      <h3 className="ptitle2">Recent purchases</h3>
                      <Recent />
                    </section>
                : component === 'results' ?
                    <Results type={type} keyword={keyword} />
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