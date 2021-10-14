import React, {useState} from 'react';
import '../src/styles/App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from './components/UI/navbar/Navbar'
import AppRouter from './components/AppRouter'
import {AuthContext} from './context'

function App() {
    const [isAuth, setIsAuth] = useState(false)
    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <Router>
                <Navbar/>
                <AppRouter/>
            </Router>
        </AuthContext.Provider>
    )
}

export default App;
