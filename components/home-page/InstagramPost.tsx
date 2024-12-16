import { getInstagramPostUrl } from "@/app/utils/actions";
import React, { useEffect, useState } from "react";
import { ScrollArea } from "../ui/scroll-area";

const InstagramPost = () => {
  // const [posts, setPosts] = useState<
  //   | {
  //       permalink: string;
  //       id: string;
  //     }[]
  //   | []
  // >([]);
  const [postsIds, setPostsIds] = useState([
    "DDDNAk-hk9x",
    "DDmZTpXKkBB",
    "DDhd86qxPyn",
  ]);

  // fetch instagram posts
  // useEffect(() => {
  //   (async () => {
  //     const res = await getInstagramPostUrl();
  //     const postUrls = res;
  //     if (postUrls) setPosts(postUrls);
  //   })();
  // }, []);

  return (
    <div>
      <ScrollArea className="w-full">
        {postsIds.map((id) => {
          return (
            <div key={id} className="w-full">
              <iframe
                src={`https://www.instagram.com/p/${id}/embed/`}
                frameBorder="0"
                scrolling="no"
                style={{
                  border: "none",
                  overflow: "hidden",
                  maxWidth: "540px",
                  minWidth: "326px",
                  width: "100%",
                  height: "500px",
                  position: "relative",
                }}></iframe>
              {/* <iframe
              
              src={`${post.permalink}embed/`}
              frameBorder="0"
              scrolling="no"
              style={{
                border: "none",
                overflow: "hidden",
                maxWidth: "540px",
                minWidth: "326px",
                width: "100%",
                height: "710px",
                position: "relative",
              }}></iframe> */}
            </div>
          );
        })}
      </ScrollArea>
    </div>
  );
};

export default InstagramPost;
