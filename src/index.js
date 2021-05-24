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


const Bookstore = () => {                                                    
    return(
            <BrowserRouter>
                <Route path="/" exact component={Home} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/login" exact component={Login} />
            </BrowserRouter>
    )
}

ReactDOM.render(<Bookstore /> , document.getElementById("root"));
