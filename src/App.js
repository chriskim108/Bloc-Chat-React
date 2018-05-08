import React, { Component } from 'react';
import RoomList from "./components/RoomList";
import './App.css';
import * as firebase from 'firebase';

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <RoomList 
          firebase={firebase}/>
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
