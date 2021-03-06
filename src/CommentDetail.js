import React from "react";

const CommentDetail = (props) => {
    return (
        <div className='comment'>
            <a href='/' className='avatar'>
                <img alt='avatar' src={'https://i.pravatar.cc/300?img=' + props.avatarId}/>
            </a>
            <div className='content'>
                <a href='/' className='author'>
                    {props.author}
                </a>
                <div className='metadata'>
                    <span className='date'>{props.timeAgo}</span>
                </div>
                <div className='text'>{props.text}</div>
            </div>
        </div>
    )
}

export default CommentDetail;