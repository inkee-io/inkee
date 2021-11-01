import './home.css'
import React, { useRef } from 'react'
import Logo from '../../assets/inkee-logo.png'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GameCanvas from '../../components/GameCanvas';
import { CanvasProvider } from "../../components/CanvasContext";
import { ClearCanvasButton } from "../../components/ClearCanvasButton";
import { JoinButton } from "../../components/JoinButton";
import { CreateButton } from "../../components/CreateButton";

function Home({socket, history}) {

  return (
    <div className='root'>
      <CanvasProvider>
        <div className='purpleSplat'>
          <div className='orangeSplat'>
            <div className='header'>
            <img className='logo' src={Logo} alt='inkee-logo'/>
            </div>
            <form>
              <input className='username' type='text' placeholder="enter username..."/>
            </form>
            <div align="center">
              <div className="homeDrawArea">
                <GameCanvas/>
              </div>
              <ClearCanvasButton/>
              <div>
                <JoinButton/>
              </div>
              <div>
                <CreateButton/>
              </div>
            </div>
          </div>
        </div>
      </CanvasProvider>
    </div>
  );
}
export default Home;