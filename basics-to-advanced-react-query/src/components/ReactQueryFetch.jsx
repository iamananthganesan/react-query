import React from "react";
import PostsCard from "./PostsCard";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("http://localhost:3005/posts");
  return await response.json();
};
const ReactQueryFetch = () => {
  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(),
    //HERE WE LETTING THE REACT QUERY TO KNOW FETCH THE NEW DATA AFTER COMPLETOIN OF 5000ms
    //  staleTime:5000,
    //POOLING
    //FETCH THE GET API FOR EACH AND EVERY 1000MS
    // refetchInterval: 1000,
    //THOUGH YOUR MOVED TO DIFFERENT TAB THIS FLAG HELPS TO DECIDE TO GIT THE API IN THE BACKGROUND OR NOT
    //refetchIntervalInBackground: true
  });

  if (isLoading) {
    return <p>Fetching the posts...</p>;
  }

  if (isError) {
    return isError ? <p>something went wrong with this error{error}</p> : null;
  }

  console.log("isLoading", isLoading);
  console.log("isFetching", isFetching);
  return (
    <div>
      <PostsCard posts={data} />
    </div>
  );
};

export default ReactQueryFetch;
