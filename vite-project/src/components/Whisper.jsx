import { Link } from 'react-router-dom';

export default function () {
    return(
        <>
            <div className="w-[800px] h-[600px] bg-slate-700 flex flex-col m-4 p-4 gap-4 rounded-xl">
                <Link to="/Home"><h2 className='font-serif text-4xl w-full text-center'>Whisper</h2></Link>
                <div className='w-full bg-slate-300 h-full rounded-xl flex flex-col p-4 gap-2'>
                    <div className='w-full h-[80%] rounded-xl'>
                        {/* CHAT HERE */}
                    </div>
                    <textarea name="" id="" cols="30" rows="10" className='bg-slate-500 h-[20%] w-full rounded-xl align-bottom p-4'></textarea>
                </div>
            </div>

        </>
    )
}