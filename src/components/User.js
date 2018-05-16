import React, { Component } from "react";
import MessageList from "./MessageList";

class User extends Component{
    constructor(props){
        super(props);

        this.state = {
            userMessage:[],
        }
        this.messageRef = this.props.firebase.database().ref('messages');
    }

    signInWithPopup(){
        const provider = new this.props.firebase.auth.GoogleAuthProvider();
        this.props.firebase.auth().signInWithPopup( provider );
    }

    signOut(){
        this.props.firebase.auth().signOut();
    }

    render(){
        return(
            <div>
                <div>
                    <h3>Current User </h3>
                </div>

                <div>
                    { this.props.userInformation ? this.props.userInformation.displayName : "Guest"    }
                    {console.log(this.props.userInformation)}
                </div>

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