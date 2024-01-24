import React from "react";
import './Nav.css';
import { FaBars, FaAngleDown } from "react-icons/fa";
import { GrSearch } from "react-icons/gr";
import { FaGear } from "react-icons/fa6";
import { RxQuestionMark } from "react-icons/rx";



const NavBar = ()=>{
    return(<section className="navv">

        <div className="logo">
        &#160;
            &#160; &#160;
            &#160;
            <FaBars style={{
                fontWeight:'bold',
                fontSize:'21px'
            }} />
            &#160;
            OneDrive
        </div>

        <div className="search">
            <div style={{ display:'flex', alignItems:'center'}}>
                <GrSearch style={{
                color:'#0078d4',
                fontWeight:'bolder',
                cursor:'pointer',fontSize:'18px'
            }}/>
            &#160;

                    Search
            </div>

            <div style={{ display:'flex', alignItems:'center'}}>
                All files
                <FaAngleDown style={{
                color:'#0078d4',
                fontWeight:'bolder',
                cursor:'pointer',fontSize:'18px'
            }}/>

            
            </div>
        

        </div>

        <div className="iconns">
        <FaGear style={{
                color:'#fff',
                fontWeight:'bolder',
                cursor:'pointer',fontSize:'18px'}}/>
            &#160;
            &#160;


<RxQuestionMark style={{
                color:'#fff',
                fontWeight:'bolder',
                cursor:'pointer',fontSize:'18px'}}/>

&#160;
            &#160;

                <span className="profile">R</span>

                &#160;
            &#160; &#160;
            &#160;

        </div>

    </section>)
};

export default NavBar;