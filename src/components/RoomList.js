import React, { Component } from "react";

class RoomList extends Component{
    constructor(props){
        super(props);

        this.state = {
            rooms: [],
            newRoom:"",
        };

        this.roomsRef = this.props.firebase.database().ref('rooms');
        this.handleChange = this.handleChange.bind(this);
        this.createRoom = this.createRoom.bind(this);

    }

    componentDidMount(){
        this.roomsRef.on("child_added", snapshot => {
            const room = snapshot.val();
            room.key = snapshot.key;
            this.setState({ rooms: this.state.rooms.concat( room ) })
        })
    }

    handleChange(e){
        e.preventDefault();
        this.setState({ newRoomName: e.target.value });
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

    selectedRoom(room){
        this.props.activeRoom(room);
    }
    
    render(){
        return(
            <div>   
                
                <h1>Created Rooms</h1>
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