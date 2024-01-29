import React, { useState, createElement } from 'react';
import { useSpring, animated } from 'react-spring';
import ReactDOM from "react-dom";
import './Pages.css';
import TypingEffect from './effects/TypingEffect';
import myImage from './images/Sunset.jpg';


const Portfolio = () => {
    const [isHidden, setIsHidden] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [bounce, setDebounce] = useState(false);


    const handleClick = (event) => {

        if (!bounce) {
            setDebounce(true);
            if (event.target.id === "Home") {

                setIsHidden(false);
                const timer = setTimeout(() => {
                    setIsVisible(true);
                }, 1000);
                return () => clearTimeout(timer);
            }
            else if (event.target.id && event.target.tagName == "LI") {

                setIsVisible(false);
                const timer = setTimeout(() => {
                    setIsHidden(true);
                }, 500);
                return () => clearTimeout(timer);
            }
        }
    };


    const fadeOutStyle = {
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 1s ease-out',
    };


    document.addEventListener('click', handleClick);



    return (
        <div class={isHidden ? "banner" :"bannerHome"}>
            <h1>Ayesha Rahman</h1>
            <p>The landing page for all things related to me.</p>

            <div class={isHidden ? 'hidden' : ''}>
                <div style={fadeOutStyle}>
                        <div class="textcontainer" style={{textAlign: 'center'}}>
                            <TypingEffect text="Hi there!" speed={1} />
                            <TypingEffect text="—————————————————————————————————————————————————————————————————————————————————————————" speed={1} />
                            <TypingEffect text="I’m Ayesha, and here you can see a glimpse into my life. Hovering over the sidebar, you can find some broad info about me, a pinboard of my hobbies, a collection of my skills, and a place to contact me.  
" speed={5} />

                        </div>
                </div>
            </div>
        </div>
    );
};


export default Portfolio;