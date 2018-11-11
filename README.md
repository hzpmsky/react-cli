https://github.com/hzpmsky/react-cli.git

##第一章
1.全局安装react脚手架：npm install create-react-app -g
2.初始化react项目：create-react-app my-project, 而 myProject 不允许,提示命名规则不允许大写字母
3.切换到项目目录下：cd my-project
4.启动react项目：npm start

##第二章
1.新建文件夹components/demo

2.jsx.js:jsx语法，props.js: props, state.js: state, life-cycle.js:life cycle 

3.变量声明提升：将变量放置父组件，解决兄弟组件或者子组件都使用该变量的情形；子组件传值给父组件：回调函数，父组件将方法传给子组件(<Son method={this.callback}>)，子组件调用该方法(this.props.method())将值塞到回调函数。

4.解决DOM方法的作用域：（1）在constructor(){}中，this.method = this.method.bind(this);(2) DOM的方法中，<button onClick={this.change.bind(this)}>;(3)回到函数写法，<input onChange={(e)=>{this.method(e)}}/>
