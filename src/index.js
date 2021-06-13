/**
 * author: <Parto Akhavan>
 * author_email: <partoakhavan23@gmail.com>
**/

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter , Route} from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Panel from './components/Panel';
import Book from './components/Book';
import Author from './components/Author';


const Bookstore = () => {                                                    
    return(
            <BrowserRouter>
                <Route path="/" exact component={Home} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/login" exact component={Login} />
                <Route path="/panel" exact component={Panel} />
                <Route path="/info" exact component={Book} />
                <Route path="/author" exact component={Author} />
            </BrowserRouter>
    )
}

ReactDOM.render(<Bookstore /> , document.getElementById("root"));
