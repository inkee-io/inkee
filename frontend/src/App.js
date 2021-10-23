import './App.css';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/home/home';
import CreateLobby from './pages/createLobby/createLobby';
import JoinLobby from './pages/joinLobby/joinLobby';
import PrestartLobby from './pages/prestartLobby/prestartLobby';
import SetupProfile from './pages/setupProfile/setupProfile'
import Game from './pages/game/game';
import GameDrawer from './pages/game/gameDrawer';
import GameGuesser from './pages/game/gameGuesser';
import testPage from './reactTesting/testPage';
import io from 'socket.io-client';

function App() {
  const [socket, setSocket] = useState(null);
  const history = useHistory();

  useEffect(() => {
    // Initialize Socket connection.
    const newSocket = io(`http://${window.location.hostname}:3001`, {
      transports: ['websocket', 'polling'],
      upgrade: true,
    });
    
    const reconnect = () => {
      newSocket.io.opts.transports = ["polling", "websocket"];
    };

    newSocket.on("connect_error", reconnect);
    setSocket(newSocket);

    // Clean-up routine for socket.
    return () => {
      newSocket.close();
      newSocket.off("connect_error", reconnect);
    }
  }, [setSocket]);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact render={(props) => (<Home socket={socket} history={history} {...props} />)}/>
          <Route path='/create' render={(props) => (<CreateLobby socket={socket} history={history} {...props} />)}/>
          <Route path='/join' render={(props) => (<JoinLobby socket={socket} history={history} {...props} />)}/>
          <Route path='/prestart' render={(props) => (<PrestartLobby socket={socket} history={history} {...props} />)}/>
          <Route path='/setup' render={(props) => (<SetupProfile socket={socket} history={history} {...props} />)}/>
          <Route path='/game' render={(props) => (<Game socket={socket} history={history} {...props} />)}/>
          <Route path='/game/gameDrawer' component={GameDrawer}/>
          <Route path='/game/gameGuesser' component={GameGuesser}/>
          <Route path='/testPage' component={testPage} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;