import React, { useState, createElement } from 'react';
import { useSpring, animated } from 'react-spring';
import ReactDOM from "react-dom";
import './Pages.css';
import ReactCardFlip from 'react-card-flip';
import FlipCard from './effects/FlipCard';

const Skills = () => {
    const [isHidden, setIsHidden] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const [bounce, setDebounce] = useState(false);


    const [Java, JavaFlipped] = useState(false);
    const [Autodesk, PythonFlipped] = useState(false);
    const [JavaScript, JavaScriptFlipped] = useState(false);
    const [VBA, VBAFlipped] = useState(false);
    const [Lua, LuaFlipped] = useState(false);

  const handleCardClick = (event) => {
      if (!isHidden & event.target.tagName != "LI") {
        
          if (event.target.id === "Java") {
              JavaFlipped(!Java);
          }
          else if (event.target.id === "Autodesk") {
              PythonFlipped(!Autodesk);
          }
          else if (event.target.id === "JavaScript") {
              JavaScriptFlipped(!JavaScript);
          }
          else if (event.target.id === "VBA") {
            VBAFlipped(!VBA);
        }
        else if (event.target.id === "Lua") {
            LuaFlipped(!Lua);
        }
      }
  };

    const handleClick = (event) => {
        if (!bounce) {

            setDebounce(true);
            if (event.target.id === "Skills") {

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
                    <p>Here's some more information on both my technological skills and my soft skills!:</p> 

                        <FlipCard front="Java" back="Java is what I’m best in and is what I've garnered the most expertise in, mostly through school and small projects. It’s hands down my go-to language and is what I most often reach for. " 
                        frontCSS={{backgroundColor: 'orange', width: '200px'}} backCSS={{ width: '400px',backgroundColor: '#e67e00'}}  click={Java} clickHandler={handleCardClick}/>

                        <FlipCard front="Autodesk" back="I’ve used Autodesk CAD and Revit throughout highschool, but I’m best with Inventor. Using Inventor is therapeutic for me and there's so much versatility within the app. Currently, I’m in a course through my Engineering class to get an Inventor certification." 
                        frontCSS={{backgroundColor: 'CornflowerBlue', width: '200px'}} backCSS={{ width: '400px', backgroundColor: '#5F9EA0'}}  click={Autodesk} clickHandler={handleCardClick}/>

                        <FlipCard front="JavaScript" back="Javascript isn't exactly my first preference, but creating this website using Visual Code made me appreciate the language a lot more. I am to improve this skill over time!" 
                        frontCSS={{backgroundColor: 'Yellow', width: '200px', color: 'black'}} backCSS={{ width: '400px', backgroundColor: '#CCCC00', color: 'black'}} click={JavaScript} clickHandler={handleCardClick}/>

                        <FlipCard front="VBA" back="This is a language that I absolutely abhor, but for some reason is also the one that I have the most professional experience with. I've made many PowerApps applications and Excel macros with this language and while making those tools, I began to appreciate the other languages on this list much more." 
                        frontCSS={{backgroundColor: '#018749', width: '200px'}} backCSS={{ width: '400px', backgroundColor: '#00563B'}} click={VBA} clickHandler={handleCardClick}/>

                        <FlipCard front="Lua" back="Lua is the language I pick for a dream project because I love it. All my passion projects are made in Lua and will keep being made in Lua for the forseeable future." 
                        frontCSS={{backgroundColor: '#00008B', width: '200px'}} backCSS={{ width: '400px', backgroundColor: '#3333A2'}} click={Lua} clickHandler={handleCardClick}/>
                    </div>
                </div>
            </div>
        </div>

    );
};


export default Skills;