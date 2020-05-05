import React from 'react';

import Layout from '../components/Layout';
// import RailsIcon from '../assets/images/rails-icon.png'

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import Project from '../components/Project'
import School from '../components/School'
import Job from '../components/Job'
import config from '../../config';


const IndexPage = () => {
  return <Layout>
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
            with an eye towards finding revenue-generating solutions. I bring expertise in both
            vanilla JavaScript and JS libraries such as React, MVC architectures, and API development
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
              <i className="fas fa-gem hoverable-tooltip">
                <span className='tooltiptext'>Ruby</span>
              </i>
            </li>
            <li className='list-inline-item'>
              <i>Rails</i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-html5 hoverable-tooltip">
                <span className='tooltiptext'>HTML</span>
              </i>
            </li>
            <li className='list-inline-item'>
              <i className='fab fa-css3-alt hoverable-tooltip'>
                <span className='tooltiptext'>Cascading Style Sheets</span>
              </i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square hoverable-tooltip">
                <span className='tooltiptext'>ES6+</span>
              </i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react hoverable-tooltip">
                <span className='tooltiptext'>React, Redux</span>
              </i>
            </li>
            <li className='list-inline-item'>
              <i className='fas fa-database hoverable-tooltip'>
                <span className='tooltiptext'>PostgreSQL, Redis</span>
              </i>
            </li>
            {/* <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li> */}
            {/* <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li> */}
            <li className="list-inline-item">
              <i className="fab fa-aws hoverable-tooltip">
                <span className='tooltiptext'>EC2, S3, ElasticBeanstalk</span>
              </i>
            </li>
            {/* <li className="list-inline-item">
              <i className="fab fa-linux"></i>
            </li> */}
          </ul>

          {/* <div className="subheading mb-3">Workflow</div> */}
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Collaboration, Working on Cross-Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              API Development &amp; Serialization - Optimizing Database Calls
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Testing with RSpec
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Continuous Development
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

          {config.jobs.map(({company, title, description, dates}) => <Job 
              key={title}
              company={company} 
              title={title} 
              description={description}
              dates={dates} />
          )}

        </div>
      </section>

      <hr className="m-0" />
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          {config.schools.map(({name, degree, description, dates}) => <School 
            key={name}
            name={name} 
            degree={degree}
            description={description}
            dates={dates}
          />)}

        </div>
      </section>


      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="portfolio"
      >
        <div className="w-100">
          <h2 className="mb-5">Portfolio Highlights</h2>

          {config.apps.map(({title, tag, paragraph, url, sideLinks}) => <Project 
              key={title}
              title={title}
              tag={tag}
              paragraph={paragraph}
              url={url}
              sideLinks={sideLinks}
            />
          )}

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
};

export default IndexPage;