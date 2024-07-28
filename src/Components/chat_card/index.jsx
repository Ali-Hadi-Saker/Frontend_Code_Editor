import React from "react";
import '../../Styles/utilities.css'
import './style.css'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const ChatCard = ()=>{
    return(
        <div className='card-container flex center '>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <div className="info-container flex column">
                <p>Name <br /> date</p>
            </div>
        </div>
    )
}

export default ChatCard