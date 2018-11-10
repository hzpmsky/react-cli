import React from 'react';

class JSX extends React.Component{
render(){
    const enjoy = ['football','basketball','pingpang']
    const isMan = false
    return(
        <div>
            <span><h2>(一)JSX语法</h2></span>
            1.循环  
            <ul>{
               enjoy.map( item => <li>{ item }</li> )  
            } 
            </ul>
            2.三目运算：
            <span>性别：{isMan?'男生':'女生'}</span>
            <div>3.数字计算: 12 + 34={12+34}</div>
        </div>
    )
}
}

export default JSX;