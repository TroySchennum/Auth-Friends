import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

        const FriendsList = (props) => {

   
    
    
        const [formData, setFormData] = useState({});
        const [friends, setFriends] = useState([])
    
        const handleChanges = e => {
            setFormData({
                ...formData, [e.target.name]: e.target.value
            });
        };
    
        const onSubmit = evt => {
            evt.preventDefault();
            axiosWithAuth()
                .post("/api/friends", formData)
                .then(res => {
                    console.log(res)
                    setFriends (res.data)
                })
                .catch(err => console.log(err))


        }
    
    
    
    
        return (
            <React.Fragment>
                <form onSubmit={onSubmit}>
                    <input
                        name= "name"
                        type="text"
                        value={formData.name}
                        onChange={handleChanges}
                        placeholder="Add new smurf"
                    />
                    <input
                        name= "age"
                        type="number"
                        value={formData.age}
                        onChange={handleChanges}
                        placeholder="Add age"
                    />
                    <input
                        name="height"
                        type="number"
                        value={formData.height}
                        onChange={handleChanges}
                        placeholder="Add height"
                    />
                    <button>
                        Add smurf
                    </button>
                </form>
                <div className="smurf-list" >
                    {friends.map((member, index) => (
                         <h4 key={index}>
                            {member.name} is <pre></pre> 
                            {member.age} Years old <pre></pre> 
                            {member.height} cm tall
                        </h4>
                    ))}
                </div>
            </React.Fragment>
        );
    }
    
    export default FriendsList