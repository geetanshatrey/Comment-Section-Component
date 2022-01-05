import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className='ui container comments'>
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    avatarId="3" 
                    timeAgo="Today at 8:15 PM" 
                    text="Awesome!" 
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail  
                    author="Kevin" 
                    avatarId="4" 
                    timeAgo="Today at 7:54 PM" 
                    text="Really liked it :)" 
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Jennifer" 
                    avatarId="5" 
                    timeAgo="Yesterday at 8:39 PM" 
                    text="Good read."
                />
            </ApprovalCard>  
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));