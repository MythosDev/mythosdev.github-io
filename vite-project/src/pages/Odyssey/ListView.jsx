import { Link } from 'react-router-dom';
import TagSystem from '../../components/TagSystem';

const ListElement = () => {
    return(
        <div className='w-[1080px] h-[75px] bg-slate-500 flex items-center justify-between  p-4'>
            <h2 className='font-bold text-2xl'>Title</h2>
            <div className=''>
                <TagSystem />
            </div>
        </div>
    );
}

export default function () {
    return(
        <>
            <div className='flex flex-col items-center h-full w-full gap-4'>
                <ListElement />
                <ListElement />
                <ListElement />
                <ListElement />
                <ListElement />
                <ListElement />
                <ListElement />
                <ListElement />
                <ListElement />
            </div>
        </>
    )
}