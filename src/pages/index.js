import React from 'react';

import Layout from '../components/Layout';
// import RailsIcon from '../assets/images/rails-icon.png'

import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            I am a full-stack developer with experience in developing technical processes
            with an eye towards finding revenue-generating solutions. I have expertise in both
            vanilla Javascript and JS libraries such as React, MVC architectures, and API creation
            and integration.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className='list-inline-item'>
              <i>Redux</i>
            </li>
            {/* <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li> */}
            {/* <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li> */}
            {/* <li className="list-inline-item">
              <i className="fab fa-aws"></i>
            </li> */}
            <li className="list-inline-item">
              <i class="fas fa-gem"></i>
            </li>
            <li className='list-inline-item'>
              <i>Rails</i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Collaboration, Working on Cross-Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              API Development &amp; Serialization - Optimizing Database Calls
            </li>
            {/* <li>
              <i className="fa-li fa fa-check"></i>
              Testing with RSpec, Capybara, and Jest
            </li> */}
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Continuous Deployment
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Software Engineering Student</h3>
              <div className="subheading mb-3">Flatiron School</div>
              <p>
                Over a fifteen week period, I immersed myself in software engineering concepts, 
                modern coding languages, and Agile software concepts. I built 5 working applications 
                from scratch using Ruby, Rails, and Javascript frameworks.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">October 2019 - February 2020</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Director of Donor Relations</h3>
              <div className="subheading mb-3">For Love of Children</div>
              <p>
                I managed all fundraising efforts for a small non-profit organization dedicated to
                providing out-of-school-time educational services to children in the District of 
                Columbia. I built relationships with staff, donors, and other stakeholders with
                the goal of increasing funding for the organization's priorities.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2019 - September 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Development Officer</h3>
              <div className="subheading mb-3">Refugees International</div>
              <p>
                As Development Officer at Refugees International, an international advocacy 
                and policy organization, I developed a number of fundraising programs, oftentimes 
                incorporating new software and technology, to increase revenue. Among other projects,
                I developed an end-of-year Presidential ask solicitation program to boost major gifts
                and launched a webinar program to keep major donors engaged year-round.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July 2010 - December 2011</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Database Administrator</h3>
              <div className="subheading mb-3">Refugees International</div>
              <p>
                As keeper of the database, I managed to keep Refugees International's donor database
                clean, updated, and functional. During this time, I also managed a major database 
                transition from one software provider to another and ensured that different softwares
                could share the same data.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2008 - June 2010</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Flatiron School</h3>
              <div className="subheading mb-3">Software Engineering Immersive Program</div>
              <div>Five Applications Developed from Scratch</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">October 2019 - February 2020</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Gettysburg College</h3>

              <div className="subheading mb-3">Bachelor of Arts</div>
              <div>Anthropology &amp; Religion (Double Major)</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2005 - May 2009</span>
            </div>
          </div>

        </div>

      </section>


      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="portfolio"
      >
        <div className="w-100">
          <h2 className="mb-5">Portfolio</h2>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0"><a href='https://succotash-app.herokuapp.com'>Succotash</a></h3>
              <div className="subheading mb-4">Farm Management Software</div>
              <p>
                Succotash is a farm management software application built with a Rails/PostgreSQL
                backend and a React-enabled, Material-UI frontend with state managed in Redux. Farmers and
                gardeners can manage their crop cycles from planting through harvest. By providing a date
                to the application, users are able to view and edit the status of their farms 
                and its sub-divisions, which allows the app to serve as both a storage of farm 
                history and a planner for future crop cycles.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary" style={{paddingLeft: '10em'}}>
                  <a href='https://github.com/mattbechtel1/succotash-frontend'><i className='fab fa-github'> Frontend</i></a>
              </span>
              <span className="text-primary" style={{paddingLeft: '10em'}}>
                <a href='https://github.com/mattbechtel1/succotash-backend'><i className='fab fa-github'> Backend</i></a>
              </span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Catch-22: The Game</h3>
              <div className="subheading mb-4">Computer Game based on Classic American Novel</div>
              <p>
                <em>Catch-22</em> is a novel by Joseph Heller. Catch-22: The Game honors the themes, characters,
                and events of that novel through a fun and humorous text-based strategy format. Messages are displayed at intervals 
                with async/await functions. Players are provided with options with the goal of surviving as a bombardier 
                over Italy during World War II. A balance of random-number generation and player decisions determine 
                the result of each round. Staying true to the themes of the novel, the game is impossible to win. 
                The game is built with a Rails/PostgreSQL backend and a React frontend with Semantic-UI components. 
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary" style={{paddingLeft: '10em'}}>
                  <a href='https://www.youtube.com/watch?v=bTLgXFCXypg'><i className='fab fa-youtube'> Video Demo</i></a>
              </span>
              <span className="text-primary" style={{paddingLeft: '10em'}}>
                  <a href='https://github.com/mattbechtel1/catch-22-game-frontend'><i className='fab fa-github'> Frontend</i></a>
              </span>
              <span className="text-primary" style={{paddingLeft: '10em'}}>
                  <a href='https://github.com/mattbechtel1/catch-22-backend'><i className='fab fa-github'> Backend</i></a>
              </span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0"><a href='https://dc-metrobus-2020.herokuapp.com'>Metrobus 2020</a></h3>
              <div className="subheading mb-4">Bus Prediction Application for Commuters in and around Washington, DC</div>
              <p>
                Utilizing <a href='https://developer.wmata.com/'>WMATA's public API</a>, Metrobus 2020 allows DC-based
                commuters to accurately predict bus and train arrivals, favorite their frequent stations and busstops,
                and set an alarm for when a bus approaches a stop. The app uses an uncluttered minimalist frontend 
                design with Bulma elements. The rails backend protects API keys and fetches data from WMATA. A simple 
                sign-up and password protection system allows users' favorites to be persisted to the database for
                future use with the app.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary" style={{paddingLeft: '10em'}}>
                  <a href='https://github.com/mattbechtel1/Metrobus2020'><i className='fab fa-github'> Github</i></a>
              </span>
            </div>
          </div>

        </div>
      </section>

      <hr className="m-0" />

      {/* <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="certifications"
      >
        <div className="w-100">
          <h2 className="mb-5">Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Google Analytics Certified Developer
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Mobile Web Specialist - Google Certification
            </li>
          </ul>
        </div>
      </section> */}
    </div>
  </Layout>
);

export default IndexPage;
