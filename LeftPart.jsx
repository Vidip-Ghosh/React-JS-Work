import React from 'react';
import './index.css';
import {AiFillHome} from 'react-icons/ai';
import {MdExplore} from 'react-icons/md';
import {BsFillLightningChargeFill} from 'react-icons/bs';
import {MdSubscriptions} from 'react-icons/md';
import {FaHistory} from 'react-icons/fa';
import {MdVideoLibrary} from 'react-icons/md';
import {MdOutlineOndemandVideo} from 'react-icons/md';
import {MdOutlineWatchLater} from 'react-icons/md';
import {AiTwotoneLike} from 'react-icons/ai';
const LeftMenu = () =>{
    return (
        <>
            <div className="vertical-menu">
                <a href="#"><AiFillHome/>Home</a>
                <a href="#"><MdExplore/>Explore</a>
                <a href="#"><BsFillLightningChargeFill/>Shorts</a>
                <a href="#"><MdSubscriptions/>Subscriptions</a>
                <hr />
                <a href="#"><MdVideoLibrary/>Library</a>
                <a href="#"><FaHistory/>History</a>
                <a href="#"><MdOutlineOndemandVideo/>Shorts</a>
                <a href="#"><MdOutlineWatchLater/>Watch Later</a>
                <a href="#"><AiTwotoneLike/>Liked</a>
                <hr />
                <h5 style={{padding:12,color:"gray"}}>SUBSCRIPTIONS</h5>
                <a href="#">GeeksForGeeks</a>
                <a href="#">The Musical Life</a>
                <a href="#">Techie Zilla</a>
                <a href="#">Qwiklabs</a>
                <hr />
            </div>
        </>
    );
}
export default LeftMenu;