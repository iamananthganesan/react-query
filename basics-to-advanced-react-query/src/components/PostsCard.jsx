//POST CARD is a PURE FUNCTIONAL COMPONENT
const PostsCard = ({ posts }) => {
  return (
    <div className="post-card">
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsCard;
