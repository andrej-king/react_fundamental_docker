import React from 'react';
import '../src/styles/App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import About from './pages/About'
import Posts from './pages/Posts'
import Error from './pages/Error'
import Navbar from './components/UI/navbar/Navbar'

function App() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/posts">
                    <Posts/>
                </Route>
                <Route path="/error">
                    <Error/>
                </Route>
                <Redirect to='/error'/>
            </Switch>
        </Router>
    )
}

export default App;
