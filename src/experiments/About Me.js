import React, { useState, createElement } from 'react';
import { useSpring, animated } from 'react-spring';
import ReactDOM from "react-dom";
import './Pages.css';
import TypingEffect from './effects/TypingEffect';

const AboutMe = () => {
    const [isHidden, setIsHidden] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const [bounce, setDebounce] = useState(false);


    const handleClick = (event) => {
        if (!bounce) {

            setDebounce(true);
            if (event.target.id == "About Me") {

                setIsHidden(false);
                const timer = setTimeout(() => {
                    setIsVisible(true);
                }, 1000);

            }
            else if (event.target.id && event.target.tagName == "LI") {

                setIsVisible(false);
                const timer = setTimeout(() => {
                    setIsHidden(true);
                }, 500);

            }
        }
    };


    const fadeOutStyle = {
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 1s ease-out'
    };

    document.addEventListener('click', handleClick);

    return (

        <div class={isHidden ? 'hidden' : ''}>
            <div style={fadeOutStyle}>

                <div class="container" style={{ width: "800" }}>
                    <div class="textcontainer">
                        <p>
                            I am currently a high school senior interested in pursuing Computer Science and Engineering.
                        </p>
                        <p>
                            For the most part now I've been expanding my skills in software by taking classes at my high school and creating small projects and video games in my spare time.
                        </p>
                        <p>
                            If I'm not busy working on my technical skills, I enjoy quality time with friends and family, indulging in painting, bouldering, sketching, reading, and building my garden.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};


export default AboutMe;