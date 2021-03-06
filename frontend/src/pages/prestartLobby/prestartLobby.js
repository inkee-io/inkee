import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import './prestartLobby.css';
import { UserProfile } from '../../components/UserProfile';
import {
  LinkedinShareButton,
  FacebookMessengerShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from 'react-share';
import {
  LinkedinIcon,
  FacebookMessengerIcon,
  TelegramIcon,
  TumblrIcon,
  WhatsappIcon
} from 'react-share';
import Sound from '../../assets/buttonClick.mp3';



function PrestartLobby({socket, history}) {
  const [inviteCode, setInviteCode] = useState('');
  const [inviteCodeURL, setInviteCodeURL] = useState(window.location.origin);
  const [users, setUsers] = useState([]);

  window.history.replaceState(null, 'Inkee Prestart Lobby',
    `/${sessionStorage.getItem('inviteCode')}`);

  // Copy button setup.
  useEffect(() => {
    const copyBtn = document.querySelector('#copy.copyBtn');
    const handleClick = (e) => {
      const ButtonClick = new Audio(Sound);
      ButtonClick.play();

      e.preventDefault();
      const gameLink = document.getElementById('gameLink').value;
      navigator.clipboard.writeText(gameLink);
    };

    copyBtn.addEventListener('click', handleClick);

    return () => {
      copyBtn.removeEventListener('click', handleClick);
    };
  }, []);

  
  // User routines.
  useEffect(() => {
    const renderUserAvatar = (user) => {
      const userCanvas = document.getElementById(`${user.uid}-avatar`);
      const context = userCanvas.getContext('2d');
      const image = new Image();
      image.onload = () => {
        context.drawImage(image, 0, 0, userCanvas.width, userCanvas.height);
      };
      image.src = user.avatar;
    };

    const renderAvatars = (users) => {
      users.map((user) => {
        renderUserAvatar(user);
      });
    };

    const loadPlayers = (users) => {
      setUsers(users);
      renderAvatars(users);
    };

    socket.on('getPlayers', loadPlayers);
  
    const loadNewPlayer = (userData) => {
      setUsers((prevUsers) => {
        const newUsers = [...prevUsers, userData];
        return newUsers;
      });
      console.log(userData);
      renderUserAvatar(userData);
    };

    socket.on('newPlayer', loadNewPlayer);

    const disconnectPlayer = (userId) => {
      setUsers((prevUsers) => {
        const newUsers = prevUsers.filter((user) => user.uid !== userId);
        return newUsers;
      });
    };

    socket.on('disconnection', disconnectPlayer);

    const handleDisconnectPlayer = () => {
      sessionStorage.clear();
      history.push({
        pathname: '/',
      });
    };
    socket.on('disconnectPlayer', handleDisconnectPlayer);

    socket.emit('getPlayers');

    return () => {
      socket.off('getPlayers', loadPlayers);
      socket.off('newPlayer', loadNewPlayer);
      socket.off('disconnection', disconnectPlayer);
      socket.off('disconnectPlayer', handleDisconnectPlayer);
    };
  }, [socket]);

  // Start-game routines.
  useEffect(() => {
    const startGame = () => {
      history.push({
        pathname: '/game',
      });
    };
    socket.on('startGame', startGame);

    return () => {
      socket.off('startGame', startGame);
    };
  }, [socket, history]);

  useEffect(() => {
    setInviteCode(sessionStorage.getItem('inviteCode'));
    setInviteCodeURL(inviteCodeURL + '/' + inviteCode);
  }, [history]);

  return (
    <div className='prestartRoot'>
      <div className="form">
        <p className='gameId'>game ID: {inviteCode}</p>
        <div>
          <input className="linkBox" type="text" id="gameLink" 
            value={window.location.origin + '/' + inviteCode} readOnly>
          </input>
        </div>
        <div className="shareContainer">
          <button className="copyBtn" type="button" id="copy">Copy Link</button>
          <div className="shareBtn">
            <LinkedinShareButton
              url={window.location.origin + '/' + inviteCode}
              quote={'Join my Inkee.io game!'}
            >
              <LinkedinIcon size={43} />
            </LinkedinShareButton>
            <TwitterShareButton
              url={window.location.origin + '/' + inviteCode}
              quote={'Join my Inkee.io game!'}>
              <TumblrIcon size={43}  />
            </TwitterShareButton>
            <FacebookMessengerShareButton
              url={window.location.origin + '/' + inviteCode}
              quote={'Join my Inkee.io game!'}>
              <FacebookMessengerIcon size={43} />
            </FacebookMessengerShareButton>
            <TelegramShareButton
              url={window.location.origin + '/' + inviteCode}
              quote={'Join my Inkee.io game!'}>
              <TelegramIcon size={43} />
            </TelegramShareButton>
            <WhatsappShareButton
              url={window.location.origin + '/' + inviteCode}
              quote={'Join my Inkee.io game!'}>
              <WhatsappIcon size={43} />
            </WhatsappShareButton>
          </div>
        </div>
        {
          sessionStorage.getItem('isAdmin') &&
          <Button onClick={() => {
            const ButtonClick = new Audio (Sound);
            ButtonClick.play();
            socket.emit('startGame');
          }} variant='primary'>ready</Button>
        }
        <UserProfile users={users}
          isAdmin={sessionStorage.getItem('isAdmin')}
          currentUser={sessionStorage.getItem('username')}
          isPrestartLobby={true}
          isFinalScreen={false}
          socket={socket} />
      </div>
    </div>
  );
}

export default PrestartLobby;