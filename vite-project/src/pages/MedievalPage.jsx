import { Link } from 'react-router-dom';
import BottomBar from '../components/BottomBar';

export default function () {
    return(
        <>
            <div className='absolute w-[200px] m-16'>
                <img src="/Medieval/WindowFrame.png" alt="" />
            </div>
            <div className='flex flex-row'>
                <div className='flex flex-col w-[400px] bg-slate-500'>
                    <img src="/Medieval/Wall.png" alt="" />
                    <img src="/Medieval/Wall.png" alt="" />
                    <img src="/Medieval/Wall.png" alt="" />
                    <img src="/Medieval/Wall.png" alt="" />
                    <img src="/Medieval/Wall.png" alt="" />
                    <img src="/Medieval/Wall.png" alt="" />
                    <img src="/Medieval/Wall.png" alt="" />
                    <img src="/Medieval/Wall.png" alt="" />
                    <img src="/Medieval/Wall.png" alt="" />
                    <img src="/Medieval/Wall.png" alt="" />
                    <img src="/Medieval/Wall.png" alt="" />
                    <img src="/Medieval/Wall.png" alt="" />
                    <img src="/Medieval/Wall.png" alt="" />
                    <img src="/Medieval/Wall.png" alt="" />
                    <img src="/Medieval/Wall.png" alt="" />
                    {/* vite-project\public\Medieval\Castle.png */}
                </div>
                <div className='flex flex-col w-full'>
                    <img src="/Medieval/Grass.png" alt="" />
                    <img src="/Medieval/Caves.png" alt="" />
                    <img src="/Medieval/Lava.png" alt="" />
                </div>
            </div>
            <BottomBar />

        </>
    )
}