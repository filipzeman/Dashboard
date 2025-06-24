import { useEffect, useState } from "react";
import VideoGrid from "../components/VideoGrid";
import "../styles/Videos.css";

export default function Videos() {
  const [videos, setVideos] = useState([]);
  const [newId, setNewId] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/videos")
      .then((res) => res.json())
      .then(setVideos);
  }, []);

  const addVideo = () => {
    const id = extractYoutubeId(newId);
    if (!id) return alert("Invalid YouTube ID or URL");

    fetch("http://localhost:5000/api/videos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((added) => setVideos((prev) => [...prev, added]));

    setNewId("");
  };

  const extractYoutubeId = (input) => {
    const match = input.match(/(?:v=|youtu\.be\/)([^&\s]+)/);
    return match ? match[1] : input.length === 11 ? input : null;
  };

  return (
    <div className="videos-page">
      <header className="page-header">
        <h1>🎬 Videos</h1>
      </header>

      <div className="videos-input">
        <input
          className="videos-url-input"
          placeholder="Paste YouTube ID or URL"
          value={newId}
          onChange={(e) => setNewId(e.target.value)}
        />
        <button onClick={addVideo} className="videos-add-button">
          Add
        </button>
      </div>
      <VideoGrid videos={videos} />
    </div>
  );
}
