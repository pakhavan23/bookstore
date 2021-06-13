import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/book.scss';

class Author extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            toggle: '',
            info: [],
            books: []
        }
    }

    componentDidMount = () => {
        axios.post(`http://localhost:5000/book/author` , {
            "firstName": this.props.location.state.info.first_name,
            "lastName": this.props.location.state.info.last_name
        })
        .then((response) => {
            console.log(response);
            this.setState({
                info: response.data.users[0]
            })
        })
        .catch((error) => {
            console.error(error)
        })

        axios.post(`http://localhost:5000/book/author/books` , {
            "firstName": this.props.location.state.info.first_name,
            "lastName": this.props.location.state.info.last_name
        })
        .then((response) => {
            console.log(response);
            this.setState({
                books: response.data.users[0]
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
    
    map = () => {
        for(var i=0 ; i < this.state.books.length ; i++){
            return(
                <Link className="prec-item" to={{pathname: '/info', state:{info: this.state.books[i]} }}>
                    <section className="prec-img">
            
                    </section>
                    <h3>{this.state.books.length > 0 ? this.state.books[i].book_name : "Name"}</h3>
                    <p>{this.state.books.length > 0 ? this.state.books[i].book_price : "Price"}</p>
                </Link>
            )
        }
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
                    <h1 className="ptitle1">All Books /{this.state.info ? `${this.state.info.first_name} ${this.state.info.last_name}`  : "Author Name"}</h1>
                    <section className="book-name">
                        <section className="book-text">
                            <h1>{this.state.info ? `${this.state.info.first_name} ${this.state.info.last_name}`  : "Author Name"}</h1>
                            <p>{this.state.info ? this.state.info.nationality  : "Author Name"}</p>    
                        </section>
                        <section className="book-img auth-img">

                        </section>
                    </section>
                    <h3 className="ptitle1 bdesc">Books by this author:</h3>
                    <section className="prec">
                        {this.state.books.length > 0 ? 
                            alert("hi"): null}
                    </section>
            </section>
        </section>
        </section>
        )
    }
}

export default Author;

