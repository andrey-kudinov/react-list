import React from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form/post-add-form";

import './app.css';

const App = () => {

  const data = [
    {label: 'Going to learn React', important: false, id: 'qwer'},
    {label: 'This is so good', important: true, id: 'asdf'},
    {label: 'I need a break...', important: false, id: 'zxcv'},
  ]
  
  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={data}/>
      <PostAddForm />
    </div>
  );
};

export default App;
