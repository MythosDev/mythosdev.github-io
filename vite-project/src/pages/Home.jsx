import { Link } from 'react-router-dom';
import '../Global.module.css'
import SFXButton from '../components/SfxButton';
import HoverSFXButton from '../components/HoverSfxButton';
import useHoverSFX from '../components/useHoverSFX';
import VideoPlayer from '../components/VideoPortfolio';
import PixelateImageShader from '../components/PixelateImageShader';

export default function () {

    const ref = useHoverSFX();

    return(
        <div       
            ref={ref}
            className="flex flex-col min-h-screen bg-neutral-100 text-neutral-800" 
            // z-10
            style={{ fontFamily: "'Crimson Text', serif" }
        }>
            {/* <video
                autoPlay
                loop
                muted
                playsInline
                className="fixed top-0 left-0 w-full h-full object-cover z-[0]" src='/Dreams.mp4'
            >
            <source src="/Dreams.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}
            <style jsx global>{`
                @import url("https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&display=swap");
                @import url('https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap');
            `}</style>
            {/* className="rootStyles" */}
            <div className="navbar bg-base-100 shadow-sm">
                {/* z-10 */}
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
                            <li><Link to="/Celtic">Celtic</Link></li>
                            <li><Link to="/Odyssey">Odyssey</Link></li>
                            <li><Link to="/Brutalist">Brutalist</Link></li>
                            <li><Link to="/Anglo">Anglo</Link></li>
                            <li><Link to="/Germanic">German</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost text-xl">Frontier</a>
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
            <h1 className="text-5xl font-bold">Welcome to my website</h1>

            <div className='flex flex-wrap' ref={ref}>
                {/* z-10 */}
                <img className="transition-transform duration-300 hover:scale-105" src="/Ads/ad1.jpg" alt="" />
                <img className="transition-transform duration-300 hover:scale-105" src="/Ads/ad2.jpg" alt="" />
                <img className="transition-transform duration-300 hover:scale-105" src="/Ads/ad3.jpg" alt="" />
                <img className="transition-transform duration-300 hover:scale-105" src="/Ads/ad4.jpg" alt="" />
                <img className="transition-transform duration-300 hover:scale-105" src="/Ads/ad5.jpg" alt="" />
                <img className="transition-transform duration-300 hover:scale-105" src="/Ads/ad6.jpg" alt="" />
                <img className="transition-transform duration-300 hover:scale-105" src="/Ads/ad7.jpg" alt="" />
                <img className="transition-transform duration-300 hover:scale-105" src="/Ads/ad8.jpg" alt="" />
                <img className="transition-transform duration-300 hover:scale-105" src="/Ads/ad10.jpg" alt="" />
                <img className="transition-transform duration-300 hover:scale-105" src="/Ads/ad11.jpg" alt="" />
                <img className="transition-transform duration-300 hover:scale-105" src="/Ads/ad12.jpg" alt="" />
                <img className="transition-transform duration-300 hover:scale-105" src="/Ads/ad13.jpg" alt="" />
                <img className="transition-transform duration-300 hover:scale-105" src="/Ads/ad14.jpg" alt="" />
                {/* <img className="transition-transform duration-300 hover:scale-105" src="/Ads/ad15.jpg" alt="" /> */}
                <div className="transition-transform duration-300 hover:scale-105 h-full">
                    <PixelateImageShader imageSrc="/Ads/ad14.jpg" radius={0.25} pixelSize={0.08} />
                </div>
                <div className="transition-transform duration-300 hover:scale-105 h-full">
                    <PixelateImageShader imageSrc="/Ads/ad15.jpg" radius={0.25} pixelSize={0.08} />
                </div>
            </div>
            {/* <PixelateImageShader imageSrc="/GhibliBanner.webp" radius={0.1} pixelSize={0.04} /> */}
            <SFXButton src='/sfx/bleep.wav' />
            <SFXButton src='/sfx/music.mp3' />
            <HoverSFXButton />
            <HoverSFXButton isFastMode='true'/>
            <HoverSFXButton />
            <HoverSFXButton />
            <video
                autoPlay
                loop
                muted
                playsInline
                className=" w-full h-full object-cover z-[0]" src='/Dreams.mp4'
            >
            <source src="/Dreams.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* <img src="/gothic.jpg" alt="" /> */}
            <div className='flex w-full overflow-hidden' ref={ref}>
                <img src="/window.jpg" alt="" className="w-1/4 h-auto object-contain"/>
                <img src="/window.jpg" alt="" className="w-1/4 h-auto object-contain"/>
                <img src="/window.jpg" alt="" className="w-1/4 h-auto object-contain"/>
                <img src="/window.jpg" alt="" className="w-1/4 h-auto object-contain"/>
            </div>
            <div className='text-center'>
                <div>
                    <h2 className='text-4xl font-bold m-6 text-center'>Cinematography</h2>
                    <p><b>Advertisement</b> (item/product) like Atmos, Car Advert (alpha romeo), driving around in alpha while smoking, film/wes style</p>
                    <p><b>Colors:</b> Forest = Green, Night = Blue, Yellow = Sundown, Red = Blood?</p>
                    <p><b>Dark and Moody short:</b> the driver, kill person and drag into trunk of Alpha Romeo</p>
                    <p><b>Wedding/Prom/Model</b> Record person in dress in light room doing poses, focusing in on eyes, etc. B&W Shots</p>
                    <p><b>Sports:</b> record people shooting and scoring</p>
                    <VideoPlayer/>
                </div>
                <h2 className='text-4xl font-bold m-6 text-center'>Photography</h2>
                <p>Portraits, Landscape, Products, Interesting Shots, Double Exposure, Scenes</p>
                <div className='flex flex-wrap' ref={ref}>
                    {/* z-10 */}
                    <img className="transition-transform duration-300 hover:scale-105" src="/Ads/ad1.jpg" alt="" />
                    <img className="transition-transform duration-300 hover:scale-105" src="/Ads/ad2.jpg" alt="" />
                    <img className="transition-transform duration-300 hover:scale-105" src="/Ads/ad3.jpg" alt="" />
                    <img className="transition-transform duration-300 hover:scale-105" src="/Ads/ad4.jpg" alt="" />
                    <img className="transition-transform duration-300 hover:scale-105" src="/Ads/ad5.jpg" alt="" />
                    <img className="transition-transform duration-300 hover:scale-105" src="/Ads/ad6.jpg" alt="" />
                    <img className="transition-transform duration-300 hover:scale-105" src="/Ads/ad7.jpg" alt="" />
                    <img className="transition-transform duration-300 hover:scale-105" src="/Ads/ad8.jpg" alt="" />
                    <img className="transition-transform duration-300 hover:scale-105" src="/Ads/ad10.jpg" alt="" />
                    <img className="transition-transform duration-300 hover:scale-105" src="/Ads/ad11.jpg" alt="" />
                    <img className="transition-transform duration-300 hover:scale-105" src="/Ads/ad12.jpg" alt="" />
                    <img className="transition-transform duration-300 hover:scale-105" src="/Ads/ad13.jpg" alt="" />
                    <img className="transition-transform duration-300 hover:scale-105" src="/Ads/ad14.jpg" alt="" />
                    <img className="transition-transform duration-300 hover:scale-105" src="/Ads/ad15.jpg" alt="" />
                </div>
                <h2 className='text-4xl font-bold m-6 text-center'>Graphic Design</h2>
                <div className='flex flex-wrap' ref={ref}>
                    {/* z-10 */}
                    <img className="transition-transform duration-300 hover:scale-105" src="/Ads/ad1.jpg" alt="" />
                    <img className="transition-transform duration-300 hover:scale-105" src="/Ads/ad2.jpg" alt="" />
                    <img className="transition-transform duration-300 hover:scale-105" src="/Ads/ad3.jpg" alt="" />
                    <img className="transition-transform duration-300 hover:scale-105" src="/Ads/ad4.jpg" alt="" />
                    <img className="transition-transform duration-300 hover:scale-105" src="/Ads/ad5.jpg" alt="" />
                    <img className="transition-transform duration-300 hover:scale-105" src="/Ads/ad6.jpg" alt="" />
                    <img className="transition-transform duration-300 hover:scale-105" src="/Ads/ad7.jpg" alt="" />
                    <img className="transition-transform duration-300 hover:scale-105" src="/Ads/ad8.jpg" alt="" />
                    <img className="transition-transform duration-300 hover:scale-105" src="/Ads/ad10.jpg" alt="" />
                    <img className="transition-transform duration-300 hover:scale-105" src="/Ads/ad11.jpg" alt="" />
                    <img className="transition-transform duration-300 hover:scale-105" src="/Ads/ad12.jpg" alt="" />
                    <img className="transition-transform duration-300 hover:scale-105" src="/Ads/ad13.jpg" alt="" />
                    <img className="transition-transform duration-300 hover:scale-105" src="/Ads/ad14.jpg" alt="" />
                    <img className="transition-transform duration-300 hover:scale-105" src="/Ads/ad15.jpg" alt="" />
                </div>
                <div className='justify-center text-center'>
                    <h2 className='text-4xl font-bold m-6 text-center'>Projects</h2>
                    <Link to="/Statistica">Statistica</Link>
                    <br />
                    <Link to="/Eighties">Eighties</Link>
                    <br />
                    <Link to="/Portfolio">Portfolio</Link>
                    <br />
                    <Link to="/Contacts">Contact</Link>
                    <br />
                    <Link to="/About">About</Link>
                    <br />
                    <Link to="/Resume">Resume</Link>
                    <br />
                    <Link to="/Test">Test</Link>
                    <br />
                    <Link to="/UndergroundNews">Underground News</Link>
                    <br />
                    <Link to="/News">News</Link>
                    <br />
                    <Link to="/Earth">Earth</Link>
                    <br />
                    <Link to="/SM">SM</Link>
                    <br />
                    <Link to="/Eighties">Eighties</Link>
                    <br />
                    <Link to="/Property">Property</Link>
                    <br />
                    <Link to="/VPN">Atlas VPN</Link>
                    <br />
                    <Link to="/Org">Org</Link>
                    <br />
                    <Link to="/SimpleNews">Sim News</Link>
                    <br />
                    <Link to="/PokiToki">PokiToki</Link>
                    <br />
                    <Link to="/Arcade">Arcade</Link>
                    <br />
                    <Link to="/Movies">Movies</Link>
                    <br />
                    <Link to="/MoviesSecond">Movies Second</Link>
                </div>
                <h2 className='text-4xl font-bold m-6 text-center'>Websites / UI Design</h2>
                <h2 className='text-4xl font-bold m-6 text-center'>Weddings</h2>
                    <p>Stories, Cases, Photos, Edited Videos, Cards, Flowers, Venue</p>
                    <p>Full story video, with people talking and cheering. classy full video set to music. b&W Photos, Photoshoot, brides photos alone</p>
                    <br />
                    <div className='flex flex-col gap-10 items-center'>
                        <div className='bg-slate-500 w-[800px] h-[600px] flex flex-row'>
                            <div className='bg-slate-400 w-[500px] h-full'>
                                <img src="/weddingphoto1.jpg" alt="" className='h-full w-full object-cover' />
                            </div>
                            <div className='bg-slate-500 w-[300px] h-full p-4 gap-4 flex flex-col'>
                                <h2 className='text-6xl font-bold'style={{ fontFamily: "Tangerine, cursive" }} >
                                    Thomson's Story
                                </h2>
                                <p className='text-2xl font-bold'style={{ fontFamily: "Tangerine, cursive" }}>
                                    Oct - 9 - 2024
                                </p>
                            </div>
                        </div>
                        <div className='bg-slate-500 w-[800px] h-[600px] flex flex-row'>
                            <div className='bg-slate-400 w-[500px] h-full'>
                                <img src="/weddingphoto2.jpg" alt="" className='h-full w-full object-cover' />
                            </div>
                            <div className='bg-slate-500 w-[300px] h-full p-4 gap-4 flex flex-col'>
                                <h2 className='text-6xl font-bold'style={{ fontFamily: "Tangerine, cursive" }} >
                                    Busch's Story
                                </h2>
                                <p className='text-2xl font-bold'style={{ fontFamily: "Tangerine, cursive" }}>
                                    Oct - 9 - 2024
                                </p>
                            </div>
                        </div>
                    </div>
                <h2 className='text-4xl font-bold m-6 text-center'>Video Editor</h2>
                    <p><b>Film:</b>Trailer, Short Film, Emotional Scene, Tense Scene, Comedic Scene, poster</p>
                    <p><b>Social Media:</b>Short, 20 minute video, trailer hype, music video, 40min documentary, advertisement</p>
                    <VideoPlayer/>
                <h2 className='text-4xl font-bold m-6 text-center'>CGI Animator</h2>
                    <p>Include live viewport with rotation, simple character controller, camera panning, play animation frame by frame (game character)</p>
                    <p>pre rendered short film (2minutes), frame by frame</p>
                <h2 className='text-4xl font-bold m-6 text-center'>2D Animator</h2>
                    <div className='flex overflow-x-hidden'>
                        <img src="/example.gif" alt="" />
                        <img src="/fight.gif" alt="" />
                        <img src="/cute.gif" alt="" />
                        <img src="/mob.gif" alt="" />
                    </div>
                    <div className="flex overflow-x-auto space-x-2 h-48">
                        <img src="/example.gif" alt="" />
                        <img src="/fight.gif" alt="" />
                        <img src="/cute.gif" alt="" />
                        <img src="/mob.gif" alt="" />
                        <img src="/example.gif" alt="" />
                        <img src="/fight.gif" alt="" />
                        <img src="/cute.gif" alt="" />
                        <img src="/mob.gif" alt="" />
                    </div>
                <h2 className='text-4xl font-bold m-6 text-center'>2D Character Designer</h2>
                    <p>just a series of drawings, bundled together with drawings, logos, characters from all views, characters together, backgrounds</p>
                    <br />
                    <div className='flex justify-around'>
                        <div className='bg-slate-500 w-[400px] h-[200px]'></div>
                        <div className='bg-slate-500 w-[400px] h-[200px]'></div>
                        <div className='bg-slate-500 w-[400px] h-[200px]'></div>
                    </div>
                <h2 className='text-4xl font-bold m-6 text-center'>3D Character Designer</h2>
                    <p>3D rotatable character viewers</p>
                    <br />
                    <div className='flex justify-around'>
                        <div className='bg-slate-500 w-[600px] h-[600px]'></div>
                        <div className='bg-slate-500 w-[600px] h-[600px]'></div>
                    </div>
                <h2 className='text-4xl font-bold m-6 text-center'>3D Landscape Designer</h2>
                <h2 className='text-4xl font-bold m-6 text-center'>Game Designer</h2>
                    <p>small game, with text and voice over explaining process and ideas</p>
                <h2 className='text-4xl font-bold m-6 text-center'>Level Designer</h2>
                    <p>small 3D & 2D game showcasing level design, open world, hub, traditional level, immersive sim</p>
                    <p>Game with tutorial, introduce item at beginning of level, test it, have challenge, harder test</p>
                <h2 className='text-4xl font-bold m-6 text-center'>Game Economy Designer</h2>
                    <p>financial demo website</p>
                <h2 className='text-4xl font-bold m-6 text-center'>Backend Programmer</h2>
                <h2 className='text-4xl font-bold m-6 text-center'>Web Developer</h2>
                    <p>websites, technologies</p>
                <h2 className='text-4xl font-bold m-6 text-center'>Games Programmer</h2>
                    <p>Repositories, Code Snipper, Algorithm, Video explaining, Ai programming, game example</p>
                <h2 className='text-4xl font-bold m-6 text-center'>Technical Writing</h2>
                <h2 className='text-4xl font-bold m-6 text-center'>Creative Writer (Short Stories)</h2>
                    <div className='flex justify-around'>
                        <div className='bg-slate-500 w-[300px] h-[400px]'></div>
                        <div className='bg-slate-500 w-[300px] h-[400px]'></div>
                        <div className='bg-slate-500 w-[300px] h-[400px]'></div>
                        <div className='bg-slate-500 w-[300px] h-[400px]'></div>
                        <div className='bg-slate-500 w-[300px] h-[400px]'></div>
                    </div>
                <h2 className='text-4xl font-bold m-6 text-center'>Writing Editor</h2>
                <h2 className='text-4xl font-bold m-6 text-center'>Games</h2>
                <h2 className='text-4xl font-bold m-6 text-center'>Films</h2>
                <h2 className='text-4xl font-bold m-6 text-center'>Storyboards</h2>
                    <p>A series of files, images in sequence that can be played like a video with comments, in Odyssey</p>
                <h2 className='text-4xl font-bold m-6 text-center'>Screenplays</h2>
                    <p>PDF's that can be downloaded, they are from my short films</p>
                    <br />
                    <div className='flex justify-around'>
                        <div className='bg-slate-500 w-[300px] h-[400px]'></div>
                        <div className='bg-slate-500 w-[300px] h-[400px]'></div>
                        <div className='bg-slate-500 w-[300px] h-[400px]'></div>
                    </div>
                <h2 className='text-4xl font-bold m-6 text-center'>Blogs</h2>
                <div className='flex justify-around'>
                        <div className='bg-slate-500 w-[300px] h-[400px]'></div>
                        <div className='bg-slate-500 w-[300px] h-[400px]'></div>
                        <div className='bg-slate-500 w-[300px] h-[400px]'></div>
                    </div>
                <h2 className='text-4xl font-bold m-6 text-center'>Scientific Papers</h2>
                    <div className='flex justify-around'>
                        <div className='bg-slate-500 w-[300px] h-[400px]'></div>
                        <div className='bg-slate-500 w-[300px] h-[400px]'></div>
                        <div className='bg-slate-500 w-[300px] h-[400px]'></div>
                    </div>
                <h2 className='text-4xl font-bold m-6 text-center'>Magazines</h2>
                    <p>Cinema - Politics - Stories - Design - Ads - Technology - Interviews - Legal - News - Topics</p>
                    <p>Cinema Reviews - Book Reviews - Tutorials - Recipes - Sewing Patterns - Guides - Skill Tips - Event Flyers - Organizations</p>
                    <p>Models - Inspiration/Beauty - Nature/Wildlife - Travel - History - Military</p>
                    <p>Cinema Mag, Womens Mag, Political Mag, Inspiration Mag, Tech/Osint Mag</p>
                    <p>Released Monthly</p>
                    <p>Weekly Posts, Daily Comments, Communal Contributions</p>
                    <p>24-42 pages (spread = 2)</p>
                    <p>Ads are very cheap, full page ads cost money</p>
                    <br />
                    <div className='flex justify-around'>
                        <img src='/A4 - 10.png' className='bg-slate-500 w-[300px] h-[400px]'></img>
                        <div className='bg-slate-500 w-[300px] h-[400px]'></div>
                        <div className='bg-slate-500 w-[300px] h-[400px]'></div>
                    </div>
                <h2 className='text-4xl font-bold m-6 text-center'>Books</h2>
                    <div className='flex justify-around'>
                        <div className='bg-slate-500 w-[300px] h-[400px]'></div>
                        <div className='bg-slate-500 w-[300px] h-[400px]'></div>
                        <div className='bg-slate-500 w-[300px] h-[400px]'></div>
                    </div>
                <h2 className='text-4xl font-bold m-6 text-center'>Privacy</h2>
                <h2 className='text-4xl font-bold m-6 text-center'>Privacy Programming</h2>
                <h2 className='text-4xl font-bold m-6 text-center'>AI Programming</h2>
                <h2 className='text-4xl font-bold m-6 text-center'>Links</h2>
                    <p>Recommendations, Figures, Organizations, Books, Publishers, Technologies, Privacy, Alternative Platforms, Creators, Tech, Legal</p>
                    <p>accounts, scientific papers, writers, artists, people, organizations, events</p>
            </div>
                <div className="text-center justify-center text-lg font-medium" ref={ref}>
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
                </div>
        </div>
    );
}