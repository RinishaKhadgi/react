import React, { Component } from 'react'
import { ReactMic } from 'react-mic';
import axios from 'axios';
import Countdown from 'react-countdown-now';

export const register = newUser => {
  return
}

export default class Audiorecord extends Component {

  constructor() {
    super();
    this.state = {record: false, pause: false, questions: [], activeQuestion: 0, timer: 0};
    this.getQuestions();
  }

  timerRef;

  getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

  getQuestions(){
    let field_id = ( this.getParameterByName('field_id', window.location.href));
    let position_id = ( this.getParameterByName('position_id', window.location.href));

    axios
    .get(`questions?field_id=${field_id}&position_id=${position_id}`)
    .then(res => {
      console.log(res);
      this.setState({questions: res.data});
    })
  }

  startTimer(){
    this.state.timer = 3 * 60;
    this.timerRef = setInterval(() => {
      this.setState({timer: this.state.timer - 1});
      if(this.state.timer === 0) this.nextQuestion();
    }, 1000);
  }

  btnRecordClick(event) {
    this.setState({
      pause: false,
      record: true
    });
    this.startTimer();
  }

  nextQuestion(){
    clearInterval(this.timerRef);
    this.setState({
      pause: true,
      record: false,
      activeQuestion: (this.state.activeQuestion + 1) % (this.state.questions.length-1),
      timer: 0
    });
  }

  btnSkipClick(event) {
    this.nextQuestion();
  }

  btnSubmitClick(event) {
    // send data to server
    this.nextQuestion();
  }

  formatTimer(seconds){
    if(seconds === 0){
      return "03 : 00";
    }else{
      let minutes = parseInt(seconds/60);
      if((minutes + "").length === 1) minutes = "0" + minutes;
      seconds = (seconds % 60);
      if((seconds + "").length === 1) seconds = "0" + seconds;
      return minutes + " : " + seconds;
    }

  }

  render() {

    let buttons;
    if(this.state.record){
      buttons = <div>
        <button type="button" className="btn btn-danger" onClick={() => this.btnSkipClick()}> Skip</button>
        <button type="button" className="btn btn-success" onClick={() => this.btnSubmitClick()}> Submit</button>
      </div>
    }
    else{
      buttons = <button type="button" className="btn btn-info btn-lg"  onClick={() => this.btnRecordClick()}> Record</button>
    }

    return (
      <div className="container">

        {/* Question */}
        <div className="question alert alert-secondary">
          {this.state.questions.length ? this.state.questions[this.state.activeQuestion].content : ''}
        </div>

        {/* Timer */}
        <div className="timer">{this.formatTimer(this.state.timer)}</div>

        {/* Audio Recorder */}
        <div>
          <ReactMic
              record={this.state.record}         // defaults -> false.  Set to true to begin recording
              pause={this.state.pause}          // defaults -> false.  Available in React-Mic-Plus upgrade only
              // className={string}       // provide css class name
              // onStop={function}        // callback to execute when audio stops recording
              // onData={function}        // callback to execute when chunk of audio data is available
              // strokeColor={string}     // sound wave color
              // backgroundColor={string} // background color
            />
        </div>

        {/* Buttons */}
        { buttons }

      </div>
    );
  }
}
