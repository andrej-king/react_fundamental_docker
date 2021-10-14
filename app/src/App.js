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
                <Redirect to='/posts'/>
            </Switch>
        </Router>
    )
}

export default App;
