import React from 'react';
import axios from 'axios';

class Results extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            books: []
        }
    }

    componentDidMount = () => {
        if(this.props.keyword){
            let key = this.props.keyword;
            axios.get(`http://localhost:5000/book/books/${key}`)
            .then((response) => {
                this.setState({
                    books: response.data.books
                })
            })
            .catch((error) => {
                console.error(error);
            })
        }
        else{
            axios.get(`http://localhost:5000/book/${this.props.type}`)
            .then((response) => {
                this.setState({
                    books: response.data.books
                })
            })
            .catch((error) => {
                console.error(error);
            })
        }        
    }

    map = () => {
        var i = 0;
        for(i=0 ; i < this.state.books.length ; i++){
            return(
                <span className="prec-item res-item">
                    <section className="prec-img">
            
                    </section>
                    <h3>{this.state.books[i].book_name}</h3>
                    <p>{this.state.books[i].book_price}</p>
                </span>
            )
        }
    }

    render(){
        return(
            <section className="pcontainer">
                <h1 className="ptitle1">Search Results for ...</h1>
                <section className="results-c">
                    {this.state.books.length > 0 ? 
                        this.map(): null}
                </section>
            </section>
        )
    }
}

export default Results;
