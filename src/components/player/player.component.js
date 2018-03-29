import React, {Component} from 'react';
import Http from '../../services/http.service';
import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:4200');

class PlayerInfo extends React.Component {

  constructor() {
    super();
    this.http = new Http();
  }

  componentDidMount() {
    // console.log(this.http);
    this.http.get('http://localhost:4201/')
    .then( (response) => {
      console.log(response.data);
    })
    .catch( err => console.log(err));

    socket.on('data', data => console.log(data));
    socket.emit('getData', 'hello?');
  }

  render() {
    return (
    <section className="player-info">
      <div className="player-form">
        <input type="text"/>
      </div>
    </section>
    )
  }
}

export default PlayerInfo;