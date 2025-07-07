import PostsCard from "./PostsCard";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
    console.log("inside fetch post method")
  const response = await fetch("http://localhost:3005/posts");
  return await response.json();
};
const ReactQueryFetchByClick = () => {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(),
    enabled: false,
  });

  if (isLoading) {
    return <p>Fetching the posts...</p>;
  }

  if (isError) {
    return isError ? <p>something went wrong with this error{error}</p> : null;
  }

  console.log(data);

  return (
    <div>
      {data.length > 0 ? <PostsCard posts={data} />:null}
      <button onClick={refetch}>Load more...</button>
    </div>
  );
};

export default ReactQueryFetchByClick;
