import React from 'react';
import profilePicture from "../../assets/img/profile/portrait.jpg"

function About() {
    return (
        
        <section className="about">
            <div>
                <h1 id="about">About me</h1>
                <img className="profile-picture" src={profilePicture} alt="Victor Cesar Lopez" />
            </div>
            <div className="bio">
                <p>
                    My name is Victor Cesar Lopez. I am 47 years old. I am a husband and father. I have been working for
                    our family business the better part of 25 years. I am currently the Technolgy Coordinator for the entire agency. I am the IT department. Because we are a family
                    business, I wear many hats. In any given day I am HR, Finance, Administration, HIPAA compliance
                    officer, helpdesk, network administration, billing and what ever else comes along. I am learing web
                    development in order to not only expand our angency presence on the web, but also to add to my
                    skills in order to have more options to choose from in the future.
                </p>
            </div>
        </section>
    );
}

export default About;