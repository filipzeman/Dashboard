import ReactPlayer from "react-player";

export default function VideoGrid({ videos }) {
  return (
    <div className="videos-grid">
      {videos.map((video) => (
        <ReactPlayer
          crossOrigin="true"
          controls={false}
          key={video.id}
          url={`https://www.youtube.com/watch?v=${video.id}`}
          width="100%"
          height="170px"
          light
          pip
        />
      ))}
    </div>
  );
}
