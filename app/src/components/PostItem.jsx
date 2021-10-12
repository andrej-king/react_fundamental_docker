import React from 'react';

const PostItem = () => {
    return (
        <div className={"post"}>
            <div className={"post__content"}>
                <strong>1. JavaScript</strong>
                <div>
                    JavaScript - язык програмирования.
                </div>
            </div>
            <div className={"post_btns"}>
                <button>Удалить</button>
            </div>
        </div>
    );
};

export default PostItem;
