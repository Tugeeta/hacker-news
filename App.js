import * as React from 'react';
import logo from './logo.svg';
import './App.css';    



function App() {
  const stories = [
  {
    id: 0,
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    no_comments:4,
    points: 3,
  },
  {
    id: 1,
    title: 'Redux',
    url: 'https://reduxjs.org/',
    author: 'Andrew Clark, Dan Abramov',
    no_comments:5,
    points: 4,
  },
    ]
    const handleSearch = (event) => {
      console.log(event.target.value);
    }
  
  return (
    
    <div>
           
      <h1>Hacker News</h1>    
     <Search onSearch={handleSearch} /> 
      <hr/>
      <List list={stories}/>
      <img src={logo} className="App-logo" alt="logo" width={150}/>
      </div>
  )};

  const Search = (props) => {
    const [searchTerm, setsearchTerm] = React.useState('');

      const handleChange = (event) => {
        setsearchTerm(event.target.value);
        {/*console.log (event.target.value);*/}
      
      props.onSearch(event);
      };

        return (
        <div>
  <label htmlFor='search'>Search:</label>
  <input id='search' type='text' onChange={handleChange}/> 
    
  <button>GO</button>
  <p>
    Searching for <strong>{searchTerm }</strong>
  </p>
  </div>
        );
     };             


  const List = (props) => (
   <ul>
   {props.list.map((item)=>  (
  <Item key={item.Id} item={item}/>
))}
</ul>
);


        const Item = (props) => (
    <li>
<span>  
    <a href={props.item.url}>{props.item.title}</a>
        </span>
  
          <span>{props.item.author}</span>
      <span>{props.item.no_comments}</span>
      <span>{props.item.points}</span>
   </li>
        );   

export default App;
