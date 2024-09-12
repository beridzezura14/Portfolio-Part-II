import PagesHeader from "../pagesHeader";
import '../about/about.css'
import '../about/aboutMedia.css'

import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);



const peesonalInfo = [
    {   
        id: 1,
        name: "Name",
        answer: "Zura Beridze"
    },
    {   
        id: 2,
        name: "Address",
        answer: "Address not mention"
    },
    {   
        id: 3,
        name: "Stady",
        answer: "Georgian Tecnical University"
    },
    {   
        id: 4,
        name: "Degree",
        answer: "Telecomunication Specialist"
    },
    {   
        id: 5,
        name: "Current Specialty",
        answer: "Front-End Developer"
    },
    {   
        id: 6,
        name: "Mail",
        answer: "zuraberidze12@gmail.com"
    },
    {   
        id: 7,
        name: "Phone",
        answer: "+995 558 29 43 64"
    },
    {   
        id: 8,
        name: "Freelancer",
        answer: "Avalable"
    },
    
]
const skills = [
    {   
        id: 1,
        name: "HTML",
        percentage: "95"
    },
    {   
        id: 2,
        name: "CSS",
        percentage: "90"
    },
    {   
        id: 3,
        name: "Javascript",
        percentage: "60"
    },
    {   
        id: 4,
        name: "React.JS",
        percentage: "30"
    },
    {   
        id: 5,
        name: "Python",
        percentage: "10"
    },
    {   
        id: 6,
        name: "SCSS",
        percentage: "70"
    },
   
]
const experience = [
    {   
        id: 1,
        name: "Global-Erty",
        position: "instalator",
        date: "2018-2020"
    },
    {   
        id: 2,
        name: "Architectural Service",
        position: "Technical Specialist",
        date: "2020-2022"
    },
    {   
        id: 3,
        name: "Ministry of Defence",
        position: "Informaco Tecnology Specialist (IT specialist)",
        date: "2022 - todey"
    },
   
]




function About() {
    useGSAP(() => {
        gsap.fromTo(".fade", {
            delay: 0.5,
            opacity: 0,
            stagger: 0.1,
        },{
            delay: 0.5,
            opacity: 1,
            stagger: 0.2,
            scrollTrigger:{
                trigger: ".fade"
            }
        })
        gsap.from( ".knowledge__level", {
                delay: 0.5,
                x: '-100%',
                duration: 1,
                stagger: 0.1,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: ".knowledge__level",
                }
            }
        )
        gsap.fromTo('.per__item', {
            delay: 1,
            opacity: 0,
            stagger: 0.1,
            ScrollTrigger: {
                trigger: '.per__item'
            }
        }, {
            delay: 1,
            opacity: 1,
            stagger: 0.1,
            ScrollTrigger: {
                trigger: '.per__item'
            }
        })

    })
    return (
        <>
            <PagesHeader />
            <div className="about__content">
                <div className="about__text fade">
                    <h2 className="about__heads">Biography</h2>
                    <p>I’m Zura, a web developer specializing in React.js and other web technologies. I have strong skills in HTML, CSS, and JavaScript, with experience in using GSAP for animations. Im proficient in GitHub and have a solid understanding of both JavaScript and Python. Currently, Im working on a project to develop a search engine and am exploring opportunities to work as a freelancer. I have strong skills in HTML, CSS, and JavaScript, with experience in using GSAP for animations. Im proficient in GitHub and have a solid understanding of both JavaScript and Python. Currently, Im working on a project to develop a search engine and am exploring opportunities to work as a freelancer.</p>
                    <div className='btn__div' >
                        <button className='btn btn__about'>Download CV</button>
                    </div>
                </div>
                <div className="personal__info fade">
                    <div>
                        <h2 className="about__heads">Personal Info</h2> 
                        <div className="per__info" >
                            {
                                peesonalInfo.map(item => (
                                    <div className="per__item" key={item.id}>
                                        <div> <b>{item.name}: </b> {item.answer}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <h2 className="about__heads">Skills</h2> 
                        <div className="per__info" >
                            {
                                skills.map(item => (
                                    <div className="" key={item.id}>
                                        <div className="name__percentage">
                                            <div>{item.name}</div>  
                                            <div>{item.percentage}%</div>
                                        </div>
                                        <div className="percentage__line">
                                            <div className="knowledge__level"
                                                style={
                                                    {
                                                        width: `${item.percentage}%`,
                                                        backgroundColor: `#3B3B3B`,
                                                        height: `4px`,
                                                        position: `relative`,
                                                        zIndex: `-1`
                                                    }
                                                }
                                            ></div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="personal__info personal__info__exp fade">
                    <div>
                        <h2 className="about__heads">Work Experionce</h2> 
                        <div className="per__info" >
                            {
                                experience.map(item => (
                                    <div className="exp__item" key={item.id}>
                                        <h3><b>{item.name}</b></h3>
                                        <div>{item.position}</div>
                                        <div className="exp__date">{item.date}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
