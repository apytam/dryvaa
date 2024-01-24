import React, { useState, Suspense } from "react";
import './Main.css';
import { HiOutlinePlus } from "react-icons/hi2";
import { LiaAngleDownSolid } from "react-icons/lia";
import { FaUpload, FaArrowsRotate, FaBolt, FaArrowDownShortWide, FaBorderAll } from "react-icons/fa6";
import { LiaExclamationCircleSolid } from "react-icons/lia";
import invoice from '../invoice.png';
import SOA from '../soa.png';
import Formm from "../Form/Form";
import Preloader from "../Proloader/Preloader";

const Main = ()=>{

    const [formToggler, setFormToggler] = useState(false);
    const displForm = ()=>{
        setFormToggler(true);
    };

    return(<div>

        { formToggler ? <Suspense fallback={<Preloader /> }>
            <Formm displForm={displForm} /> 
        </Suspense>: null }
        
        <main style={{
        width:'83vw',
        height:'inherit'
    }}>
        
        <div className='top_main'>
            <article className="main_top_gen">
                <span className="ssppp" style={{
                    background:'#0078d4',
                    color:'#fff',
                    padding:'8px 11px',
                    cursor:'text',
                    borderRadius:'3px',
                    fontSize:'14px'
                }}>
                    <code style={{display:'inline'}}>
                        <HiOutlinePlus style={{color:'#fff', cursor:'pointer'}}/>
                        {/* &#160; */}
                        &#160;
                        New
                        &#160;

                        <LiaAngleDownSolid style={{color:'#fff', cursor:'pointer'}}/>
                    </code>
                </span>

                <span className="ssppp" style={{color:'#0000008B', fontSize:'14px'}}><FaUpload />&#160;Upload <LiaAngleDownSolid /> </span>

                <span className="ssppp" style={{color:'#0000008B', fontSize:'14px'}}><FaArrowsRotate />&#160;Sync </span>

                <span className="ssppp" style={{color:'#0000008B', fontSize:'14px'}}><FaBolt />&#160;Automate <LiaAngleDownSolid /> </span>

                {/* <span></span> */}

            </article>

            <article>
                <span className="ssppp" style={{color:'#0078d4', fontSize:'15px', fontWeight:'bolder'}}><FaArrowDownShortWide /> </span>

                <span className="ssppp" style={{color:'#0078d4', fontSize:'15px'}}><FaBolt />&#160;Sort <LiaAngleDownSolid /> </span>

                <span className="ssppp" style={{color:'#0078d4', fontSize:'15px'}}><FaBorderAll />&#160;Sort <LiaAngleDownSolid /> </span>

                <span className="ssppp" style={{color:'#0078d4', fontSize:'19px'}}><LiaExclamationCircleSolid />&#160; </span>


            </article>
        </div>

        <p style={{
            margin:'35px 50px'
        }}>Shared Files</p>

        
                <article className="wall">

                    <div
                        className='file-item'
                        onClick={displForm}
                        style={{
                        display:'flex',
                        flexDirection:'column',
                        marginLeft:'70px'
                    }}>
                        <img className="iiimmmgggg" alt="invoice" src={invoice}/>
                        <div className='doc_overlay'>
                            <span>Invoice</span>
                            <span>A few minutes ago</span>
                        </div>
                    </div>



                    <div className='file-item' onClick={displForm} style={{
                        display:'flex',
                        flexDirection:'column',
                        marginLeft:'70px'
                    }}>
                        <img className="iiimmmgggg" alt="SOA." src={SOA}/>
                        <div className='doc_overlay'>
                            <span>SOA.</span>
                            <span>A few hours ago</span>
                        </div>
                    </div>

                    {/* <div>
                        <img className="iiimmmgggg" alt="SOA" src={SOA}/>
                    </div> */}

                </article>

    </main></div>)
}

export default Main;