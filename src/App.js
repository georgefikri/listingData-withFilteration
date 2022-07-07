// create functional component get data from api using axios
// store data in state
// filter data based on search input
// if searchData is more than 5 add pagination

import React, { useState, useEffect } from "react";
import { Get } from "./API/Get";
import { Posts } from "./Posts/Posts";
import { Pagination } from "./Pagination/Pagination";
// import App.css file
import "./App.css";

export const App = () => {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);
  const [clearSearch, setClearSearch] = useState(false);

  useEffect(() => {
    Get("https://jsonplaceholder.typicode.com/posts", setData, setSearchData);
  }, []);

  useEffect(() => {
    if (clearSearch) {
      setSearch("");
      setSearchData(data);
      setCurrentPage(1);
      setClearSearch(false);
    }
  }, [clearSearch, data]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts =
    search === ""
      ? searchData.slice(indexOfFirstPost, indexOfLastPost)
      : searchData;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleChange = (e) => {
    setSearch(e.target.value);
    const search = e.target.value.toLowerCase();
    const searchAllData = data.filter((post) => {
      return post.title.toLowerCase().indexOf(search) !== -1;
    });

    setSearchData(searchAllData);
  };

  return (
    <div className="App">
      <Posts
        search={search}
        handleChange={handleChange}
        currentPosts={currentPosts}
        setClearSearch={setClearSearch}
        searchData={searchData}
      />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={searchData.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
