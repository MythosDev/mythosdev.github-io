import { Link } from 'react-router-dom';
import React from 'react';
import useHoverSFX from '../../components/useHoverSFX';
import BlogPost from '../../components/BlogPost';
import BlogIndex from '../../components/BlogIndex';
import NodeGraph from '../../components/NodeGraph';
import CSVLoadNodeGraph from '../../components/CSVLoadNodeGraph';

//get rid of this compenent here it is not needed
//iclude download PDF button for resume

const TopBar = () => {

    const ref = useHoverSFX();

    return (
    <div ref={ref} style={{ fontFamily: "'Crimson Text', serif" }}>
        <style jsx global>{`
            @import url("https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&display=swap");

        `}</style>
        {/* className="rootStyles" */}
        <div className="navbar bg-blue-950 shadow-sm">
            <div className="navbar-start" ref={ref}>
                <div className="drawer">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Projects</label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-2">
                        {/* Sidebar content here */}
                        <li><Link to="/Portfolio">Portfolio</Link></li>
                        <li><Link to="/Contacts">Contact</Link></li>
                        <li><Link to="/Contacts">Contact</Link></li>
                        <li><Link to="/Resume">Resume</Link></li>
                        <li><Link to="/Test">Test</Link></li>
                        <li><Link to="/UndergroundNews">Underground News</Link></li>
                        <li><Link to="/News">News</Link></li>
                        <li><Link to="/Earth">Earth</Link></li>
                        <li><Link to="/Eighties">Eighties</Link></li>
                        <li><Link to="/Property">Property</Link></li>
                        <li><Link to="/VPN">Atlas VPN</Link></li>
                        <li><Link to="/Org">Org</Link></li>
                        <li><Link to="/SimpleNews">Sim News</Link></li>
                        <li><Link to="/PokiToki">PokiToki</Link></li>
                        <li><Link to="/Arcade">Arcade</Link></li>
                        <li><Link to="/Movies">Movies</Link></li>
                        <li><Link to="/MoviesSecond">Movies Second</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="navbar-center">
                <Link className=" text-xl flex-col text-center" to="/Property">
                    <h1>Teutonic</h1>
                    <img src="/Teutonic/german_logo.png" alt="" className='h-36'/>
                </Link>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
                </button>
                <button className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
                    <span className="badge badge-xs badge-primary indicator-item"></span>
                </div>
                </button>
            </div>
        </div>
        {/* <OptionBar /> */}
    </div>
    );
}

const OptionBar = () => {

    const ref = useHoverSFX();

    return (
    <div ref={ref} className=" bg-neutral-100 text-neutral-800" style={{ fontFamily: "'Crimson Text', serif" }}>
    <style jsx global>{`@import url("https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&display=swap");`}</style>
    <div className="bg-yellow-500 shadow">
            <ul className="menu menu-horizontal px-4">
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Articles</a></li>
                <li><a>Donate</a></li>
                <li>
                <details>
                    <summary>More</summary>
                    <ul className="p-2 bg-base-200 rounded-t-none">
                    <li><a>Settings</a></li>
                    <li><a>Help</a></li>
                    </ul>
                </details>
                </li>
            </ul>
        </div>
       
    </div>
    );
}

const BottomBar = () => {
    return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
            <h6 className="footer-title">Newsletter</h6>
            <fieldset className="w-80">
            <label>Enter your email address</label>
            <div className="join">
                <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item" />
                <button className="btn btn-primary join-item">Subscribe</button>
            </div>
            </fieldset>
        </form>
    </footer>
    );
}

export default function () {
    return(
        <>
            <div className="min-h-screen flex flex-col">
                <TopBar />
                <OptionBar />
                {/* <main className="flex-grow"> */}
                <div className='flex-col overflow-hidden'>
                    <img src="/Teutonic/germanic.jpg" alt="" className="w-full object-cover"/>
                    {/* <img src="/Teutonic/seafaring.jpg" alt="" /> */}
                    {/* Your main content here */}
                </div>
                <div className='max-w-[600px] mx-auto break-words'>
                    <p>ajaksfhkjasdhfkjasdhkfjahsdkjfhaksjdhffsdfsdfsdfsdfskjasdkfjhaskdjfhkajsdhfkjashdkfjashkdjfhaksjdfhkjashdfkjahsdkjfhaksjdfhkjasdhkfjassssssssssssssssssssssssssssssssssssssssssssd</p>
                </div>
                <BlogIndex />
                <BlogPost slug="post1" />
                {/* </main> */}
                <NodeGraph />
                <CSVLoadNodeGraph />
                <BottomBar />
            </div>
        </>
    )
}