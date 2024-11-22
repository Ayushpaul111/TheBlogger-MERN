import { format } from "date-fns";
import { Link } from "react-router-dom";

export default function Post({
  _id,
  title,
  summary,
  cover,
  content,
  author,
  createdAt,
}) {
  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${_id}`}>
          <img
            src={"http://localhost:4000/" + cover}
            alt=""
            style={{ borderRadius: "3px" }}
          />
        </Link>
      </div>
      <div className="text">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
          <a href="" className="author">
            {author.username}
          </a>
          <time datetime="">
            {format(new Date(createdAt), "MMM d, yyyy hh:mm")}
          </time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}
