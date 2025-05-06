import React, { useEffect, useState } from "react";
import { db } from "../../backend/firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";

export default function CommentSection() {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");

  const commentsRef = collection(db, "comments");

  useEffect(() => {
    const q = query(commentsRef, orderBy("timestamp", "desc"));
    const unsub = onSnapshot(q, (snapshot) => {
      setComments(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsub();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      await addDoc(commentsRef, {
        text: input,
        timestamp: serverTimestamp()
      });
      setInput("");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Comment Section</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write a comment..."
        />
        <button type="submit">Post</button>
      </form>
      <ul>
        {comments.map((c) => (
          <li key={c.id}>{c.text}</li>
        ))}
      </ul>
    </div>
  );
}
