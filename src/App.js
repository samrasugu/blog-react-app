import logo from './logo.svg';
import './App.css';

import BlogCard from './BlogCard';
import {isArrayEmpty} from './Utils';
import React from 'react';

class App extends React.Component {
  
  const blogArr = [
    {
      id: 1,
      title: 'My first blog',
      description: 'This is my first blog',
      body: 'This is the body of my first blog'
    },
    {
      id: 2,
      title: 'My second blog',
      description: 'This is my first blog',
      body: 'This is the body of my first blog'
    },
    {
      id: 3,
      title: 'My third blog',
      description: 'This is my first blog',
      body: 'This is the body of my first blog'
    }
  ]

  const blogCards = isArrayEmpty(blogArr) ? [] : blogArr.map((item, pos) => {
    // console.log(item);

    return (
      <BlogCard className={'Blog'} key={pos} title={item.title} description={item.description} id={item.id}/>
    )
  })

  const onHideBtnClick = () => {
    alert('You clicked the hide button');
  }

  return (
    <div className="App">
      <button onClick={onHideBtnClick}>Hide List</button>
      <br></br>
      {blogCards}
      
    </div>
  );
}

export default App;
