import SearchBox from './components/search-box/search-box.component';
import {useState, useEffect} from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';

function App(){

  const [monsters,setmonsters] = useState([]);
  const [searchstring,setsearchstring] = useState('');

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setmonsters(users))
  },[])

 


  const filteredmonsters = monsters.filter((monster)=>{
    return monster.name.toLowerCase().includes(searchstring.toLowerCase());
  })

  const searchChange = (event) => {
      const searchtext = event.target.value
      setsearchstring(searchtext)
  }

  

  return (
    <div className='App'>
      <h1>MONSTERS ROLODEX</h1>
      <SearchBox
        className='search-box'
        placeholder='search monsters'
        onChangeHandler={searchChange}
      />
      <CardList
        monsters = {filteredmonsters}
        className = 'card-container'
      />
    </div>
  )
}

export default App;
