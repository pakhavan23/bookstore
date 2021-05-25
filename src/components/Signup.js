import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import home from '../images/home.png';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/signup.scss';

class Signup extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            username: '',
            phoneNumber: '',
            address: '',
            password: '',
            passwordRepeat: ''
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
        const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!this.state.email){
            errors = [...errors , {error: "please insert your email"}]
        }
        if(!this.state.firstName){
            errors = [...errors , {error: "please insert your first name"}]
        }
        if(!this.state.lastName){
            errors = [...errors , {error: "please insert your last name"}]
        }
        if(!this.state.username){
            errors = [...errors , {error: "Please insert your username"}]
        }
        if(!this.state.phoneNumber){
            errors = [...errors , {error: "please insert your phone number"}]
        }
        if(!this.state.address){
            errors = [...errors , {error: "please insert your address"}]
        }
        if(!this.state.password){
            errors = [...errors , {error: "please insert your password"}]
        }
        if(!this.state.passwordRepeat){
            errors = [...errors , {error: "please re-enter your password"}]
        }
        if(this.state.password !== this.state.passwordRepeat){
            errors = [...errors , {error: "passwords don't match"}]
        }
        if(this.state.email && !emailRegExp.test(String(this.state.email).toLowerCase())){
            errors = [...errors , {error: "The email address is invalid"}]
        }
        if(errors.length > 0){
            for(let i = 0 ; i < errors.length ; i++){
                toast(`${errors[i].error}`, {
                    type: "error"
                })
            }
        }
        else{
            toast("You're successfully logged in!" , {
                type: "success"
            })
        }
    }

    render(){
        return(
            <section className="wrapper rg-wrapper">
                <form className="register" onSubmit={this.sendInfo}>
                   <section className="rg-title">
                       <h3>BookBox</h3>
                       <p>A must for bookworms!</p>
                   </section>
                   <section className="sgn-inputs">
                       <input className="sinput" type="text" name="email" placeholder="Email" onChange={this.getInfo}/>
                       <input className="sinput" type="text" name="firstName" placeholder="First name" onChange={this.getInfo}/>
                       <input className="sinput" type="text" name="lastName" placeholder="Last name" onChange={this.getInfo}/>
                       <input className="sinput" type="text" name="username" placeholder="Username" onChange={this.getInfo}/>
                       <input className="sinput" type="text" name="phoneNumber" placeholder="Phone number" onChange={this.getInfo}/>
                       <input className="sinput" type="text" name="address" placeholder="address" onChange={this.getInfo}/>
                       <input className="sinput" type="password" name="password" placeholder="Password" onChange={this.getInfo}/>
                       <input className="sinput" type="password" name="passwordRepeat" placeholder="Confirm password" onChange={this.getInfo}/>
                   </section>
                   <section className="sgnbtn">
                        <button className="sgn-btn" type="submit">Sign Up</button>
                   </section>
                </form>
                <ToastContainer closeOnClick />
                <Link className="rg-home" to="/"><img alt="Home" src={home} /></Link>
                <footer>All rights reserved for <Link className="footer-link" to="/">BookBox</Link>, 2021</footer>
            </section>
        )
    }
}

export default Signup;