import React from 'react'

class Props extends React.Component{
    componentDidMount(){
        console.log(`componentDidMount: `, this.props)
    }
    render(){
        return(
            <div>
                <div><h2>(二) props</h2></div>
                <div>{this.props.personObj.name}</div>
                <span>电话号码：{this.props.personObj.number}；</span>
                <span>兴趣爱好：{this.props.enjoy.map(
                    (item,index) => <span>{item},</span>
                )}</span>    
            </div>
        )
    }
}

export default Props
