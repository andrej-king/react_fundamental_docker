import React from 'react';
import '../src/styles/App.css';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import About from './pages/About'
import Posts from './pages/Posts'

function App() {
    return (
        <Router>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/posts">
                <Posts/>
            </Route>

        </Router>
    )
}

export default App;
