import { Link } from "react-router-dom";

//POST CARD is a PURE FUNCTIONAL COMPONENT
const PostsCard = ({ posts }) => {
  return (
    <div className="post-card">
      {posts.map((post) => (
        <Link to={`/reactquerybyid/:${post.id}`} key={post.id}>
          <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostsCard;
