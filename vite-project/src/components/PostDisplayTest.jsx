import React, { useState, useEffect } from "react";
import { auth } from "../../backend/firebase";
import SignInTest from "./SignInTest";
import PostCreator from "./PostCreator";

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsSignedIn(true);
      } else {
        setIsSignedIn(false);
      }
    });

    return unsubscribe; // Cleanup on unmount
  }, []);

  return (
    <div>
      {!isSignedIn ? (
        <SignInTest /> // Show sign-in form if not authenticated
      ) : (
        <PostCreator /> // Show post creator if authenticated
      )}
    </div>
  );
}