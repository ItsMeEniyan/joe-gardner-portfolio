import './App.css';
//import Howl from "howler";
import JgLogo from "./statics/svg/pianoBg.js";
import JgName from "./statics/svg/jgName.js";
import Dp from "./statics/png/joegardner.png";
import Soul from "./statics/png/soul.png";
//import Play from "./statics/png/play.png";
import  { Component } from 'react';

//import Pause from "./statics/png/pause.png";

//import Song from ".statics/soundtrack/cristoRedentor.mp3";
/*
const audioClips = [
  {sound: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", label: "cristo"}
]
*/
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
          <div className="jgname">
            <JgName />
            {/*<div className="soundtrackcontainer">
            <p>Click to listen my kinda music</p>
            <img src={Play} alt="Play-button" id="icon"></img>
            </div>
            {this.renderButtonSound()}*/}
          </div>
          <div className="jgpic">
            <img src={Dp} alt="joe-gardner-profile"></img>
          </div>
          <div className="jgsoul">
            <img src={Soul} alt="joe-gardners-soul"></img>
          </div>
          <div className="smallsection">
            <p className="smallhead">Jazz Musician</p>
            <p className="smallcontent">Based in New York City, I’m musician and Middle school band teacher</p>
            <p className="smallquotes">"Life is full of possibilities, you just need to know where to look!"</p>
          </div>
        </div>
        </div>
      </div>
      
    </div>
    <div>
      <h1>My other projects Here</h1>
      <p>Under Development......</p>
    </div>
    </div>
  );
}
}

export default App;
