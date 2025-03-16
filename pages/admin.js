import { useSession } from "next-auth/react";
import { useState } from "react";

export default function Admin() {
  const { data: session } = useSession();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  if (!session || !session.user.isAdmin) {
    return <p className="text-center text-red-500">Access Denied</p>;
  }

  const createPost = async () => {
    const response = await fetch("/api/createPost", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      alert("Post created!");
      setTitle("");
      setContent("");
    } else {
      alert("Error creating post");
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold">Admin Panel</h1>
      <input className="border p-2 w-full my-2" type="text" placeholder="Post Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea className="border p-2 w-full my-2" placeholder="Write your blog content here..." value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={createPost} className="px-4 py-2 bg-blue-500 text-white rounded-lg">Publish</button>
    </div>
  );
}
