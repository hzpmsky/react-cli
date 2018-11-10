import React from 'react'

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
        
    }
    changeInput(event){
        this.setState({
            value: event.target.value
        })
    }
    onSubmit(event){
        console.log(this.state.value)
        alert('数据已提交')
        event.preventDefault()
    }
    render(){
        return(
            <form onSubmit={this.onSubmit.bind(this)}>
                <div><h2>表单</h2></div>
                <label>评论</label>
                <input type='text' value={this.state.value} onChange={this.changeInput.bind(this)}/>
                <button>提交</button>   
            </form>
        )
    }
}

export default Form 