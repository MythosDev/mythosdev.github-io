import React, { useEffect, useState, useCallback } from "react";
import { db } from "../../backend/firebase";
import {
  collection,
  getDocs,
  addDoc,
  onSnapshot,
  serverTimestamp
} from "firebase/firestore";

export default function PostInspector() {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [commentUsername, setCommentUsername] = useState("");

  const fetchRandomPost = useCallback(async () => {
    const snapshot = await getDocs(collection(db, "posts"));
    const posts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    if (posts.length > 0) {
      const random = posts[Math.floor(Math.random() * posts.length)];
      setPost(random);
    }
  }, []);

  useEffect(() => {
    fetchRandomPost(); // initial fetch
  }, [fetchRandomPost]);

  useEffect(() => {
    if (!post?.id) return;
    const commentsRef = collection(db, "posts", post.id, "comments");
    const unsub = onSnapshot(commentsRef, (snap) => {
      const fetched = snap.docs.map((doc) => doc.data());
      setComments(fetched);
    });
    return () => unsub();
  }, [post]);

  const handleComment = async (e) => {
    e.preventDefault();
    if (!commentText || !commentUsername) return;
    await addDoc(collection(db, "posts", post.id, "comments"), {
      username: commentUsername,
      text: commentText,
      timestamp: serverTimestamp()
    });
    setCommentText("");
    setCommentUsername("");
  };

  if (!post) return <p>Loading post...</p>;

  return (
    <div className="w-[400px] flex flex-col gap-2 m-2 p-2">
      <button onClick={fetchRandomPost} className="p-2 bg-slate-500">Next Post</button>
      <img src={post.imageUrl} alt="Post" className="w-full rounded-xl" />
      <h2 className="text-center w-full">{post.username}</h2>
      <p className="p-2 bg-slate-100">{post.description}</p>

      <h3>Comments</h3>
      <ul>
        {comments.map((c, i) => (
          <li key={i}>
            <strong>{c.username}:</strong> {c.text}
          </li>
        ))}
      </ul>
      <form onSubmit={handleComment} className="flex flex-col bg-slate-300 p-2 w-full rounded-xl gap-2">
        <input
          placeholder="Username"
          value={commentUsername}
          onChange={(e) => setCommentUsername(e.target.value)}
          required
          className="p-2 rounded-xl"
        />
        <input
          placeholder="Comment"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          required
          className="p-2 rounded-xl"
        />
        <button type="submit">Comment</button>
      </form>
    </div>
  );
}
