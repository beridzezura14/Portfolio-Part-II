import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'


function PagesHeader() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    useGSAP(() => {
        gsap.to(".left__side" , {
        delay: 0.5,
        x: '-100%',
        })
        gsap.to(".right__side" , {
        delay: 0.5,
        x: '100%',
        })
    })

    return (
        <div>
            <div className="main">
                <div className="opening">
                <div className="left__side"></div>
                <div className="right__side"></div>
                </div>
            </div>  
            <div className='main__header about__header__content'>
                <div className='decor__lines'>
                    <div className='decorline__item decorline__item__1'></div>
                    <div className='decorline__item decorline__item__2'></div>
                    <div className='decorline__item decorline__item__3'></div>
                    <div className='decorline__item decorline__item__4'></div>
                </div>
                <nav className='header'>
                    <div className='header__content'>
                        <div>
                            <h1 className="logo">Be</h1>
                        </div>
                        <div>
                            <ul className= {isOpen ? "navbar active ": 'navbar'}>
                                <li className='item'><a href="/">Home</a></li>

                                <li className='item'><a href="/About">About</a></li>
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
            </div>
        </div>
    )
}

export default PagesHeader
