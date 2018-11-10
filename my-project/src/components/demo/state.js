import React from 'react'

class StateDemo extends React.Component{
    constructor(props){
      super(props)
      this.state = {
          count: 0
      }
    }
    changeClick(){
        this.setState({
            count: ++this.state.count
        })
    }
    render(){
        return(
            <div>
                <div><h2>(三) state</h2></div>
                <button onClick={this.changeClick.bind(this)}>点赞 {this.state.count}</button>
            </div>
        )
    }
}

export default StateDemo