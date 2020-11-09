import React, { useState } from 'react';
import Modal from '../Modal';

const ApplicationList = ({ category }) => {

  const [applications] = useState([
    {
      name: 'Run Buddy',
      category: 'front',
      description: 'A website that offers fitness training services.',
      gitHub: 'https://github.com/civ187/run-buddy',
      site:'https://civ187.github.io/run-buddy/',
    },
    {
      name: 'Password Generator',
      category: 'front',
      description: 'This program randomly generates a strong password that provides greater security',
      gitHub: 'https://github.com/civ187/Password-Generator',
      site:'https://civ187.github.io/Password-Generator/',
    },
    {
      name: 'Code Quiz',
      category: 'front',
      description: 'As a coding boot camp student I wanted to take a timed quiz on JavaScript fundamentals that stores my high scores So that I coul gauge my progress compared to my peers.',
      gitHub: 'https://github.com/civ187/Code-Quiz',
      site:'https://civ187.github.io/Code-Quiz/',
    },
    {
      name: 'Weather Dashboard',
      category: 'front',
      description: 'This Weather dashboard give the user the current and 5 day future forcast just by entering a city name. The site makes use of the OpenWeather API to retrieve the weather data to make this happen.',
      gitHub: 'https://github.com/civ187/Weather-Dashboard',
      site:'https://civ187.github.io/Weather-Dashboard',
    },
    {
      name: 'Readme Generator',
      category: 'back',
      description: 'This app will help you produce a clean and professional looking readme file for your project repositories',
      gitHub: 'https://github.com/civ187/README-Generator',
      site:'NA',
    },
    {
      name: 'Team Profile Generator',
      category: 'back',
      description: 'The Team Profile Generator prompts the user for his/her team members and their information. Upon completion, an HTML file is generated that displays a nicely formatted team roster based on the user input.',
      gitHub: 'https://github.com/civ187/Team-Profile-Generator',
      site:'NA',
    },
    {
      name: 'Note Taker',
      category: 'back',
      description: 'The Note Taker app allows a user to save, read, and delete notes via the browser. This is a deployed application, meaning it can be accessed from anywhere as long as the user has a browser and an internet connection.',
      gitHub: 'https://github.com/civ187/Note_Taker',
      site:'https://vclnotetaker.herokuapp.com/',
    },
    {
      name: 'Employee Tracker',
      category: 'back',
      description: 'An application that is able to view and managed the departments, roles, and employees of a company, in order to oarganize and plan your buisiness',
      gitHub: 'https://github.com/civ187/Employee_Tracker',
      site:'NA',
    },
    {
      name: 'E-Commerce backend End',
      category: 'back',
      description: 'This is the back end for an e-commerce site.',
      gitHub: 'https://github.com/civ187/ORM_ecommerce_back_end',
      site:'NA',
    },
    {
      name: 'Tech Blog',
      category: 'full',
      description: 'As a full stack web developer who writes about tech, this is a CMS-style blog site where I can publish articles, blog posts, and my thoughts and opinions about tech and the tech industry.',
      gitHub: 'https://github.com/civ187/MVC_TechBlog',
      site:'https://vcltechblog.herokuapp.com/',
    },
    {
      name: 'Post Pandemic Dating',
      category: 'front',
      description: 'Post Pandemic Dating is an application for people who are planning romantic dates in the United States of America post quarantine.',
      gitHub: 'https://github.com/joshuaweisbrodtorres/post-pandemic-dating',
      site:'https://joshuaweisbrodtorres.github.io/post-pandemic-dating/',
    },
    {
      name: 'Social Network API',
      category: 'back',
      description: 'This is a set of API for a social network that uses a MongoDB database so that the website can handle large amounts of unstructured data, Express.js for routing, Mongoose ODM, and the moment package to format time stamps.',
      gitHub: 'https://github.com/civ187/social-network-API',
      site:'NA',
    },
    {
      name: 'The Reading Nook',
      category: 'front',
      description: 'This blog style website was designed to give advid readers a place where they can find new books recommendations, review books, and post discussions with a friendly community.',
      gitHub: 'https://github.com/asaldana1108/project-2',
      site:'https://thereadingnook.herokuapp.com/',
    },
    {
      name: 'Budget Tracker',
      category: 'front',
      description: 'The user, avid traveler, wants to be able to track their withdrawals and deposits with or without a data/internet connection so that their account balance is accurate while traveling .',
      gitHub: 'https://github.com/civ187/BudgetTracker',
      site:'https://vclbudgettracker.herokuapp.com/',
    },
    {
      name: 'iDecorate',
      category: 'full',
      description: 'iDecorate is a application that can help you decorate your living space. Simply login, select your area and add the items that you want to your cart.',
      gitHub: 'https://github.com/DVanEman/iDecorate',
      site:'https://drive.google.com/file/d/1v5ggFzEszBSWP4DeNuvwDv1lqNUM6ILF/view',
    }
  ]);

  const currentApplications = applications.filter((application) => application.category === category);
  const [currentApplication, setCurrentApplication] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (image, i) => {
    setCurrentApplication({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div>
      {isModalOpen && (
        <Modal currentApplication={currentApplication} onClose={toggleModal} />
      )}
      <div className="flex-row">
        {currentApplications.map((image, i) => (
          <img
            src={require(`../../assets/img/small/${category}/${i}.png`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ApplicationList;