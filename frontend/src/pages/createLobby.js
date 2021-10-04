import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function createLobby() {
  return (
    <div>
      <div className="createLobby">
        <h2>Lobby</h2>
        <div className="containerSettings">

          <div className="form-group">
            <label for="roundNum">Rounds:</label>
            <select id="roundNum" name="roundNum">
              <option value="1">1</option>
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
            <label for="drawingTime">Drawing Time:</label>
            <select id="drawingTime" name="drawingTime">
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
              <option value="60">60</option>
              <option value="70">70</option>
            </select>
          </div>

          <div>
            <h2>Word List Placeholder</h2>
          </div>

          <div>
            <Link to='/prestartLobby'>
              <Button varian='primary'>Start Game</Button>{' '}
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default createLobby