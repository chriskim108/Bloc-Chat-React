import React, { Component } from "react";

class MessageList extends Component{
    constructor(props){
        super(props);

        this.state = {
            messages:[]
        }
        this.messageRef = this.props.firebase.database().ref('messages');
    }

    componentDidMount(){
        this.messageRef.on("child_added", snapshot => {
            const message = snapshot.val();
            message.key = snapshot.key;
            this.setState({ rooms: this.state.messages.concat( message ) })
        })
    }

    render(){
        return(
            <div>
                
            </div>
        )
    }
}


export default MessageList;