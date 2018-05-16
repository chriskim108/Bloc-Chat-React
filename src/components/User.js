import React, { Component } from "react";
import MessageList from "./MessageList";

class User extends Component{
    constructor(props){
        super(props);

        this.state = {
            userMessage:[],
        }

        // this.userRef = this.props.firebase.database().ref('users');
        
    }

    componentDidMount(){
        this.props.firebase.auth().onAuthStateChanged( user => {
            this.props.setUser(user);
        });

        // this.userRef.on("child_added", snapshot => {
        //     const userMessage = snapshot.val();
        //     userMessage.key = snapshot.key;
        //     this.setState({ userMessage: this.state.userMessage.concat( userMessage ) })
        // })
    }

    signInWithPopup(){
        const provider = new this.props.firebase.auth.GoogleAuthProvider();
        this.props.firebase.auth().signInWithPopup( provider );
    }

    signOut(){
        this.props.firebase.auth().signOut();
    }

    // userMessage(e){
    //     e.preventDefault();
    //     // Retriving the values from the input tag
    //     let newContent = this.refs.messageOfRoom.value;
    //     let newRoomId = this.props.activeRoom;        
    //     let newSentAt = this.props.firebase.database.ServerValue.TIMESTAMP; 
        
    //     // Pushing it to FireBase
    //     this.messageRef.push({ 
    //         content:newContent,
    //         roomId:newRoomId,
    //         sentAt:newSentAt
    //     });

    //     console.log(newRoomId + " Test");
    // }


    render(){
        return(
            <div>
                <div>
                    <h3>Current User </h3>
                </div>

                <div>
                    { this.props.userInformation ? this.props.userInformation.displayName : "Guest"    }
                </div>

                {/* <MessageList 
                    /> */}
 
                <button onClick={this.signInWithPopup.bind(this)}>
                    Sign In
                </button>

                <button onClick={this.signOut.bind(this)}>
                    Sign Out
                </button>
            </div>
        )
    }
}

export default User;