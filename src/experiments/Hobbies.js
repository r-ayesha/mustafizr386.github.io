import React, { useState, createElement } from 'react';
import { useSpring, animated } from 'react-spring';
import ReactDOM from "react-dom";
import './Pages.css';
import GridLayout from "react-grid-layout";


import rockclimb from './images/RockClimb.jpg';
import boulderingText from './images/BoulderingText.png';
import brakejob from './images/Brakes.jpg';
import brakejobText from './images/BrakeText.png';
import carposter from './images/CarPosterCollage.jpg';
import carposterText from './images/CarPosterText.png';


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
        { i: "rockclimb",x: 0, y: 0, w: 1, h: 1},
        { i: "brakejob", x: 1, y: 0, w: 1, h: 1},
        { i: "carposter", x: 2, y: 0, w: 1, h: 1}
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
						setHeight(document.getElementById("container").offsetHeight * .6);
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
            //console.log(document.getElementById("image").offsetHeight *.6);
            setResizeBounce(false);
            setGridSize(document.getElementById("container").offsetWidth*.9);
			//setHeight(document.getElementById("image").offsetHeight * .6);
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
                       Here's a pin board of projects and activities that I've done. Feel free to shuffle the photos around.
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
                        <div  key="rockclimb"> 
                        <Polaroid  img1={rockclimb} img2={boulderingText}/>
                        </div>
                        <div key="brakejob">
                        <Polaroid  img1={brakejob} img2={brakejobText}/>
                        </div>
                        <div key="carposter">
                        <Polaroid  img1={carposter} img2={carposterText}/>
                        </div>
                        </GridLayout>
	
                </div>
            </div>
        </div>
    </div>

);
};



function Polaroid(props) {
    const { img1, img2} = props;
  
  
  
  
    return (

            <div style={{float:'left'}}class="polaroidFrame" >
                <div class="polaroidContainer">
                    <div class="crosshatch">
                        <div class="crosshatchrev">
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