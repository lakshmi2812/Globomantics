import React, {Component} from 'react';
import { useEffect, useState, useMemo } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import FeaturedHouse from './FeaturedHouse';
import SearchResults from './search-results/SearchResults';
import HouseFilter from './HouseFilter';
import HouseFromQuery from './house/HouseFromQuery';

function App() {
  const [allHouses, setAllHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const rsp = await fetch("/houses.json");
      const houses = await rsp.json();
      console.log(houses);
      setAllHouses(houses); 
    };
    fetchHouses();
  }, []);

  /* hook used for memoization - here useMemo will remember/cache the featured house and display the same house even if the
  component re-renders multiple times. */
  const featuredHouse = useMemo(() => {
    if(allHouses.length){
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
  }, [allHouses]);

  // console.log("FeaturedHouse: ", featuredHouse.price, " ", featuredHouse.address);
  if(allHouses.length){
    console.log("FeaturedHouse inside App component: ", featuredHouse);
  }
  console.log("All Houses inside App: ", allHouses);

  return (
    <Router>
      <div className="container">
          <Header subtitle="Providing houses all over the world"/>
          <HouseFilter allHouses={allHouses} />
        <Switch>
          <Route path="/searchresults/:country">
            <SearchResults allHouses={allHouses} />
          </Route>
          <Route path="/house/:id">
              <HouseFromQuery allHouses={allHouses} />
          </Route>
          <Route path="/">
            <FeaturedHouse house={featuredHouse} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
