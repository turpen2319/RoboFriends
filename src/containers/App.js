import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => setRobots(users));
  },[]); //this second param means 'run useEffect when the stuff inside the array changes'
        //  so if I put [searchfield], useEffect will run whenever the searchfield changes
       //   but we wanna leave it empty so useEffect only runs one time intitially
      //  Adding the empty array essentially makes this the same as "componentDidMount()" 

  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  };

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  })

  console.log(robots);
  return !robots.length ?
    (
    <div className='loading'>
      <h1>Searching For Robots...</h1>
      <div className="lds-ripple"><div></div><div></div></div>
    </div>
    ):
    (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
      );
  
}

export default App;