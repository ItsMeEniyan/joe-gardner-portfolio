import './App.css';
//import Howl from "howler";
import JgLogo from "./statics/svg/pianoBg.js";
import JgName from "./statics/svg/jgName.js";
import Dp from "./statics/png/joegardner.png";
import Soul from "./statics/png/soul.png";
//import Play from "./statics/png/play.png";
import  { Component } from 'react';

import { motion } from "framer-motion"
import Insta from './statics/svg/insta';
import Linkedin from './statics/svg/linkedin';
import Github from './statics/svg/github';
import Behance from './statics/svg/behance';
import Dribbble from './statics/svg/dribbble';
//import Pause from "./statics/png/pause.png";

//import Song from ".statics/soundtrack/cristoRedentor.mp3";
/*
const audioClips = [
  {sound: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", label: "cristo"}
]
*/
const soul = {
  hidden: {
    opacity:0
  },
  visible: {
    opacity:1,
    transition: { duration: 3, delay: 1}
  }
}
const aboutsection = {
  hidden: {
    opacity:0,
    x:"-100px"
  },
  visible: {
    opacity:1,
    x:"0px",
    transition: { duration: 1, ease: 'easeInOut'}
  }
}
const jgname = {
  hidden: {
    opacity:0,
    x:"100px"
  },
  visible: {
    opacity:1,
    x:"0px",
    transition: { duration: 1, ease: 'easeInOut'}
  }}
class App extends Component {
  /*SoundPlay =(src)=>{
    const sound = new Howl({
      src
    })
    sound.play();
  }
  /*renderButtonSound =()=>{
    return audioClips.map((soundObj, index)=>{
      return (
        <button key={index} onClick={()=> this.SoundPlay(soundObj.sound)}>{soundObj.label}</button>
      )
    })
  }*/
  
  render(){
  return (
    <div>
    <div className="entiremobilescreen">
      <h1>View on Desktop</h1>
      <img src={Soul} alt="joe-gardners-soul"></img>
      <p>mobile view is under development</p>
    </div>
    <div className="entiredesktopscreen">
    <div className="page">
      <div className="bgimg">
      <div className="content">
        <div className="navbar">
        <div className="navlogo" >
          <a href="https://github.com/ItsMeEniyan/joe-gardner-portfolio">
            <JgLogo />
          </a>
          </div>
          <div className="navlinkgroup">
            <div className="navlink" id="selected">
              Home
            </div>
            <div className="navlink">
              About
            </div>
            <div className="navlink">
              Work
            </div>
            <div className="navlink">
              Contact
            </div>

          </div>

        </div>
        <div className="home">
          <motion.div className="jgname"
            variants={jgname}
            initial="hidden"
            animate="visible">
            <JgName />
            {/*<div className="soundtrackcontainer">
            <p>Click to listen my kinda music</p>
            <img src={Play} alt="Play-button" id="icon"></img>
            </div>
            {this.renderButtonSound()}*/}
          </motion.div>
          <div className="jgpic">
            <img src={Dp} alt="joe-gardner-profile"></img>
          </div>
          <motion.div className="jgsoul"
            variants={soul}
            initial="hidden"
            animate="visible">
            <img src={Soul} alt="joe-gardners-soul"></img>
          </motion.div>
          <motion.div className="smallsection"
            variants={aboutsection}
            initial="hidden"
            animate="visible"
          >
            <p className="smallhead">Jazz Musician</p>
            <p className="smallcontent">Based in New York City, I’m musician and Middle school band teacher</p>
            <p className="smallquotes">"Life is full of possibilities, you just need to know where to look!"</p>
          </motion.div>
        </div>
        </div>
      </div>
      
    </div>
    <div className="inspiration">
      <p>Developed from 
      <a href="https://dribbble.com/shots/15185698-Portfolio-Joe-Gardner-Conceptual-design"> my Dribble shot </a>
       which was inspired by the character Joe Gardner from the Pixar film Soul</p>
    </div>
    <div className="footer">
      <motion.a href="https://github.com/ItsMeEniyan" className="items"
      whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}>
      <Github />
      </motion.a>
      <motion.a href="https://www.linkedin.com/in/eniyan-t-b248a0189/" className="items"
      whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}>
    
      <Linkedin/>
      </motion.a>
      <motion.a href="https://www.behance.net/eniyan_t" className="items"
      whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}>
    
      <Behance/>
      </motion.a>
      <motion.a href="https://dribbble.com/eniyant" className="items"
      whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    >
      <Dribbble/>
      </motion.a>
      <motion.a href="https://www.instagram.com/_eniyan_/" className="items"
      whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}>
    
      <Insta/>
      </motion.a>


    
    </div>
    </div>
    </div>
  );
}
}

export default App;
