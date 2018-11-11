import React from 'react'
import CommentList from './commentList'
import CommentBox from './commentBox'
class Example01 extends React.Component{
    constructor(){
        super()
        this.state = {
            comments: ['第一条评论']
        }
    }
    callback(value){
       this.setState({
        comments: [...this.state.comments, value]
       })  
    }
    render(){
        return(
            <div>
                <div><h2>综合练习(一)</h2></div>
                <CommentList comments={this.state.comments}></CommentList>
                <CommentBox commitValue={this.callback.bind(this)}></CommentBox>
            </div>
        )
    }
}
export default Example01