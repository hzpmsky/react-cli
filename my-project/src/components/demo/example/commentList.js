import React from 'react'

class CommentList extends React.Component{
    componentDidMount(){
        // console.log(`this.props: `,this.props)
    }
    render(){
        const commentList = this.props
        return(
            <div>
               <label><h3>评论列表</h3></label>
               <ul>
                   {commentList.comments.map((item,index)=>
                      <li>{index+1}.{item}</li>
                   )}
               </ul>
            </div>
        )
    }
}

export default CommentList