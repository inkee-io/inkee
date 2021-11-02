import React, { useState } from "react";
import { Link, history } from "react-router-dom";
import { Button } from "react-bootstrap";
// Components
import CreateHeader from "../../components/header/header";
import CSVReader2 from "../../components/CSVReader2";
import './createLobby.css'

function CreateLobby({socket, history}) {
  const [numRounds, setNumRounds] = useState(2);
  const [roundLength, setRoundLength] = useState(30);

  // if (localStorage.getItem('username') === null || localStorage.getItem('avatar') === null) {
  //   history.push({
  //     pathname: '/'
  //   });
  // }
  const [customWordBox, setCustomWords] = useState('');

  const handleNumRoundChange = (event) => {
    //console.log(`Num Rounds: ${event.target.value}`);
    setNumRounds(event.target.value);
  };

  const handleRoundLengthChange = (event) => {
    //console.log(`Round Length: ${event.target.value}`);
    setRoundLength(event.target.value);
  };

  const handleCustomWordChange = (event) => {
    let customWordString = event.target.value;
    setCustomWords(customWordString);
  }

  const handleCustomWords = (customWordBox) => {
    let customWordsList = [];
    // Parse Custom Words if present
    if (customWordBox.length > 0) {
      let lines = customWordBox.split(/\r\n|\r|\n/);
      for (let i = 0; i < lines.length; i++) {
        // prase if each lime has more than one word
        let line = lines[i].split(/[ ,]+/).filter(Boolean);
        for (let j = 0; j < line.length; j++) {
          const word = line[j].toLowerCase();
          if (customWordsList.includes(word) === false) customWordsList.push(word);
        }
      }
    } 
    return customWordsList;
  }
  
  const handleSubmit = (event) => {
    console.log('submit')
    event.preventDefault();
    console.log('Form Submit');
    console.log(`Submit: numRounds: ${numRounds}`);
    console.log(`Submit: roundLength: ${roundLength}`);

    let customWordsList = handleCustomWords(customWordBox);

    console.log(`Custom words: ${customWordsList}`);
    
    // Game configuration setup
    const gameConfiguration = {
      num_rounds: numRounds,
      round_length: roundLength,
      custom_words: '',
    }

    // add custom words if possible
    if (customWordsList.length > 0) {
      gameConfiguration['custom_words'] = customWordsList;
    }
    
    // send
    socket.emit('createGame', {
      gameConfiguration,
      userData: {
        uid: localStorage.getItem('username'),
        avatar: 'tempavatar', //localStorage.getItem('avatar'),
      },
    });

    socket.on('inviteCode', (inviteCode) => {
      console.log(inviteCode);
      // Join game room generated by server.
      localStorage.setItem('inviteCode', inviteCode);
      history.push({
        pathname: '/prestartLobby'
      });
    });
  };

  return (
    <div className='lobbyRoot'>
      <form onSubmit={handleSubmit} className="form">
        <select
          id="numRounds"
          name="numRounds"
          onChange={handleNumRoundChange}
          value={numRounds}
          className="select"
        >
          <option hidden="true">choose rounds</option>
          <option value="1rounds">1</option>
          <option value="2rounds">2</option>
          <option value="3rounds">3</option>
          <option value="4rounds">4</option>
          <option value="5rounds">5</option>
          <option value="6rounds">6</option>
          <option value="7rounds">7</option>
          <option value="8rounds">8</option>
          <option value="9rounds">9</option>
          <option value="10rounds">10</option>
        </select>
        <select
          id="roundLength"
          name="roundLength"
          onChange={handleRoundLengthChange}
          value={roundLength}
          className="select"
        >
          <option hidden="true">drawing time</option>
          <option value="30seconds">30</option>
          <option value="40seconds">40</option>
          <option value="50seconds">50</option>
          <option value="60seconds">60</option>
          <option value="70seconds">70</option>
          <option value="80seconds">80</option>
          <option value="90seconds">90</option>
          <option value="120seconds">120</option>
          <option value="180seconds">180</option>
        </select>
        <div className='wordlist'>
          <h2>Word List Placeholder</h2>
        </div> 
        <Link to='/prestartLobby'>
          <Button variant='primary'>start game</Button>
        </Link>
      </form>
    </div>
  );
}

export default CreateLobby