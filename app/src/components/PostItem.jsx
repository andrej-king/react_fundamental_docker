import React from 'react';

const PostItem = (props) => {
    return (
        <div className={"post"}>
            <div className={"post__content"}>
                <strong>{props.id}. {props.title}</strong>
                <div>
                    {props.body}
                </div>
            </div>
            <div className={"post_btns"}>
                <button>Удалить</button>
            </div>
        </div>
    );
};

export default PostItem;