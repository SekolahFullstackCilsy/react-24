import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card'
import {DataContext} from './contexts/DataContext'
import Home from './pages/Home'
import About from './pages/About'
import Book from './pages/Book'
import BookDetail from './pages/BookDetail'
import {BrowserRouter as Router, Switch, Route, NavLink, Redirect} from 'react-router-dom'


function App() {
  const [dataContext, setDataContext] = useState(null)

  return (
    <DataContext.Provider value={{ dataContext, setDataContext }}>
      <Router>
        <div className="App">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/book">Book</NavLink>
            </li>
          </ul>
          {/* <Card age={12}/> */}
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About} />
            <Route path="/book" exact component={Book} />
            <Route path="/book/:id" component={BookDetail} />
            <Redirect from="/contact" to="/about" />
          </Switch>
          {/* <Home />
          <About /> */}
        </div>
      </Router>
    </DataContext.Provider>
  );
}

export default App;
