
import logo from '../assets/img/BERIDZE.png'
import me from '../assets/img/me.jpg'

import { useState } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'



function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    useGSAP(() => {
        gsap.fromTo(".item", {
            y: 15,
            stagger: 0.1,
            opacity: 0
        },{
            y: 0,
            stagger: 0.1,
            opacity: 1
        })
        gsap.fromTo(".logo", {
            opacity: 0,
            duration: 1,
        },{
            opacity: 1,
            duration: 1,

        })
        gsap.to(".for__char h1", {
            delay: 0.2,
            y: 0,

        })

        gsap.to(".left", {
            delay: 0.2,
            width: 0,
            duration:0.7,
        })
        gsap.to(".right", {
            delay: 0.2,
            width: 0,
            duration:0.7,
        })
    })

    return (
        <>
            <div className='main__header'>
                <nav className='header'>
                    <div className='header__content'>
                        <div>
                            <img className='logo' src={logo} alt="logo" />
                        </div>
                        <div>
                            <ul className= {isOpen ? "navbar active ": 'navbar'}>
                                <li className='item'><a href="">Home</a></li>
                                <li className='item'><a href="">About</a></li>
                                <li className='item'><a href="">Skills</a></li>
                                <li className='item'><a href="">Portfolio</a></li>
                                <li className='item'><a href="">Contact</a></li>
                            </ul>
                            <div className= {isOpen ? "bottom__nav active ": 'bottom__nav'}>
                                <p>© 2024 Zura. All rights are reserved</p>
                                <div className="icons">
                                    <ion-icon name="logo-facebook"></ion-icon>
                                    <ion-icon name="logo-instagram"></ion-icon>
                                    <ion-icon name="logo-linkedin"></ion-icon>
                                    <ion-icon name="logo-github"></ion-icon>
                                </div>
                            </div>
                        </div>
                        <div onClick={toggleMenu} className='burger'>
                            <div className={
                                isOpen ? "burger__line burger__line__1 active ": "burger__line burger__line__1"
                                }></div>
                            <div className={
                                isOpen ? "burger__line burger__line__2 active ": "burger__line burger__line__2"
                                }></div>
                            <div className={
                                isOpen ? "burger__line burger__line__3 active ": "burger__line burger__line__3"
                                }></div>
                        </div>
                    </div>
                </nav>

                <div className="hero">
                    <div className='img-decoration'>
                        <img className='my__img' src={me} alt="my__pic" />
                        <div className='left'></div>
                        <div className='right'></div>

                    </div>
                    <div className='hero__text'>
                        <div className='for__char'>
                            <h1>ZURA BERIDZE</h1>
                        </div>
                        <p>My name is Zura, and I am a front-end developer with experience in creating responsive and interactive user interfaces. I specialize in using technologies like HTML, CSS, and JavaScript, along with frameworks such as React.js. I’m passionate about building user-friendly applications and ensuring a seamless user experience.</p>
                        <div className='btn__div' >
                            <button className='btn'>Hire Me</button>
                        </div>
                    </div>

                    <div className="bottom__hero item">
                        <div>© 2024 Zura. All rights are reserved</div>
                        <div className="icons">
                            <ion-icon name="logo-facebook"></ion-icon>
                            <ion-icon name="logo-instagram"></ion-icon>
                            <ion-icon name="logo-linkedin"></ion-icon>
                            <ion-icon name="logo-github"></ion-icon>
                        </div>
                    </div>                   
                </div>
            </div>
        </>
    )
}

export default Header
