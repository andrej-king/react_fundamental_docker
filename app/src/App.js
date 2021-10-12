import React from 'react'
import '../src/styles/App.css'
import PostItem from "./components/PostItem";

// basic hooks


function App() {
    return (
        <div className="App">
            {/*<Counter/>*/}
            {/*<ClassCounter/>*/}
            <PostItem id={1} title={"JavaScript"} body={"JavaScript - язык програмирования."}/>
        </div>
    );
}

export default App;
