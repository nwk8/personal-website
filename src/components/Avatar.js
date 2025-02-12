import memojiVideo from "./memoji.MOV"; // Adjust path if needed

function Avatar() {
  return (
    <video autoPlay loop muted className="w-40 h-40 rounded-full">
      <source src={memojiVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default Avatar;
