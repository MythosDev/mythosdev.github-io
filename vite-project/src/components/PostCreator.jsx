import React, { useState, useEffect } from "react";
import { db, storage, auth } from "../../backend/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import DragDropFileInput from "../components/DropZone"; // Adjust path if needed

export default function PostCreator() {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState("");

  const handlePost = async (e) => {
    e.preventDefault();
    if (!username || !description || !image) return;

    if (!auth.currentUser) {
      setError("You need to be signed in to create a post.");
      return;
    }

    try {
      // Upload the image to Firebase Storage
      const imageRef = ref(storage, `images/${Date.now()}-${image.name}`);
      const snapshot = await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(snapshot.ref);

      // Add post to Firestore
      await addDoc(collection(db, "posts"), {
        username,
        description,
        imageUrl,
        timestamp: serverTimestamp(),
        userId: auth.currentUser.uid,
      });

      // Reset form
      setUsername("");
      setDescription("");
      setImage(null);
      setImagePreview(null);
      setError("");

    } catch (err) {
      setError("Error creating post: " + err.message);
    }
  };

  const handleFileDrop = (file) => {
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  // Clean up preview URL on unmount
  useEffect(() => {
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);

  return (
    <form
      onSubmit={handlePost}
      className="flex flex-col items-center text-center w-[400px] p-4 bg-slate-50"
    >
      <h2 className="font-bold text-xl w-full mb-2">Create Post</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className="bg-slate-100 m-2 p-2 rounded-md w-full"
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="bg-slate-100 m-2 p-2 rounded-md w-full"
      />

      <DragDropFileInput onFileDrop={handleFileDrop} />

      {/* {imagePreview && (
        <img
          src={imagePreview}
          alt="Preview"
          className="w-full h-auto rounded-md object-cover mt-2"
        />
      )} */}

      <button
        type="submit"
        className="bg-slate-400 m-2 p-2 rounded-md w-full"
      >
        Post
      </button>
    </form>
  );
}
