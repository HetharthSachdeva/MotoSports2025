import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment, useEffect } from 'react';
import TagCloud from "TagCloud";
import './about.css';
import Timeline from "../eBaja-FB-essentials/timeline/timeline"
import AboutEventCard from "../eBaja-FB-essentials/aboutEventCard/aboutEventCard"
import MemberCard from '../eBaja-FB-essentials/memberCard/memberCard';
// import team from "./nonTechTeam.json"
import DomainComp from '../eBaja-FB-essentials/team/domain/domain';
import Faculty from '../eBaja-FB-essentials/team/domain/faculty';
import overall from "./overall.json"
import webTeam from "./webDevTeam.json"
import desnTm from "./designTeam.json"
import editTeam from "./editingTeam.json"
import spons from "./sponsTeam.json"
import pubrel from "./publicrelation.json"
import doc from "./docTeam.json"
import eventmanage from "./eventManage.json"
import facultyAdvisor from "./facultyAdvisor.json"

function Description() {
  return (
    <div className='flex flex-col items-center justify-center pt-5 sm:px-10 sm:py-6 text-lg'>
      <h1 className='font-albulaHeavy text-3xl sm:text-5xl font-semibold text-amber-900  mb-0 sm:mb-5 text-center'>Who Are We</h1>
      <p className='w-4/5 text-gray-600 mb-4'>
        <span className="text-red-700 block mb-10 text-sm sm:text-lg text-center font-albula">
          Motorsports is a dynamic and innovative club dedicated to pushing the boundaries of automotive technology and competitive racing. Our club has a track record of excellence, actively participating in a range of competitions where we showcase our skills and passion for motorsports.
          Through our commitment to excellence and state-of-the-art technologies, we have established ourselves as leaders within the Indian automotive sector. NIT Raipur Motorsports provides a platform for students to pursue their passions and demonstrate their abilities on a broader stage. Join us and experience the thrill of Motorsports at NIT Raipur!
        </span>
      </p>

      <h1 className=' font-albulaHeavy text-3xl sm:text-5xl font-semibold text-amber-900 mb-0 sm:mb-5 px-5 text-center'>What Do We Do</h1>
      <p className='w-4/5 text-gray-600'>
        <span className="text-red-700 block mb-20 text-center text-sm sm:text-lg font-albula">
          We, at NIT Raipur Motorsports, are a dedicated team of over 85 members who devote our time and expertise to creating robust and durable cars that outperform the competition. Our club is actively involved in two prestigious races eBaja and Formula Bharat, where we showcase our innovation, engineering prowess, and teamwork.
          Through rigorous testing, meticulous design processes, and a relentless pursuit of excellence, we push the boundaries of what’s possible in the realm of Motorsports. Join us on this exciting journey of innovation and competition!
        </span>
      </p>
    </div>
  )
}


function App() {

  return (
    <>
      <main className=' aboutPage flex flex-col justify-between items-center bg-modestBrown'>
        <div id='introDiv' className="w-85vw">
          <div className="ebaja2 flex justify-evenly">
            <Description />
          </div>

          <h1 className=' ebaja2 font-albulaHeavy text-5xl flex justify-center items-center text-amber-900 '>Events</h1>

          <div className="flex flex-col justify-center items-center p-0 sm:p-10 gap-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-4/5">
              <AboutEventCard {...events[0]} />
              <AboutEventCard {...events[2]} />
              <AboutEventCard {...events[1]} />
              <AboutEventCard {...events[3]} />
              <AboutEventCard {...events[4]} />
            </div>
          </div>



          <h1 className='ebaja2 font-albulaHeavy text-amber-900  text-4xl sm:text-5xl flex justify-center items-center mt-20 text-center'>FACULTY ADVISOR</h1>
          <Faculty data={facultyAdvisor} />

          <h1 className='ebaja2 font-albulaHeavy text-amber-900  text-4xl sm:text-5xl flex justify-center items-center mt-20 text-center'>OVERALL OPERATION HEAD</h1>
          <DomainComp data={overall} />

          <h1 className='ebaja2 font-albulaHeavy text-amber-900  text-4xl sm:text-5xl flex justify-center items-center mt-20 text-center '>WEB DEVELOPMENT</h1>
          <DomainComp data={webTeam} />

          <h1 className='ebaja2 font-albulaHeavy text-amber-900  text-4xl sm:text-5xl flex justify-center items-center text-center'>DESIGN</h1>
          <DomainComp data={desnTm} />

          <h1 className='ebaja2 font-albulaHeavy text-amber-900  text-4xl sm:text-5xl flex justify-center items-center text-center'>EDITING</h1>
          <DomainComp data={editTeam} />

          <h1 className='ebaja2 font-albulaHeavy text-amber-900  text-4xl sm:text-5xl flex justify-center items-center text-center'>SPONSORSHIP</h1>
          <DomainComp data={spons} />

          <h1 className='ebaja2 font-albulaHeavy text-amber-900  text-4xl sm:text-5xl flex justify-center items-center text-center'>PUBLIC RELATION</h1>
          <DomainComp data={pubrel} />

          <h1 className='ebaja2 font-albulaHeavy text-amber-900  text-4xl sm:text-5xl flex justify-center items-center text-center'>DOCUMENTATION</h1>
          <DomainComp data={doc} />

          <h1 className='ebaja2 font-albulaHeavy text-amber-900 text-4xl sm:text-5xl flex justify-center items-center text-center'>EVENT MANAGEMENT</h1>
          <DomainComp data={eventmanage} />


        </div>
      </main>
    </>
  )
}

export default App;

//Timeline-1 Data about Phases
const events = [
  {
    heading: "STEP 1",
    subHeading: "Alumni Meet",
    description: "NIT RAIPUR has a vast alumni network and conducts an alumni meet every year in which more than 300+ alumni holding senior positions in various companies visit our campus. We conduct a car showcasing event during the meet and also have an interactive session with them.",
    imgSrc: "../about-pics/event1.jpg",
    direction: "left",
  },
  {
    heading: "STEP 2",
    subHeading: "Workshops at AAVARTAN",
    description: "We conduct workshops and mini-events related to automobiles in AAVARTAN (tech fest).",
    imgSrc: "../about-pics/event2.jpg",
    direction: "right",
  },
  {
    heading: "STEP 3",
    subHeading: "Vehicle Showcasing at ECLECTIKA",
    description: "Showcasing our VEHICLE and giving the experience of driving in ECLECTIKA, Central India’s largest fest having a footfall of more than 30k+.",
    imgSrc: "../about-pics/event3.jpg",
    direction: "left",
  },
  {
    heading: "STEP 4",
    subHeading: "Road Shows",
    description: "Various road shows in front of our college main building are conducted by showcasing our vehicle, attracting a total of more than 1.5k+ local crowd and students along with the faculties.",
    imgSrc: "../about-pics/event5.jpg",
    direction: "right",
  },
  {
    heading: "STEP 5",
    subHeading: "Workshops Throughout the Year",
    description: "Our club regularly conducts workshops throughout the year in NIT Raipur and nearby colleges.",
    imgSrc: "../about-pics/event5.jpg",
    direction: "left",
  },
];
