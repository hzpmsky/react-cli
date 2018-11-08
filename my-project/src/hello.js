import React from 'react'
class Hello extends React.Component {
    render() {
        const array = ['Math','English','Chinese']
        const flag = true
        return (
            <div>
               <h1 > Hello,the world of React </h1>
               <ul>{
                   //{}可以内嵌任何js表达式
                   array.map(
                       item=>
                    <li>{item}</li>
                   )
                }
               </ul>
               <hr/>   
               {flag ?<p>通过</p>:<p>不通过</p>}
            </div> 
        )
    }
}
//导出
export default Hello