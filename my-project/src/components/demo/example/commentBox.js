import React from 'react'

class CommentBox extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            textValue:''
        }
    }
    textChange(event){
        this.setState({
            textValue: event.target.value
        })
        console.log(`textValue`, this.state.textValue)
    }
    submit(event){
        event.preventDefault()
        // 将数据传递到父组件数组中
        console.log(`123`,this.props)
        this.props.commitValue(this.state.textValue)
        this.setState({
            textValue: ''
        })
    }
    render(){
        return(
        //   <form onSubmit={this.submit.bind(this)}>
        <form onSubmit= {(e)=>this.submit(e)}>
              <textarea onChange={this.textChange.bind(this)} value={this.state.textValue} placeholder='请输入留言内容' rows='8' cols='40'></textarea>
              <button>留言</button>
          </form>
        )
    }
}

export default CommentBox