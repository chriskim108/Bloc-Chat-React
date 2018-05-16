import React, { Component } from 'react';
import RoomList from "./components/RoomList";
import MessageList from "./components/MessageList";
import User from "./components/User";
import './App.css';
import * as firebase from 'firebase';

class App extends Component {
  constructor(props){
      super(props);

      this.state = {
        activeRoom: "",
        userInformation:"",
      };

      this.activeRoomSelected = this.activeRoomSelected.bind(this);
      this.setUser = this.setUser.bind(this);
    }

  activeRoomSelected(room){
    let roomSelected = room;
    this.setState({activeRoom:roomSelected});
    console.log(this.state.activeRooms);
  }

  setUser(user){
    let authorizedUser = user;
    this.setState({ userInformation: authorizedUser});
  }
  
  
  render() {
    return (
      <div className="App">
        <RoomList 
          firebase={firebase}
          activeRoom={this.state.activeRoom} 
          activeRoomSelected={this.activeRoomSelected.bind(this)} />
        
        <MessageList
          firebase={firebase}
          activeRoom={this.state.activeRoom} 
          activeRoomSelected={this.activeRoomSelected.bind(this)}
          userInformation={this.state.userInformation}
          setUser={this.setUser.bind(this)}/>

        <User 
          firebase={firebase}
          userInformation={this.state.userInformation}
          setUser={this.setUser.bind(this)}/>
      </div>
    );
  }
}

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBIRteBfLqesYIhO_0VKvJ0GUZssA8zJDI",
  authDomain: "bloc-chat-af43f.firebaseapp.com",
  databaseURL: "https://bloc-chat-af43f.firebaseio.com",
  projectId: "bloc-chat-af43f",
  storageBucket: "bloc-chat-af43f.appspot.com",
  messagingSenderId: "961478838491"
};
firebase.initializeApp(config);

export default App;
