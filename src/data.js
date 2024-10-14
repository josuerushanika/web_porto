// importing Projects screenShots 
import portfolioPath from './Images/techweb.png';
import moviesPath from './Images/movie_app.jpeg';
import spacePath from './Images/space_traveler.jpeg';
import countDown from './Images/covid.jpg';
import todo from './Images/to_do_list.png';
import calculator from './Images/calc-app.gif';
import geomap from './Images/geomap.jpg'
import ccna from './Images/ccna.jpg'
import gns3 from './Images/gns3.jpg'
import cyber from './Images/cybersec.jpg'
import splunk from './Images/splunk.jpeg'
import wazuh from './Images/wazuh.png'
import sophos from './Images/sophos.png'
import manageengine from './Images/manageengine.png'
import office from './Images/office'
import traccar from './Images/gps.png'
import doctor from './Images/doctor.jpg'

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


  {
    id: 7,
    title: ' Geo_map_call_app ',
    description: 'This is a React-based application that combines location-based features and real-time video chat functionality. The app allows users to explore and interact with a map, view locations of interest, and initiate video chat sessions with other users at specific locations.',
    image: geomap,
    tags: ['HTML', 'Css ', 'JavaScript'],
    liveUrl: 'https://github.com/josuerushanika/Geo_map_call_app',
    sourceUrl: 'https://github.com/josuerushanika/Geo_map_call_app'
  },

   {
    id: 8,
    title: 'GPS Tracking System',
    description: ' Traccar is a Web Application used to monitor and manage the real-time location of vehicles or assets, enhancing fleet management, logistics, and employee safety by providing detailed tracking data, alerts, and reporting through a centralized platform',
    image: traccar,
    tags: ['HTML', 'Css ', 'JavaScript'],
    liveUrl: 'https://github.com/josuerushanika/traccar',
    sourceUrl: 'https://github.com/josuerushanika/traccar'
  },

    {
    id: 9,
    title: 'Doctors Appoinments',
    description: 'Doctors Appoinments frontend is react forntend application for doctor book appoinemnts. This applications is responsive and users can load, create, and delete doctors and reservations. Users need to sign up or sign in to access application.',
    image: doctor,
    tags: ['HTML', 'Css ', 'JavaScript'],
    liveUrl: 'https://doctor-appointment-cx5g.onrender.com/',
    sourceUrl: 'https://github.com/josuerushanika/doctor_appoitment_front_end'
  },

  {
    id: 10,
    title: ' CCNA ',
    description: 'CCNA (Cisco Certified Network Associate) is a certification from Cisco, the world most famous company for manufacturing and selling networking equipment. ',
    image: ccna,
  },

  {
    id: 11,
    title: ' GNS3 ',
    description: 'Simulation of An enterprise network(In GNS3) consists of physical and virtual networks and protocols that serve the dual purpose of connecting all users and systems on a local area network (LAN) to applications in the data center and cloud as well as facilitating access to network data and analytics. ',
    image: gns3,
  },

  {
    id: 12,
    title: ' Cyber ',
    description: ' I am a Cybersecurity consultant Expert who advises on and implements measures to protect digital systems and data from security threats.',
    image: cyber,
  },

  {
    id: 13,
    title: ' Splunk',
    description: 'I use Splunk  a powerful platform for searching, monitoring, and analyzing machine-generated data in real-time, helping organizations to gain insights, detect security threats, and improve operational efficiency ',
    image: splunk,
    liveUrl: 'https://github.com/josuerushanika/Splunk-Tools',
    sourceUrl: 'https://www.splunk.com/'
  },

  {
    id: 14,
    title: 'Wazuh ',
    description: 'I use Wazuh an open-source security platform that provides threat detection, visibility, compliance monitoring, and incident response through log analysis, intrusion detection, and vulnerability assessment ',
    image: wazuh,
    liveUrl: 'https://github.com/josuerushanika/wazuh',
    sourceUrl: 'https://wazuh.com/'
  },

  {
    id: 15,
    title: 'Sophos ',
    description: 'I use Sophos  a cybersecurity solution that provides advanced threat protection, including firewall, antivirus, encryption, and endpoint security, to safeguard networks, devices, and data from cyber threats ',
    image: sophos,
    liveUrl: 'https://www.sophos.com/en-us',
    sourceUrl: 'https://www.sophos.com/en-us'
  },

  {
    id: 16,
    title: 'manageengine ',
    description: 'I use ManageEngine an integrated IT management software suite that provides tools for managing networks, servers, applications, endpoints, and security, helping organizations optimize their IT operations and improve efficiency. ',
    image: manageengine,
    liveUrl: 'https://www.manageengine.com/',
    sourceUrl: 'https://www.manageengine.com/'
  },

  {
    id: 17,
    title: 'office ',
    description: 'I use Microsoft 365 (O365) is a cloud-based productivity suite that includes tools like Word, Excel, PowerPoint, Outlook, and cloud services like OneDrive and Teams, enabling collaboration, communication, and document management across organizations, while seamlessly integrating with Active Directory (AD) for asynchronous user management and access control ',
    image: office,
    liveUrl: 'https://www.office.com/',
    sourceUrl: 'https://www.office.com/'
  },

  {
    id: 18,
    title: 'script ',
    description: 'Python Scripts for Network Engineers is a collection of scripts that I use every day as a network engineer to make my life easier ',
    image: script,
    liveUrl: 'https://www.office.com/',
    sourceUrl: 'https://www.office.com/'
  },
];
//skills 
export const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Ruby On Rails ', 'MySQL', 'Postgresql', 'WebPack', 'Redux', 'Jest','Rsepc', 'Git', 'GitHub','Windows server','Ubuntu Lunix', 'Kali Lunix','Networking','SEIM', 'End Point', 'Threat Intelligent'];
