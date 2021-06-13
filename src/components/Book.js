import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/book.scss';

class Book extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            toggle: '',
            info: []
        }
    }

    componentDidMount = () => {
        let name = this.props.location.state.info.book_name;
        axios.get(`http://localhost:5000/book/books/${name}/info`)
        .then((response) => {
            console.log(response);
            this.setState({
                info: response.data.book[0]
            })
        })
        .catch((error) => {
            console.error(error)
        })
    }

    openToggle = () => {
        this.setState({toggle : false});
    }

    closeToggle = () => {
        this.setState({toggle: true});
    }

    addCart = () => {
        toast('The book is added to your cart!' , {
            type: "success"
        })
    }
    
    render(){
        return(
            <section className="wrapper panel-wrapper">
            <section className="panel" onClick={this.openToggle}>
                <Link className="pback" to="/panel">Back to panel</Link>
                <section className="profilepic" onClick={this.closeToggle}>

                </section>
                <section className={this.state.toggle === true ? "sidebar" : this.state.toggle === false ?  "scl" : "sfr"}>
                    <section className="spic">

                    </section>
                    <h3>Name</h3>
                    <section className="sitems">
                        <span className="sitem">Profile</span>
                        <span className="sitem">Cart</span>
                        <span className="sitem">History</span>
                        <span className="sitem">Sign out</span>
                    </section>
                </section>
                <section className="pcontainer">
                    <h1 className="ptitle1">All Books / {this.state.info ? this.state.info.book_name : "Book Name"}</h1>
                    <section className="book-name">
                        <section className="book-text">
                            <h1>{this.state.info ? this.state.info.book_name : "Book Name"}</h1>
                            <Link className="authb" to={{pathname: '/author', state:{info: this.state.info}}}>{this.state.info ? `${this.state.info.first_name} ${this.state.info.last_name}`  : "Author Name"}</Link>    
                            <p className="bprice">{this.state.info ? this.state.info.book_price : "Book Name"}</p>
                            <button type="button" className="bbtn" onClick={this.addCart}>Add to cart</button>
                        </section>
                        <section className="book-img">

                        </section>
                    </section>
                    <section className="book-desc">
                        <h3 className="ptitle1 bdesc">About Book</h3>
                        <p>{this.state.info ? this.state.info.book_desc : "Book Name"}</p>
                    </section>
                    <ToastContainer closeOnClick />
                    </section>
                </section>
            </section>
        )
    }
}

export default Book;

