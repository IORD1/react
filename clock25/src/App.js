import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      min : 25,
      sec : "00",
      blen : 5,
      mlen : 25,
      delayInMilliseconds : 1000
    }
  }componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  bdec = () => {
    if(this.state.blen != 0){
      this.setState({blen : this.state.blen - 1});
    }
    
  }

  binc = () => {
    if(this.state.blen != 60){
      this.setState({blen : this.state.blen + 1});
    }
    
  }

  mdec = () => {
    if(this.state.mlen != 0){
      this.setState({mlen : this.state.mlen - 1});
    }
    if(this.state.min != 0){
      this.setState({min : this.state.mlen});
    }
  }

  minc = () => {
    if(this.state.mlen != 60){
      this.setState({mlen : this.state.mlen + 1});
    }
    if(this.state.min != 60){
      this.setState({min : this.state.mlen + 1});
    }
  }

   //1 second

  start = () => {
    while(this.state.sec != 0){
      alert()
      if(this.state.sec == '00'){
        this.setState({sec : 59})
        this.setState({min : this.state.min-1});
      }else{
          alert()
          this.setState({sec : this.state.sec -1})
          setTimeout(function() {
          }, this.state.delayInMilliseconds);
          
        }
      
    }
  }




  // componentDidMount(){
  //   if(this.state.sec == '00'){
  //     this.setState({sec : 59 });
  //   }else{
  //     alert();
  //     this.interval = setInterval(() => this.setState({ sec: this.state.sec -1 }), 1000);
  //   }
    
  // }
  // componentWillUnmount(){
  //   clearInterval(this.interval);
  // }

  render() {
    return (
      <div className="App">
        <div id='box'>
          <div id='box-head'>
            25 + 5 Clock
          </div>
          <div id='time-edit'>
            <div id='left-edit'>
              <div id='break-label' className='edit-up-down'>Break Length</div>
                <div id='left-edit-down' className='edit-up-down'>
                  <div id='break-decrement' className='arrows' onClick={this.bdec}><span class="material-symbols-outlined">arrow_downward</span></div>
                  <div id='break-length' className='arrows'>{this.state.blen}</div>
                  <div id='break-increment'className='arrows' onClick={this.binc}><span class="material-symbols-outlined">arrow_upward</span></div>
                </div>
            </div>
            <div id='right-edit'>
              <div id='session-label' className='edit-up-down'>Session Length</div>
                <div id='right-edit-down' className='edit-up-down'>
                  <div id='session-decrement' className='arrows' onClick={this.mdec}><span class="material-symbols-outlined">arrow_downward</span></div>
                  <div id='session-length' className='arrows'>{this.state.mlen}</div>
                  <div id='session-increment'className='arrows' onClick={this.minc}><span class="material-symbols-outlined">arrow_upward</span></div>
              </div>
            </div>
          </div>
          <div id='main'>
            <div id='main-box'>
              <div id='timer-label'>
                Session
              </div>
              <div id='time-left'>
                {this.state.min}:{this.state.sec}
              </div>
            </div>

          </div>
          <div id='button-box'>
            <div id='start_stop' className='buttons' onClick={this.start}><span class="material-symbols-outlined" id='play_pause-icon'>play_pause</span></div>
            <div id='reset' className='buttons'><span class="material-symbols-outlined">restart_alt</span></div>
          </div>
          <div id='by-box'>
          Designed and Coded by Pratham-_-
          </div>
        </div>
      </div>
    );
  }
}

export default App;
