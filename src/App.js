import React, { Component } from 'react';
import RoomList from "./components/RoomList";
import MessageList from "./components/MessageList";
import './App.css';
import * as firebase from 'firebase';

class App extends Component {
  constructor(props){
      super(props);

      this.state = {
        activeRoom: "",
      };

      this.activeRoomSelected = this.activeRoomSelected.bind(this);
    }

  activeRoomSelected(room){
    let roomSelected = room;
    this.setState({activeRooms:roomSelected});
    console.log(this.state.activeRooms);
  }
  
  
  render() {
    return (
      <div className="App">
        {/* Active room should be triggered by clicking on the name of the room in the  RoomList component. */}
        <RoomList 
          firebase={firebase}
          activeRoom={this.state.activeRoom} 
          activeRoomSelected={this.activeRoomSelected.bind(this)} />
        
        {/* Passing in Firebase as a prop */}
        <MessageList
          firebase={firebase}
          activeRoom={this.state.activeRoom} 
          activeRoomSelected={this.activeRoomSelected.bind(this)}/>
          {/* activeRoomSelected = {(room)=> this.activeRoomSelected(room)} /> */}
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
