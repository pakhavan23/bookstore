import React from 'react';
import { Link , Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import home from '../images/home.png';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/login.scss';

class Login extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            done: false
        }
    }

    getInfo = (event) => {                                                                        //gets info from input fields and stores them in states with the same name
        const { name , value } = event.target;
        this.setState({
            [name]: value
        })
    }

    sendInfo = (event) => {
        event.preventDefault();
        let errors = [];
        if(!this.state.username){
            errors = [...errors , {error: "Please insert your username"}]
        }
        if(!this.state.password){
            errors = [...errors , {error: "please insert your password"}]
        }
        if(errors.length > 0){
            for(let i = 0 ; i < errors.length ; i++){
                toast(`${errors[i].error}`, {
                    type: "error"
                })
            }
        }
        else{
            this.submitInfo();
        }
    }

    submitInfo = () => {
        axios.post('http://localhost:5000/auth/login' , {
            "username": this.state.username,
            "user_password": this.state.password,
        })
        .then((response) => {
            toast("You're successfully logged in!" , {
                type: "success"
            })
            document.cookie = "token=" + response.data.token + "; path=/;"
            document.cookie = "username=" + response.data.data.user.username + "; path=/"
        })
        .catch((error) => {
            toast("Error! Please try again.." , {
                type: "error"
            })
            console.error(error);
        })
        .finally(() => {
            setInterval(() => {
                this.setState({
                    done: true
                })
            } , 3000)
        })
    }

    render(){
        if(this.state.done){
            return <Redirect to="/panel" />
        }
        return(
            <section className="wrapper rg-wrapper">
                <form className="register" onSubmit={this.sendInfo}>
                   <section className="rg-title">
                       <h3>BookBox</h3>
                       <p>A must for bookworms!</p>
                   </section>
                   <section className="sgn-inputs login-inputs">
                       <input className="sinput" type="text" name="username" placeholder="Username" onChange={this.getInfo}/>
                       <input className="sinput" type="password" name="password" placeholder="Password" onChange={this.getInfo} />
                   </section>
                   <section className="sgnbtn">
                        <button className="sgn-btn" type="submit">Log In</button>
                   </section>
                   <section className="log-switch">
                       <p>No account? Sign up <Link className="log-link" to="/signup">Here!</Link></p>
                   </section>
                </form>
                <ToastContainer closeOnClick />
                <Link className="rg-home" to="/"><img alt="Home" src={home} /></Link>
                <footer>All rights reserved for <Link className="footer-link" to="/">BookBox</Link>, 2021</footer>
            </section>
        )
    }
}

export default Login;