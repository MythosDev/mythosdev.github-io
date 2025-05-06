import { Link } from 'react-router-dom';

export default function () {
    return(
        <>
            <div className='justify-center flex flex-row w-[200px] h-[50px] bg-slate-500 mx-auto'></div>
            <div className="flex flex-row justify-center w-[3240px] relative left-1/2 -translate-x-1/2">
                <div className="bg-slate-500 w-[1280px] h-[720px] m-6"></div>
                <div className="bg-slate-500 w-[1280px] h-[720px] m-6"></div>
                <div className="bg-slate-500 w-[1280px] h-[720px] m-6"></div>
            </div>
            <div className='justify-center flex flex-row w-[500px] h-[200px] bg-slate-500 mx-auto'>
                <textarea className="w-full h-full bg-slate-500 text-left p-2 resize-none"></textarea>
            </div>
        </>
    )
}