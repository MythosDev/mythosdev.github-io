import { Link } from 'react-router-dom';
import React from 'react';
import BottomBar from '../components/BottomBar';
import '../Global.module.css'
import VPNChip from './VPN/VPNChip';
import VPNComponent from './VPN/VPNComponent';
import { InteractionBar, AccountBar, CommentBar }  from '../components/SocialMediaBars'

//get rid of this compenent here it is not needed
//iclude download PDF button for resume


export default function () {
    return(
        <>
            <div>
                <h2>Contacts</h2>
                <p>Email: ___</p>
                <p>Phone Number: ___</p>
                <p>Twitter (X): ___</p>
                <p>Youtube: ___</p>
                <Link to="/Home">Home</Link>
            </div>
            <VPNChip />
            <VPNComponent />
            <BottomBar/>
            <div className='flex flex-col items-center'>
                <div className='flex flex-col w-[400px] h-[600px] bg-cyan-200 p-4 gap-4'>
                    <div className='w-full h-[400px] bg-slate-200 p-4'></div>
                    <AccountBar />
                    <InteractionBar />
                    <CommentBar />
                </div>
            </div>
        </>
    )
}