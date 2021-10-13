import React, {useState} from 'react'
import '../src/styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: "1", title: "JavaScript", body: "JavaScript - язык програмирования."},
        {id: "2", title: "Python", body: "Python - язык програмирования."},
        {id: "3", title: "Java", body: "Java - язык програмирования."},
    ])


    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    // Получаем post из дочернего элемента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            {/*<Counter/>*/}
            {/*<ClassCounter/>*/}

            <PostForm create={createPost}/>
            {posts.length
                ? <PostList remove={removePost} posts={posts} title={"Список постов"}/>
                : <h1 style={{textAlign: 'center'}}>Посты не найдены!</h1>
            }
        </div>
    );
}

export default App;
