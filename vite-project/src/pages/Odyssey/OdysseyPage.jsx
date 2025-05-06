import { Link } from 'react-router-dom';
import ListView from './ListView';
import BigView from './BigView';
import GridView from './GridView';

export default function () {
    return(
        <>
            <div>
                <Link to="/Home">Home</Link>
                <div className='h-[100vh] w-[100vw]'>
                    <ListView />
                </div>
                <div className='h-[100vh] w-[100vw]'>
                    <BigView />
                </div>
                <div className='h-[100vh] w-[100vw]'>
                    <GridView />
                </div>
            </div>

        </>
    )
}