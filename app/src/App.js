import React, {useState, useRef} from 'react'
import '../src/styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput'

// basic hooks


function App() {
    const [posts, setPosts] = useState([
        {id: "1", title: "JavaScript", body: "JavaScript - язык програмирования."},
        {id: "2", title: "Python", body: "Python - язык програмирования."},
        {id: "3", title: "Java", body: "Java - язык програмирования."},
    ])

    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        setPosts([...posts, {...post, id: Date.now()}]) /* Развернуть текущий массив и в конец добавить новый элемент. */

        /* Очистить инпуты */
        setPost({title: '', body: ''})
    }

    return (
        <div className="App">
            {/*<Counter/>*/}
            {/*<ClassCounter/>*/}

            <form>
                {/*Управляемый компонент*/}
                <MyInput
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                    type="text"
                    placeholder="Название поста"
                />
                <MyInput
                    value={post.body}
                    onChange={e => setPost({...posts, body: e.target.value})}
                    type="text"
                    placeholder="Описание поста"
                />
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>

            <PostList posts={posts} title={"Список постов"}/>

        </div>
    );
}

export default App;
