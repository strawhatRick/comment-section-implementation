import React from 'react';
import SingleComment from './SingleComment';

const ReplyComment = (props) => (
    <>
        {props.commentList && props.commentList.map((comment, index) => (

            <>
                {console.log(comment.responseTo === props.parentCommentId)}
                {comment.responseTo === props.parentCommentId &&
                    <div style={{ marginLeft: '50px', width: '75%' }}>
                        <SingleComment comment={comment} postId={props.postId} update={props.update} />
                        <ReplyComment commentList={props.commentList} postId={props.postId} parentCommentId={comment.key} update={props.update} />
                    </div>
                }
            </>
        ))}
    </>
)


export default ReplyComment