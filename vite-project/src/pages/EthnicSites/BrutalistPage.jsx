import TopBar from "../../components/TopBar";
import { Link } from 'react-router-dom';
import React from 'react';
import BottomBar from '../../components/BottomBar';

//get rid of this compenent here it is not needed
//iclude download PDF button for resume


export default function () {
    return(
        <>
            <div className=" bg-neutral-100 text-neutral-800" style={{ fontFamily: "'Crimson Text', serif" }}>
            <style jsx global>{`@import url("https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&display=swap");`}</style>
                <TopBar />
                <div className="flex flex-col gap-5 items-center">
                    <div>
                        <img src="/demo_pic2.png" alt="" />
                        <h1 className="text-5xl font-bold">Title</h1>
                        <h4 className="text-xl font-bold">Subtitle Information</h4>
                        <p>Text</p>
                    </div>

                    <div>
                        <img src="/demo_pic2.png" alt="" />
                        <h1 className="text-5xl font-bold">Title</h1>
                        <h4 className="text-xl font-bold">Subtitle Information</h4>
                        <p>Text</p>
                    </div>
                </div>
                <br />
                <div className="flex flex-row gap-5 items-center m-5">
                    <img src="/Page (3).png" alt="" />
                    <img src="/Page (6).png" alt="" />
                    <img src="/Page (7).png" alt="" />
                    <img src="/Page (4).png" alt="" />
                    <img src="/Page (5).png" alt="" />
                    <img src="/A4 - 10.png" alt="" />
                </div>
                {/* Article Short Form */}
                <div className="h-[800px] w-[600px] bg-blue-600">
                <img 
                    src="/demo_pic2.png" 
                    alt="Banner" 
                    className="w-full h-[250px] object-cover"
                />
                <div className="w-full h-full bg-slate-500 p-[36px]">
                    <h1 className="text-[32px] font-bold">Title</h1>
                    <h2 className="text-[16px] font-extralight text-zinc-900 mt-[6px]">Slug Line</h2>
                    <p className="text-[12px] text-zinc-800 mt-[20px]">Slug Line</p>
                </div>
                </div>
                <br /> <br /> <br />
                <BottomBar />
            </div>
        </>
    )
}