import { Link } from 'react-router-dom';
import CommentSection from '../components/CommentSection';
import PostCreator from '../components/PostCreator';
import PostInspector from '../components/PostInspector';
import SignInTest from '../components/SignInTest';
import App from '../components/PostDisplayTest';
import Whisper from '../components/Whisper';

export default function () {
    return(
        <>
            <div className="flex flex-col items-center">
                <h2>Portfolio Page</h2>
                <p>Hi my name is XXXX XXXXX</p>
                <Link to="/Home">Home</Link>
                {/* <SignInTest />
                <CommentSection />
                <PostCreator />
                <PostInspector /> */}
                <br />
                <App />
                <br />
                <PostInspector />
                <br />
                <Whisper />
                <br />
                <br />
                <br />
            </div>

        </>
    )
}