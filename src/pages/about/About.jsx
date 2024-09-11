import PagesHeader from "../pagesHeader";
import '../about/about.css'
import '../about/aboutMedia.css'

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
        name: "Current შpecialty",
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

function About() {
    return (
        <>
            <PagesHeader />
            <div className="about__content">
                <div className="about__text">
                    <h2 className="about__heads">Biography</h2>
                    <p>I’m Zura, a web developer specializing in React.js and other web technologies. I have strong skills in HTML, CSS, and JavaScript, with experience in using GSAP for animations. Im proficient in GitHub and have a solid understanding of both JavaScript and Python. Currently, Im working on a project to develop a search engine and am exploring opportunities to work as a freelancer. I have strong skills in HTML, CSS, and JavaScript, with experience in using GSAP for animations. Im proficient in GitHub and have a solid understanding of both JavaScript and Python. Currently, Im working on a project to develop a search engine and am exploring opportunities to work as a freelancer.</p>
                    <div className='btn__div' >
                        <button className='btn btn__about'>Download CV</button>
                    </div>
                </div>
                <div className="personal__info">
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
                </div>




                <div className="about__text">
                    <h2 className="about__heads">Biography</h2>
                    <p>I’m Zura, a web developer specializing in React.js and other web technologies. I have strong skills in HTML, CSS, and JavaScript, with experience in using GSAP for animations. Im proficient in GitHub and have a solid understanding of both JavaScript and Python. Currently, Im working on a project to develop a search engine and am exploring opportunities to work as a freelancer. I have strong skills in HTML, CSS, and JavaScript, with experience in using GSAP for animations. Im proficient in GitHub and have a solid understanding of both JavaScript and Python. Currently, Im working on a project to develop a search engine and am exploring opportunities to work as a freelancer.</p>
                    <div className='btn__div' >
                        <button className='btn btn__about'>Download CV</button>
                    </div>
                </div>


                
            </div>
        </>
    )
}

export default About
