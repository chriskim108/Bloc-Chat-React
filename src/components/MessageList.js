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
            this.setState({ messages: this.state.messages.concat( message ) })
        })
    }

    createMessage(e){
        e.preventDefault();
        // Retriving the values from the input tag
        let newContent = this.refs.messageOfRoom.value;
        let newRoomId = this.props.activeRoom;        
        let newSentAt = this.props.firebase.database.ServerValue.TIMESTAMP; 
        
        // Pushing it to FireBase
        this.messageRef.push({ 
            content:newContent,
            roomId:newRoomId,
            sentAt:newSentAt
        });

        console.log(newRoomId + " Test");
    }

    render(){

        let filteredMessages = this.state.messages.filter(message => message.roomId === this.props.activeRoom);
        console.log("Filtered " + this.state.messages.length + " messages down to " + filteredMessages.length + " active messages.");

        let username = this.props.userInformation ? this.props.userInformation.displayName : "Guest"
        return(
            <div>

                <h1>Created Messages</h1>
                {
                    filteredMessages.map( (data, index) => 
                        <div key={index}>
                            {data.content} {username}
                        </div>
                    ) 
                }
                
                {/* Form to input messages */}
                <form onSubmit={ this.createMessage.bind(this) } >
                    <label className="newMessageLabel">Create a new message</label>
                    
                    <br/>

                    <input 
                        type="text" 
                        ref="messageOfRoom" 
                        placeholder="Enter Message"/>

                    <input 
                        type="submit" 
                        value="Send Message"/>
                </form>
            </div>
        )
    }
}


export default MessageList;