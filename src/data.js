// importing Projects screenShots 
import portfolioPath from './Images/techweb.png';
import moviesPath from './Images/movie_app.jpeg';
import spacePath from './Images/space_traveler.jpeg';
import countDown from './Images/covid.jpg';
import todo from './Images/to_do_list.png';
import calculator from './Images/calc-app.gif';

export const projects = [
  {
    id: 1,
    title: 'Rwanda-Conference',
    description: 'A conference website is a dedicated online platform that provides information and resources related to a specific conference or event. It serves as a central hub for attendees, organizers, and interested individuals to access details about the conference, such as the schedule, agenda, speakers, registration information, venue location, and other relevant information.',
    image: portfolioPath ,
    tags: ['vanilla js', 'Css', 'HTML'],
    liveUrl: 'https://josuerushanika.github.io/Rwanda-Conference/index.html',
    sourceUrl: 'https://github.com/josuerushanika/Rwanda-Conference'
  },
  {
    id: 2,
    title: 'Movies App',
    description: 'Movie app is a website that shows the different lists of movies depending on a chosen category  and gives you the ability to add a like,and the number of ,likes  ,a comment , reserve a movie , and add a comment for a selected movie.Built Using API and Javascript Webpack.and HTML CSS',
    image: moviesPath,
    tags: ['JavaScript', 'Webpack', 'Html', 'Css'],
    liveUrl: 'https://josuerushanika.github.io/Capstone_2/dist/',
    sourceUrl: 'https://github.com/josuerushanika/Capstone_2'
  },
  {
    id: 3,
    title: 'Space Travelers Hub',
    description: 'Space Traveler is a React web application designed to provide users with an immersive experience of space exploration. This app allows users to explore a list of rockets  dragons, missions, enabling them to reserve or cancel their bookings, users can join or leave missions, and their reserved items ',
    image: spacePath,
    tags: ['React', 'Css', 'Redux'],
    liveUrl: 'https://space-travelers-f2ji.onrender.com/',
    sourceUrl: 'https://github.com/josuerushanika/space-travelers'
  },
  {
    id: 4,
    title: 'COVID country health app',
    description: 'A COVID country health app with API to display the latest updates on COVID-19 cases in a specific country, Access to real-time data on COVID-19 cases, deaths, and recoveries in a specific country or region .',
    image: countDown,
    tags: ['HTML ', 'css', 'React', 'Redux'],
    liveUrl: 'https://covid19app3.netlify.app/',
    sourceUrl: 'https://github.com/josuerushanika/Covid19-healthcareapp'
  },
  {
    id: 5,
    title: 'Math Magician',
    description: 'A Math Magician is a simple web application that generates random math problems for users to solve. In this explanation, we will use React, a popular JavaScript library for building user interfaces',
    image: calculator,
    tags: ['React', 'Redux ', 'Css'],
    liveUrl: 'https://math-magician-josuerushanika.onrender.com/',
    sourceUrl: 'https://github.com/josuerushanika/math-magician'
  },
  {
    id: 6,
    title: 'To-do list ',
    description: 'A to-do list project refers to a systematic approach of organizing and managing tasks or activities that need to be completed within a specific timeframe. It involves creating a list of tasks, setting priorities, tracking progress, and ultimately completing the tasks.',
    image: todo,
    tags: ['HTML', 'Css ', 'JavaScript'],
    liveUrl: 'https://josuerushanika.github.io/to-do-list/dist/',
    sourceUrl: 'https://github.com/josuerushanika/to-do-list'
  },
];
//skills 
export const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Ruby On Rails ', 'MySQL', 'Postgresql', 'WebPack', 'Redux', 'Jest','Rsepc', 'Git', 'GitHub','Windows server','Lunix','Networking'];
