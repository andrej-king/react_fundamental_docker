import React, {useState} from 'react'
import '../src/styles/App.css'
import PostItem from "./components/PostItem";

// basic hooks


function App() {
    const [posts, setPosts] = useState([
        {id: "1", title: "JavaScript", body: "JavaScript - язык програмирования."},
        {id: "2", title: "Python", body: "Python - язык програмирования."},
        {id: "3", title: "Java", body: "Java - язык програмирования."},
    ])

    return (
        <div className="App">
            {/*<Counter/>*/}
            {/*<ClassCounter/>*/}

            <h1 style={{textAlign: 'center'}}>Список постов</h1>
            {posts.map(post =>
                <PostItem post={post} key={post.id}/>
            )}

        </div>
    );
}

export default App;
