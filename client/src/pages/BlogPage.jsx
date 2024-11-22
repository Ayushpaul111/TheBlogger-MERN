import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../UserContext";
import { formatISO9075 } from "date-fns";

export default function BlogPage() {
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);

  if (!postInfo) return "";

  return (
    <div className="post-page">
      {userInfo.id === postInfo.author._id && (
        <div className="edit-row">
          <Link className="edit-btn" to={`/edit/${postInfo._id}`}>
            Edit
          </Link>
        </div>
      )}
      <div className="image">
        <img
          src={`http://localhost:4000/${postInfo.cover}`}
          alt=""
          style={{ borderRadius: "5px" }}
        />
      </div>

      <h1>{postInfo.title}</h1>
      <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
      <div className="author">by @{postInfo.author.username}</div>
      <div dangerouslySetInnerHTML={{ __html: postInfo.content }} />
    </div>
  );
}
