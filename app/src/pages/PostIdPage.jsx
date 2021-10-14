import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {useFetching} from "../hooks/useFetching"
import PostService from '../API/PostService'
import Loader from '../components/UI/loader/Loader'

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, postError] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    const [fetchComments, isCommentLoading, commentError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div>
            <h1>Вы открыли страницу поста с ID = {params.id}</h1>
            {isLoading
                ? <Loader/>
                : <div>{post.id}. {post.title}</div>
            }
            <h1>
                Комментарии
            </h1>
            {isCommentLoading
                ? <Loader/>
                : <div>
                    {comments.map(comm =>
                        <div key={comm.id} style={{marginTop: 15, width: 800}}>
                            <h5>{comm.email}</h5>
                            <h5>{comm.body}</h5>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default PostIdPage;
