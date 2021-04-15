import React from 'react';
import reactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard';


const App = () =>{
    return (
        <div className = "ui container comments">
    <ApprovalCard >
        
        <CommentDetail author = "sam" timeAgo="Today at 6:00pm" comment = "woah!" image = {faker.image.avatar()}/> 
        <CommentDetail author = "jack" timeAgo="Yesterday at 4:00pm" comment = "niceee!" image =  {faker.image.avatar()}/>   
        <CommentDetail author = "brad" timeAgo="Today at 11:45am" comment = "hahah!"image=  {faker.image.avatar()}/>   

    </ApprovalCard>
        </div>

    );
};

reactDOM.render(
    <App/>, document.querySelector('#root')
)
