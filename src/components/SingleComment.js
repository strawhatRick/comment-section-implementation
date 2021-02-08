import React, { useState } from "react";

const SingleComment = (props) => {
    const [commentValue, setCommentValue] = useState('');
    const [replyState, setReplyState] = useState(false);
    const replyAction = () => {
        setReplyState(!replyState);
    }
    const onSubmit = (e) => {
        e.preventDefault();

        const commentObject = {
            authorId: props.comment.authorId,
            postId: props.comment.postId,
            responseTo: props.comment.key,
            content: commentValue
        }
        setCommentValue('');
        setReplyState(!replyState);
        props.update(commentObject);
        
    };
    const handleChange = (e) => {
        setCommentValue(e.currentTarget.value);
    };
    return (
        <div>
            <div>
                <h4>{props.comment.authorId}</h4>
                <hr />
                <p>{props.comment.content}</p>
                <button style={{ marginLeft: '45%' }} onClick={replyAction}>Reply</button>
            </div>

            {replyState &&
                <form style={{ display: 'flex', marginBottom: '15px' }} onSubmit={onSubmit}>
                    <textarea
                        style={{ width: '100%', borderRadius: '5px' }}
                        onChange={handleChange}
                        value={commentValue}
                        placeholder='Comment here'
                    />
                    <br />
                    <button style={{ width: '20%', height: '52px' }} onClick={onSubmit}>Submit</button>
                    
                </form>
            }
        </div>
    )
}

export default SingleComment;