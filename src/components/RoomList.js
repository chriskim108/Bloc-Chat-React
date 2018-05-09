import React, { Component } from "react";

class RoomList extends Component{
    constructor(props){
        super(props);

        this.state = {
            rooms: []
        };

        this.roomsRef = this.props.firebase.database().ref('rooms');

    }

    componentDidMount(){
        this.roomsRef.on("child_added", snapshot => {
            const room = snapshot.val();
            room.key = snapshot.key;
            this.setState({ rooms: this.state.rooms.concat( room ) })
        })
    }

    createRoom(e){
        e.preventDefault();
        // Retriving the values from the input tag
        let newRoom = this.refs.nameOfRoom.value; 
        
        // Pushing it to FireBase
        this.roomsRef.push({ 
            name: newRoom
        });  
    }
    
    render(){
        return(
            <div>   

                {
                    this.state.rooms.map( (data, index) => 
                        <div key={index}>
                            <p>
                                {data.name}
                            </p>
                        </div>
                    ) 
                }

                <form onSubmit={ this.createRoom.bind(this) } >
                    <label className="newRoomLabel">Create a new room</label>
                    
                    <br/>

                    <input 
                        type="text" 
                        ref="nameOfRoom" 
                        placeholder="Create a new room"
                        className="newRoomInput"/>

                    <input 
                        type="submit" 
                        value="Create Room" 
                        className="newRoomSubmit"/>
                </form>

            </div>
        )
    }
}

export default RoomList;