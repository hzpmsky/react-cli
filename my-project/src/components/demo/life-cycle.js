import React from 'react'

class LifeCycle extends React.Component{
    constructor(){
        super()
        this.state = {
            date: new Date()
        }
    }
    componentDidMount(){
        var timer = setInterval(()=>{this.setState({date: new Date()})},2000)
    }
    componentWillUnmount(){
        clearTimeout(this.timer)
    }
    render(){
        return(
            <div>
                <hr/>
                <h2>(四)生周期函数</h2>
                <div>{this.state.date.toLocaleTimeString()}</div> 
            </div>
        )
    }
}

export default LifeCycle 