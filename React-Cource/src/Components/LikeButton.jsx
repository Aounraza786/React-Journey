import { useState } from "react";

function LikeButton() {
  console.log("Component Rendered");

  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  function handleLike() {
    setLiked((prevLiked) => !prevLiked);

    setLikesCount((prevCount) => (liked ? prevCount - 1 : prevCount + 1));
  }

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={handleLike}>{liked ? "❤️ Liked" : "🤍 Like"}</button>

      <p>Likes: {likesCount}</p>
    </div>
  );
}

export default LikeButton;
