import React from "react";
import './Aside.css';
import { FaFolder } from "react-icons/fa";
import { FaClockRotateLeft, FaUserGroup, FaFileInvoiceDollar } from "react-icons/fa6";


const Aside = ()=>{
    return(<div className="sidebar">

        <aside>
            &#160;
            <span style={{fontSize:'13.6px', fontWeight:'bolder', color:'#595958', cursor:'default', padding:'7px',
        display:'flex', justifyContent:'flex-start'}}>Files Directory</span>


            <section className="sd">
                <ul>
                    <li><FaFolder style={{
                    color:'#0078d4',
                    fontWeight:'bolder',
                    cursor:'pointer',fontSize:'16px'
                }}/>&#160;My Files</li>
                    <li><FaClockRotateLeft style={{
                    color:'#0078d4',
                    fontWeight:'bolder',
                    cursor:'pointer',fontSize:'16px'
                }}/>&#160;Recent</li>
                    <li style={{
                        // background:'#0000001A',
                        // border:'1px solid red'
                    }}><FaUserGroup style={{
                    color:'#0078d4',
                    fontWeight:'bolder',
                    cursor:'pointer',fontSize:'16px'
                }}/>&#160;Shared</li>
                    <li>
                        <div>
                        <h4>Shared Libraries</h4>
                        <p style={{fontSize:'10px'}}>Sites help you work on projects
                            with your te
                            am and share 
                            information from anywhere on 
                            any device. Create or follow sites
                            to see them here.</p>
                        </div>
                    </li>
                    <li><FaFileInvoiceDollar style={{
                    color:'#0078d4',
                    fontWeight:'bolder',
                    cursor:'pointer',fontSize:'16px'
                }}/>&#160;Quotation</li>
                </ul>
            </section>
        </aside>
        {/* &#160; */}

        <div style={{color:'#0078d4', fontSize:'13px', fontFamily:'sans-serif', 
        textAlign:'center',
        paddingBottom:'25px',
        
    }}>
        <hr style={{border:'1px solid #ddd'}}/>
        Get the OneDrive apps</div>
        
    </div>)
};

export default Aside;