import React, { useState } from 'react';
import SingleComment from './SingleComment';
import ReplyComment from './ReplyComment';

const Comment = (props) => {
    const [comment, setComment] = useState('');
    const handleChange = (e) => {
        // console.log(e)
        setComment(e.currentTarget.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();

        const commentObject = {
            authorId: props.authorId,
            postId: props.postId,
            content: comment
        }
        setComment('');
        props.update(commentObject);


    };
    return (
        <div>
            <br />
            <p> Replies </p>
            <hr />
            <hr />
            {/* Comment Lists */}
            {console.log(props.commentList)}

            {props.commentList && props.commentList.map((comment, index) => (
                (!comment.responseTo &&
                <>
                    <SingleComment comment={comment} postId={props.postId} update={props.update} />
                    <ReplyComment commentList={props.commentList} postId={props.postId} parentCommentId={comment.key} update={props.update} />
                </>)
            )
            )}

            {/* Root Comment Form */}
            <form style={{ display: 'flex', marginTop: '15px' }} onSubmit={onSubmit}>
                <textarea
                    style={{ width: '100%', borderRadius: '5px' }}
                    onChange={handleChange}
                    value={comment}
                    placeholder='Comment here'
                />
                <br />
                <button style={{ width: '20%', height: '52px' }} onClick={onSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default Comment;