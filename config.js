const gitIcon = 'fa-github'

module.exports = {
  siteTitle: 'Resume & Portfolio - Matt Bechtel', // <title>
  manifestName: 'Resume',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#f57c00',
  manifestThemeColor: '#f57c00',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  // pathPrefix: `/gatsby-starter-resume/`, // This path is subpath of your hosting https://domain/portfolio
  firstName: 'Matt',
  lastName: 'Bechtel',
  // social
  socialLinks: [
    {
      icon: gitIcon,
      name: 'Github',
      url: 'https://github.com/mattbechtel1',
    },
    {
      icon: 'fa-linkedin-in',
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/mbechtel/',
    },
    {
      icon: 'fa-blogger',
      name: 'Blog',
      url: 'https://mattbechtel1.github.io/',
    },
    // {
    //   icon: 'fa-twitter',
    //   name: 'Twitter',
    //   url: 'https://twitter.com/mattbechtel1',
    // },
  ],
  email: 'bechma02@gmail.com',
  // phone: '000-00000',
  address: 'Seattle, WA 98101',
  jobs: [
    {
      title: 'Production Engineer',
      company: 'Meta',
      description: "I design architecture and develop internal features to support capacity and resource management for the world's largest internal private cloud.",
      dates: 'August 2020 - Present'
    }, {
      title: 'Software Application Developer',
      company: 'Global Impact',
      description: "I developed and extended features for several Ruby on Rails applications used by staff and clients in support of a non-profit organization committed to building partnerships and resources for the world's most vulnerable people. Among my major projects was integrating a funds transfer system to distribute grants to people who lost their jobs due to the CoVid-19 economic slowdown. I was also responsible for building out behavioral test suites with Cucumber.",
      dates: 'May 2020 - August 2020'
    }, { 
      title: "Director of Donor Relations", 
      company: 'For Love of Children',
      description: "I managed all fundraising efforts for a small non-profit organization dedicated to providing out-of-school-time educational services to children in the District of Columbia. I built relationships with staff, donors, and other stakeholders with the goal of increasing funding for the organization's priorities.",
      dates: 'May 2019 - September 2019'
    }, {
      title: "Development Officer", 
      company: 'Refugees International',
      description: "As Development Officer at Refugees International, an international advocacy and policy organization, I developed a number of fundraising programs, oftentimes incorporating new software and technology, to increase revenue. Among other projects, I developed an end-of-year Presidential ask solicitation program to boost major gifts and launched a webinar program to keep major donors engaged year-round.",
      dates: 'August 2014 - April 2019'
    }, {
      title: 'Database Administrator',
      company: 'Refugees International',
      description: "As keeper of the database, I managed to keep Refugees International's donor database clean, updated, and functional. During this time, I also managed a major database transition from one software provider to another and ensured that different systems across the company could share the same data.",
      dates: 'September 2010 - August 2014'
    }],
  apps: [
    {
      title: 'Succotash',
      tag: 'Farm Management Software',
      paragraph: "Succotash is a farm management software application built with a Rails/PostgreSQL backend and a React-enabled, Material-UI frontend with state managed in Redux. Farmers and gardeners can manage their crop cycles from planting through harvest. By providing a date to the application, users are able to view and edit the status of their farms and its sub-divisions, which allows the app to serve as both a storage of farm  history and a planner for future crop cycles.",
      url: 'https://succotash-app.herokuapp.com',
      sideLinks: [
        { text: 'Live App',
          url: 'https://succotash-app.herokuapp.com',
          bold: true,
          icon: 'fa-carrot'
        }, {
          text: 'Frontend',
          url: 'https://github.com/mattbechtel1/succotash-frontend',
          icon: gitIcon
        }, {
          text: 'Backend',
          url: 'https://github.com/mattbechtel1/succotash-backend',
          icon: gitIcon
        }
      ]
    }, {
      title: 'Catch 22: The Game',
      tag: 'Computer Game based on the Classic American Novel',
      paragraph: "Catch-22 is a novel by Joseph Heller. Catch-22: The Game honors the themes, characters, and events of that novel through a fun and humorous text-based strategy format. Messages are displayed at intervals with async/await functions. Players are provided with options with the goal of surviving as a bombardier over Italy during World War II. A balance of random-number generation and player decisions determine the result of each round. Staying true to the themes of the novel, the game is impossible to win. The game is built with a Rails/PostgreSQL backend and a React frontend with Semantic-UI components.",
      url: null,
      sideLinks: [
        { text: 'Video Demo',
          url: 'https://www.youtube.com/watch?v=bTLgXFCXypg',
          icon: 'fa-youtube'
        }, {
          text: 'Frontend',
          url: 'https://github.com/mattbechtel1/catch-22-game-frontend',
          icon: gitIcon
        }, {
          text: 'Backend',
          url: 'https://github.com/mattbechtel1/catch-22-backend',
          icon: gitIcon
        }
      ]
    }, {
      title: 'Metrobus 2020',
      tag: 'Bus Prediction Application for Commuters in and around Washington, DC',
      paragraph: "Utilizing WMATA's public API, Metrobus 2020 allows DC-based commuters to accurately predict bus and train arrivals, favorite their frequent stations and busstops, and set an alarm for when a bus approaches a stop. The app uses an uncluttered minimalist frontend written in vanilla JavaScript with Bulma components. The rails backend protects API keys and fetches data from WMATA, caching some data in a Redis database to prevent superfluous calls to the WMATA API. A simple sign-up and password system allows users' favorites to be persisted to the database for future use in the app.",
      url: 'https://dc-metrobus-2020.herokuapp.com',
      sideLinks: [
        { text: 'Live App',
          url: 'https://dc-metrobus-2020.herokuapp.com',
          bold: true,
          icon: 'fa-bus'
        }, {
          text: 'Github',
          url: 'https://github.com/mattbechtel1/Metrobus2020',
          icon: gitIcon
        }
      ]
    },
  ],
  schools: [
    {
      name: 'Flatiron School',
      degree: 'Software Engineering',
      description: 'Over a fifteen week period, I immersed myself in software engineering concepts, modern coding languages, and Agile software concepts. I built 5 working applications from scratch using Ruby, Rails, and JavaScript frameworks.',
      dates: 'October 2019 - February 2020'
    }, {
      name: 'Gettysburg College',
      degree: 'Bachelor of Arts',
      description: 'Anthropology & Religion (Double Major)',
      dates: 'August 2005 - May 2009'
    }
  ]
};
