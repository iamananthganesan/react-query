import React, { useEffect, useState } from "react";
import PostsCard from "./PostsCard";

const RegularFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setposts] = useState([]);
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);

  const getPosts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:3005/posts");
      const data = await response.json();
      console.log(data);
      setposts(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsError(true);
    } finally {
      setIsError(false);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    //  INITIAL FETCH POSTS API
    getPosts();
  }, []);

  if (isLoading) {
    return <p>Fetching the posts...</p>;
  }

  if (isError) {
    return isError ? <p>something went wrong with this error{error}</p> : null;
  }
  return (
    <div className="container">
      {posts.length > 0 && <PostsCard posts={posts} />}
    </div>
  );
};

export default RegularFetch;
