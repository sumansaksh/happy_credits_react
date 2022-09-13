import React from "react";
import PostCard from "./PostCard";
import "./Post.css";
import { getPost } from "../actions/postAction";
import { useSelector, useDispatch } from "react-redux";

import { useParams } from "react-router-dom";

import Pagination from "react-js-pagination";
const Post = () => {
  const { loading, error, posts } = useSelector((state) => state.posts);
  const [keyWord, setKeyword] = React.useState("");
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postPerPage, setPostPerPage] = React.useState(9);
  const totalPosts = 100;
  React.useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getPost(keyWord, currentPage));
  }, [dispatch, currentPage, error]);
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };
  //get current posts
  const indexLast = currentPage * postPerPage;
  const indexFirst = indexLast - postPerPage;
  const currentPosts = posts.slice(indexFirst, indexLast);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const searchSubmitHandler = async (e) => {
    e.preventDefault();
    dispatch(getPost(keyWord, currentPage));
  };
  return (
    <>
      <h1>Post App</h1>
      <div className="postSearch">
        <form className="searchBox" onSubmit={searchSubmitHandler}>
          <input
            type="text"
            placeholder="Search a Product ..."
            onChange={(e) => setKeyword(e.target.value)}
          />
          <input type="submit" value="Search" />
        </form>
      </div>
      <div className="cardContainer">
        {currentPosts &&
          currentPosts.map((single) => (
            <PostCard key={single.id} single={single} />
          ))}
      </div>
      <div className="paginationBox">
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={postPerPage}
          totalItemsCount={totalPosts}
          onChange={setCurrentPageNo}
          nextPageText="Next"
          prevPageText="Prev"
          firstPageText="1st"
          lastPageText="Last"
          itemClass="page-item"
          linkClass="page-link"
          activeClass="pageItemActive"
          activeLinkClass="pageLinkActive"
        />
      </div>
    </>
  );
};

export default Post;
