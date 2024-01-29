import React, { useState, createElement } from 'react';
import { useSpring, animated } from 'react-spring';
import ReactDOM from "react-dom";
import './Pages.css';
import GridLayout from "react-grid-layout";

import lion from './images/lion.jpg';
import liontext from './images/Liontext.png';
import pumpkin from './images/pumpkinpaint.jpg';
import pumpkinText from './images/PumpkinText.png';
import apple from './images/applepicking.jpg';
import appleText from './images/AppleText.png';
import jewlery from './images/jewlerybox.jpg';
import jewleryText from './images/JewleryText.png';
import tumbler from './images/tumbler.jpg';
import tumblerText from './images/LaserTumbler.png';
import meandcat from './images/meandcat.jpg';
import CatText from './images/CatText.png';
import forestpaint from './images/forestpaint.jpg';
import ForestPaintText from './images/ForestPaintText.png';
import mountainpaint from './images/mountainpaint.jpg';
import MountainPaintText from './images/MountainPaintText.png';


import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';

  

const Hobbies = () => {
    const [isHidden, setIsHidden] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const [bounce, setDebounce] = useState(false);
    const [gridSize, setGridSize] = useState(1200);
    const [resizeBounce, setResizeBounce] = useState(true);
	const [height, setHeight] = useState(800);
	
    const layout = [
        { i: "Lion",x: 0, y: 0, w: 1, h: 1},
        { i: "Pumpkin", x: 1, y: 0, w: 1, h: 1},
        { i: "Apple", x: 2, y: 0, w: 1, h: 1},
        { i: "JewleryBox", x: 3, y: 0, w: 1, h: 1},
        { i: "Tumbler", x: 0, y: 1, w: 1, h: 1},
        { i: "Cat", x: 1, y: 1, w: 1, h: 1},
        { i: "Forest", x: 2, y: 1, w: 1, h: 1},
        { i: "Mountain", x: 3, y: 1, w: 1, h: 1},

      ];

 

    const handleClick = (event) => {
        if(!bounce){   
            
            setDebounce(true);
            if (event.target.id == "Hobbies"  ) {

				
                setIsHidden(false);
                const timer = setTimeout(() => {
                    setIsVisible(true);
					if(document.getElementById("container").offsetWidth != 0){
						setGridSize(document.getElementById("container").offsetWidth *.9);
                        
						setHeight(document.getElementById("bin").offsetHeight * 1.5);
					}
                }, 1000);

            }
            else if (event.target.id && event.target.tagName =="LI" ) {
        
                setIsVisible(false);
                const timer = setTimeout(() => {
                    setIsHidden(true);
                }, 500);
    
            }
        }
    };
	
    const updateSize = (event) =>{
        
        if(isVisible && resizeBounce){
            
            
            setGridSize(document.getElementById("container").offsetWidth*.9);
            const timer = setTimeout(() => {
                setHeight(document.getElementById("bin").offsetHeight* 1.5);
            }, 10);
            setResizeBounce(false);
        }
    }

    const fadeOutStyle = {
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 1s ease-out'
    };

    document.addEventListener('click', handleClick);
	window.addEventListener('resize', updateSize);
	
	
return (
    
    <div class={isHidden ? 'hidden' : ''}>
        <div style={fadeOutStyle}>

            <div class="container" style={{ width: "800" }}>
                <div id="container" class="textcontainer" >
                    <p>
                       Here's a pin board of projects and activities that I've done. Feel free to shuffle the photos around. Depending on your screen size, you may need to zoom in/out in order to move the photos!
                    </p>
                        
                    <GridLayout
                    className="layout"
                    layout={layout}
                    cols={4}
                    rowHeight={height}
                    autoSize={true}
                    width={gridSize}
					isResizable={false}
                    >


                        <div key="Lion">
                        <Polaroid  img1={lion} img2={liontext} />
                        </div>
                        <div key="Pumpkin">
                        <Polaroid  img1={pumpkin} img2={pumpkinText}/>
                        </div>
                        <div key="Apple">
                        <Polaroid  img1={apple} img2={appleText}/>
                        </div>
                        <div key="JewleryBox">
                        <Polaroid  img1={jewlery} img2={jewleryText}/>
                        </div>
                        <div key="Tumbler">
                        <Polaroid  img1={tumbler} img2={tumblerText} refered={true}/>
                        </div>
                        <div key="Cat">
                        <Polaroid  img1={meandcat} img2={CatText} refered={true}/>
                        </div>
                        <div key="Forest">
                        <Polaroid  img1={forestpaint} img2={ForestPaintText} refered={true}/>
                        </div>
                        <div key="Mountain">
                        <Polaroid  img1={mountainpaint} img2={MountainPaintText} refered={true}/>
                        </div>
                        </GridLayout>
	
                </div>
            </div>
        </div>
    </div>

);
};



function Polaroid(props) {
    const { img1, img2, refered} = props;
  
  
  
  
    return (

            <div style={{float:'left'}}class="polaroidFrame" >
                <div id={refered ? "bin" : ""} class="polaroidContainer">
                    <div >
                        <div >
                            <div class="polaroidImage">
                                <img draggable="false" class="polaroidImageInside" src={img1} alt="rockclimbing" />
                            </div>
                            <div class="polaroidText">
                                <img draggable="false" class="polaroidTextImage" src={img2} alt="rockclimbingtext" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
    );
  }


export default Hobbies;