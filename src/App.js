import './App.css';
import JgLogo from "./statics/svg/pianoBg.js";

function App() {
  return (
    <div className="page">
      <div className="bgimg">
        <div className="navbar">
          <div>
            <JgLogo />
          </div>
          <div className="navlinkgroup">
            <div className="navlink">
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

      </div>
      
    </div>
  );
}

export default App;
