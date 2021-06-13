import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Book from './Book';


class Recent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            recent: [],
        }
    }

    componentDidMount = () => {
        axios.get('http://localhost:5000/book/recent')
        .then((response) => {
            this.setState({
                recent: response.data.books
            })
        })
        .catch((error) => {
            console.error(error);
        })
    }

    map = () => {
        for(var i=0 ; i < this.state.recent.length ; i++){
            return(
                <Link className="prec-item" to={{pathname: '/info', state:{info: this.state.recent[i]} }}>
                    <section className="prec-img">
            
                    </section>
                    <h3>{this.state.recent.length > 0 ? this.state.recent[i].book_name : "Name"}</h3>
                    <p>{this.state.recent.length > 0 ? this.state.recent[i].book_price : "Price"}</p>
                </Link>
            )
        }
    }

    render(){
        return(
            <section className="prec">
                {this.state.recent.length > 0 ? 
                    this.map(): null}
            </section>
        )
    }
}

export default Recent;