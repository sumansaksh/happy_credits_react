import React from "react";
import PostCard from "./PostCard";
import "./Post.css";
import { getPost } from "../actions/postAction";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "react-js-pagination";
import { useParams } from "react-router-dom";
const Post = () => {
  const { loading, error, posts } = useSelector((state) => state.posts);
  const { keyword } = useParams();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = React.useState(1);
  React.useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getPost(keyword, currentPage));
  }, [dispatch, keyword, currentPage, error]);
  {
    console.log(posts, "posts");
  }
  return (
    <>
      <div className="postSearch">
        <form className="searchBox">
          <input type="text" placeholder="Search a Product ..." />
          <input type="submit" value="Search" />
        </form>
      </div>
      <div className="cardContainer">
        {console.log(posts.length)}
        {posts &&
          posts.map((single) => <PostCard key={single.id} single={single} />)}
      </div>
    </>
  );
};

export default Post;
