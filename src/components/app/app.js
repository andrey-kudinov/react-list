import React, { Component } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form/post-add-form";

import "./app.css";
import styled from "styled-components";

const AppBlock = styled.div`
  display: grid;
  grid-template-columns:
    [full-start] minmax(1em, 1fr)
    [main-start] minmax(0, 50rem)
    [main-end] minmax(1em, 1fr)
    [full-end];
  & * {
    grid-column: main;
  }
`;

const StyledAppBlock = styled(AppBlock)`
  padding-top: 20px;
`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { label: "Going to learn React", important: false, like: false, id: 1 },
        { label: "This is so good", important: true, like: false, id: 2 },
        { label: "I need a break...", important: false, like: false, id: 3 },
      ],
      term: ''
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLiked = this.onToggleLiked.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);

    this.maxId = 4;
  }

  deleteItem(id) {
    setTimeout(() => {
      this.setState(({ data }) => {
        const index = data.findIndex((el) => el.id === id);

        const before = data.slice(0, index);
        const after = data.slice(index + 1);

        const newArr = [...before, ...after];

        return {
          data: newArr,
        };
      });
    }, 300);
  }

  addItem(body) {
    const newItem = {
      label: body,
      important: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  }

  onToggleImportant(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((el) => el.id === id);
      const old = data[index];
      const newItem = { ...old, important: !old.important };

      const before = data.slice(0, index);
      const after = data.slice(index + 1);

      const newArr = [...before, newItem, ...after];

      return { data: newArr };
    });
  }

  onToggleLiked(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((el) => el.id === id);
      const old = data[index];
      const newItem = { ...old, like: !old.like };

      const before = data.slice(0, index);
      const after = data.slice(index + 1);

      const newArr = [...before, newItem, ...after];

      return { data: newArr };
    });
  }

  onToggle(id, key) {
    this.setState(({ data }) => {
      const index = data.findIndex((el) => el.id === id);
      const old = data[index];
      const newItem = { ...old, key: !old.key };

      const before = data.slice(0, index);
      const after = data.slice(index + 1);

      const newArr = [...before, newItem, ...after];

      return { data: newArr };
    });
  }

  searchPost(items, term) {
    if (!term.length) {
      return items
    }

    return items.filter(item => {
      return item.label.includes(term)
    })
  }

  onUpdateSearch(term) {
    this.setState({term})
  }

  render() {
    // const data = this.state.data;
    const { data, term } = this.state;

    const liked = data.filter((item) => item.like).length;
    const allPosts = data.length;

    const visiblePosts = this.searchPost(data, term)

    return (
      <StyledAppBlock>
        <AppHeader liked={liked} allPosts={allPosts} />
        <div className="search-panel d-flex">
          <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
          <PostStatusFilter />
        </div>
        <PostList
          posts={visiblePosts}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}
        />
        <PostAddForm onAdd={this.addItem} />
      </StyledAppBlock>
    );
  }
}

/* 
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
      <PostList posts={data} onDelete={id => console.log(id)}/>
      <PostAddForm />
    </StyledAppBlock>
  );
};

export default App; */
