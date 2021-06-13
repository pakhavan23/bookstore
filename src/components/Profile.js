import React from 'react';
import axios from 'axios';
import '../styles/profile.scss';

class Profile extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            info: []
        }
    }

    componentDidMount = () => {
        function getCookieValue(a) {
            var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
            return b ? b.pop() : '';
        }
        let username = getCookieValue("username");
        axios.post('http://localhost:5000/user/profile' , {
            "username": username
        })
        .then((response) => {
            this.setState({
                info: response.data.users[0]
            })
        })
        .catch((error) => {
            console.error(error);
        })
    }

    render(){
        return(
            <section className="pcontainer">
                <h1 className="ptitle1">My Profile</h1>
                <section className="book-name pname">
                    <section className="book-text profile-text">
                        <h1>{this.state.info ? `${this.state.info.first_name} ${this.state.info.last_name}` : "My Name"}</h1>    
                    </section>
                    <section className="book-img auth-img">

                    </section>
                </section>
                <section className="profile-info">
                    <section className="profile-item">
                        <p>Username</p>
                        <p>{this.state.info ? this.state.info.username : ""}</p>
                    </section>
                    <section className="profile-item">
                        <p>Password</p>
                        <p></p>
                    </section>
                    <section className="profile-item">
                        <p>Email</p>
                        <p>{this.state.info ? this.state.info.email : ""}</p>
                    </section>
                    <section className="profile-item">
                        <p>Phone Number</p>
                        <p>{this.state.info ? this.state.info.phone_number : ""}</p>
                    </section>
                    <section className="profile-item">
                        <p>Address</p>
                        <p>{this.state.info ? this.state.info.address : ""}</p>
                    </section>
                </section>
            </section>
        )
    }
}

export default Profile;