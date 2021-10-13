import React, {useState} from 'react'
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

    const [title, setTitle] = useState('')
    const addNewPost = (e) => {
        e.preventDefault()
        console.log(title)
    }

    return (
        <div className="App">
            {/*<Counter/>*/}
            {/*<ClassCounter/>*/}

            <form>
                {/*Управляемый компонент*/}
                <MyInput
                    value={title}
                    onChange={e => setTitle(e.target.value)} {/* Получение данных с управляемого инпута */}
                    type="text"
                    placeholder="Название поста"
                />
                <MyInput type="text" placeholder="Описание поста"/>
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>

            <PostList posts={posts} title={"Список постов"}/>

        </div>
    );
}

export default App;
