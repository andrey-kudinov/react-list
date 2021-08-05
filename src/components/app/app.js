import React from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form/post-add-form";

import './app.css';
import styled from 'styled-components';

const AppBlock = styled.div`
    display:grid;
    grid-template-columns: 
        [full-start] minmax(1em, 1fr)           
        [main-start] minmax(0, 50rem)
        [main-end] minmax(1em, 1fr)
        [full-end]; 
  & * {
    grid-column: main;
  }
`

const StyledAppBlock = styled(AppBlock)`
  padding-top: 20px
`

const App = () => {

  const data = [
    {label: 'Going to learn React', important: false, id: 'qwer'},
    {label: 'This is so good', important: true, id: 'asdf'},
    {label: 'I need a break...', important: false, id: 'zxcv'},
  ]
  
  return (
    <StyledAppBlock>
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={data}/>
      <PostAddForm />
    </StyledAppBlock>
  );
};

export default App;
