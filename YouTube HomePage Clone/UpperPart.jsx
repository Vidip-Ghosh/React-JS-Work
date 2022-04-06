import React from 'react';
import {FiMenu} from 'react-icons/fi';
import {AiOutlineSearch} from 'react-icons/ai';
import {BsFillMicFill} from 'react-icons/bs';
import {MdVideocam} from 'react-icons/md';
import {GrApps} from 'react-icons/gr';
import {GrNotification} from 'react-icons/gr';
import {FaUserCircle} from 'react-icons/fa';
import './index.css';
const YT = () =>{
    return (
        <div>
            <FiMenu className="Menu"/>
            <img src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" className="img" alt=""/>
            <div>
                <input type="text" id="Search" />
                <button className="btn"><AiOutlineSearch/></button>
                
                <BsFillMicFill className="mic"/>
                <MdVideocam className="video"/>
                <GrApps className="apps"/>
                <GrNotification className="noti"/>
                <FaUserCircle className="user"/>
                <hr style={{position:"relative",bottom:50}}/>
            </div>
        </div>
    );
}
export default YT;