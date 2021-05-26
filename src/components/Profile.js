import React from 'react';
import '../styles/profile.scss';

const Profile = () => {
    return(
        <section className="pcontainer">
             <h1 className="ptitle1">My Profile</h1>
            <section className="book-name pname">
                <section className="book-text profile-text">
                    <h1>My Name</h1>    
                </section>
                <section className="book-img auth-img">

                </section>
            </section>
            <section className="profile-info">
                <section className="profile-item">
                    <p>Username</p>
                    <p>Abbie</p>
                </section>
                <section className="profile-item">
                    <p>Password</p>
                    <p></p>
                </section>
                <section className="profile-item">
                    <p>Email</p>
                    <p></p>
                </section>
                <section className="profile-item">
                    <p>Phone Number</p>
                    <p></p>
                </section>
                <section className="profile-item">
                    <p>Address</p>
                    <p></p>
                </section>
            </section>
        </section>
    )
}

export default Profile;