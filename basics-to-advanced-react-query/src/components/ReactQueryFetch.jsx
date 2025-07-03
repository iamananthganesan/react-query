import React from "react";
import PostsCard from "./PostsCard";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("http://localhost:3005/posts");
  return await response.json();
};
const ReactQueryFetch = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(),
  });

  if (isLoading) {
    return <p>Fetching the posts...</p>;
  }

  if (isError) {
    return isError ? <p>something went wrong with this error{error}</p> : null;
  }

  return (
    <div>
      <PostsCard posts={data} />
    </div>
  );
};

export default ReactQueryFetch;
