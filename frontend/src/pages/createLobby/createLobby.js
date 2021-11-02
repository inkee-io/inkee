import {React, useState} from "react";
import { Link, history } from "react-router-dom";
import { Button } from "react-bootstrap";
import CreateHeader from "../../components/header/header";
import { CSVReader } from "react-papaparse";
import './createLobby.css'

function CreateLobby({socket, history}) {
  // Game Settings
  const [numRounds, setNumRounds] = useState(2);
  const [roundLength, setRoundLength] = useState(30);
  // Custom Words 
  const [textAreaContent, setTextAreaContent] = useState('');
  const [csvContent, setCsvContent] = useState(null);

  /**
   * User sets round numbers
   * @param {onChange} event 
   */
  const handleNumRoundChange = (event) => {
    setNumRounds(event.target.value);
  };

  /**
   * User sets round lenght
   * @param {onChange} event 
   */
  const handleRoundLengthChange = (event) => {
    setRoundLength(event.target.value);
  };

  /**
   * User enters custom words in textArea
   * @param {onChange} event 
   */
  const handleTextAreaChange = (event) => {
    let text = event.target.value
    setTextAreaContent(text); 
  }

  /**
   *  User drops csv file into CSVReader
   * @param {onDrop} event 
   */
  const handleOnDrop = (event) => {
    let words = [];
    for (let i=0; i<event.length; i++) {
      let word = event[i].data;
      if (!words.includes(word[0])) words.push(word[0]);
    }



    setCsvContent(words);
  }

  /**
   * User removes csv file from CSVReader
   * @param {onRemoveFile} event 
   */
  const handleOnRemoveFile = (event) => {
    setCsvContent(null);
  }

  /**
   * Error
   */
  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  }

  /**
   *  Parses through text area content and csv content and adds them to the
   * custom word list.
   * @param {String} textAreaContent 
   * @param {List} csvContent 
   */
  const parseCustomWords = (textAreaContent, csvContent) => {
    console.log('Parse Custom Words')
    let customWords = [];
    if (textAreaContent.length > 0) {
      let lines = textAreaContent.split(/\r\n|\r|\n/);
      for (let i=0; i<lines.length; i++) {
        let line = lines[i].split(/[ ,]+/).filter(Boolean);
        for (let j = 0; j < line.length; j++) {
          const word = line[j].toLowerCase();
          if (!customWords.includes(word)) {
            customWords.push(word);
          }
        }
      }
      console.log('textAreaContent Created');
    }

    if (csvContent != null) {
      for (let i=0; i < csvContent.length; i++) {
        let word = csvContent[i];
        word = word.toLowerCase();
        if (!customWords.includes(word)) {
          customWords.push(word);
        }
      }
      console.log('csvContent Created');
    }

    return customWords
  }

  /**
   * Submit game configeration to backend
   * @param {onClick} event 
   */
  const handleSubmit = (event) => {
    event.preventDefault();

    // Populate customWordList
    let customWords = parseCustomWords(textAreaContent, csvContent);

    // create gameConfiguration
    let gameConfiguration = {
      num_rounds: numRounds,
      round_length: roundLength,
      custom_words: [],
    }

    // add custom words if possible
    if (customWords.length > 0) {
      gameConfiguration['custom_words'] = customWords;
    }

    //console.log(gameConfiguration)

    // create userData
    let userData = {
      username: history.location.state.username,
      avatar: history.location.state.avatar,
    }
    
    socket.emit('createGame', {
      gameConfiguration,
      userData,
    });

    socket.on('inviteCode', (inviteCode) => {
      console.log(inviteCode);
      // Join game room generated by server.
      localStorage.setItem('inviteCode', inviteCode);
      history.push({
        pathname: '/prestartLobby'
      });
    });
    console.log('socket emit invite code')
  }

  return (
    <div className='lobbyRoot'>
      <CreateHeader />
      <div className='content'>
        <h2>Select Game Settings</h2>
        <form className='lobby-creation-form' onSubmit={handleSubmit}>
          <div className="form-group">
              <label htmlFor="numRounds">Rounds: </label>
              <br/>
              <select
                id="numRounds"
                name="numRounds"
                onChange={handleNumRoundChange}
                value={numRounds}
              >
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
          </div> 
          <div className="form-group">
            <label htmlFor="roundLength">Drawing Time (seconds): </label>
            <br/>
            <select
              id="roundLength"
              name="roundLength"
              onChange={handleRoundLengthChange}
              value={roundLength}
            >
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
              <option value="60">60</option>
              <option value="70">70</option>
              <option value="80">80</option>
              <option value="90">90</option>
              <option value="100">100</option>
              <option value="110">110</option>
              <option value="120">120</option>
              <option value="130">130</option>
              <option value="140">140</option>
              <option value="150">150</option>
              <option value="160">160</option>
              <option value="170">170</option>
              <option value="180">180</option>
            </select>
          </div>
          <div className='wordlist-container'>
            <label>Custom Words:</label>
            <br/>
            <textarea
              placeholder='Enter Custom Words...'
              value={textAreaContent}
              onChange={handleTextAreaChange}
              >
            </textarea>
            <div className='csvReader'>
              <h5>Or Upload a CSV File</h5>
              <CSVReader
                onDrop={handleOnDrop}
                onError={handleOnError}
                addRemoveButton
                onRemoveFile={handleOnRemoveFile}
              >
                <span>Drop CSV file here or click to upload.</span>
              </CSVReader>
            </div>
          </div> 
          <Button onClick={handleSubmit}>Create Game</Button>
        </form>
      </div>
    </div>
  );
}

export default CreateLobby;