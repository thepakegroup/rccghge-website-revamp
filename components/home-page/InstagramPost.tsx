import React from "react";

const InstagramPost = () => {
  return (
    <div>
      <iframe
        src={`https://www.instagram.com/p/C4JQ7yIPF0E/embed/`}
        frameBorder="0"
        scrolling="no"
        style={{
          border: "none",
          overflow: "hidden",
          maxWidth: "540px",
          minWidth: "326px",
          width: "100%",
        }}
        width="100%"
        height="710"></iframe>
    </div>
  );
};

export default InstagramPost;
