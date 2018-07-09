#React学习
## 项目开始
1. React Fiber: 16之后的版本, 对核心算法的一次重新实现
 
2. React(响应) 和 Vue 的选择: 

		(1) React 更加灵活, 适合逻辑复杂的场景
		(2) Vue Api 更加的丰富
		
3. 脚手架 create-react-app '项目名'

		(1) 默认使用 yarn 
		(2) yarn start 启动项目
		
4. index.js 里面的 registerServiceWorker() serviceWorker(涉及到web app)
	
	1. PWA 概念
		参考: https://blog.csdn.net/qq_19238139/article/details/77531191
		
		(1) 概念: PWA progressive web application (写网页的形式写APP的应用), 
		(2) 写好的网页上线到支持https 的服务器上, 那么有网情况下加载完的页面, 突然没网的时候也会自动缓存上次的内容
		(3) PWA 可以添加在手机的主屏幕上, 通过网络应用程序 Manifest file 提供类似于 APP 的使用体验
		
	2. PWA 关键技术
			
			(1) Service Worker(服务工程): 离线缓存文件, 相当于代理服务器
			(2) Manifest	(应用清单)  Manifest.json 文件			(3)	 Push Notification (推送通知)
		
5. App.test.js 自动化测试文件

6. manifest.json 文件   

			(1)	 能够将你浏览的网页添加到你的手机屏幕上
	       (2) 在 Android 上能够全屏启动，不显示地址栏 （ 由于 Iphone 手机的浏览器是 Safari ，所以不支持哦）
	       (3) 控制屏幕 横屏 / 竖屏 展示
	       (4) 定义启动画面
	       (5) 可以设置你的应用启动是从主屏幕启动还是从 URL 启动
	       (6) 可以设置你添加屏幕上的应用程序图标、名字、图标大小
		
## React的基础

1. JSX 语法 ('react' 模块编译, 使用jsx必须引入react)

		(1) js 文件中使用 html标签
		(2) 组件声明必须大写字母开头, 原始html标签是小写
		(3) 必须包含根元素
		
		(4) JSX细节
		
			 1. 注释: {/*注释*/}

			 2. 样式:	外联, 内嵌
			 			类名: className
			 			
		(5) dangerouslySetInnerHtml = {{__html: item}} : 类比Vue的 v-html  可能存在 xss攻击
		
		(6) label标签: 扩大input标签的可点击范围
		
				用法:  	<label htmlFor="insertArea">输入内容</label>  ==> 原生的for 改成 htmlFor
							<input id="insertArea" /> 
							点击label, input聚焦
		
		(7) setState, 推荐下面的, 性能上的问题
		
			注意: setState 是异步函数, 第二个参数是, 异步之后的回调
		
			const value = e.target.value 	// 下面直接取 e.target.value 可能取不到, 所以先存起来
			
			this.setState((pre) => ({
				inputVal: value
				list: [...pre.list, pre.inputVal]
			}), () => {
				异步回调
			})
			
		(8) 数据驱动型: '{}' 代表变量
		
		(9) 展开运算符: [...this.state.lis] 代表 拿到原来的数组所有项生成数组, 但是原来的数组不会改变
		
		(10) Fragment jsx标签, 只是当做包裹, 不会真是的反应在dom中, 也就不会影响布局, react 16 之后的
		
		
		
2. ToDoList 组件

		(1) Fragment 
				import { Component, Fragment } from 'react' 中,  Fragment 只做符合jsx的根元素, 但不影响布局
		(2) constructor 构造器类中的内容最先被执行
		
		(3) 实现新增删除功能:
				新增: list: [... this.statte.list, '新增的数据']    ==> 展开运算符, 会先继承原来的, 再加上新增的组成
						新数组, 给到list
				删除: 
		
## React设计思想
1. 编程方式: 

		(1) 命令式编程: 确切的操作DOM, 以前JQ
		(2) 声明式编程: 数据驱动型, 面向数据
		
2. 可以与其他框架共存: 所有关于`React`的部分, 都是在`root`DOM 里面, 其他框架可以不在`root`里面就行

3. 组件化: 树状

4. 单向数据流: `数据只能单向流动`, 子改变父也不是直接改变数据传回去, 而是通过子组件调父组件的方法, 父组件自己去改的值

5. 视图层框架:  react 本身只能做到父子组件传值(只能搭好视图), 大型框架里面的跨组件传值, 则需要依赖其他的框架(flux, redux)

6. 函数式编程: 便于前端自动化测试
		
3. immutable概念: state 不允许我们直接去改变, 考虑到性能优化

## React 调试工具
1. React developer tools , 安装完记得重启浏览器即可

#概念

### 	1. PropTypes
1. 在接受 props 的组件中: `import { PropTypes } from 'prop-types'`

2. 在 `export default` 前定义好父组件props传过来的值类型 `本组件名.propTypes = { test: PropTypes.func.isRequired }`

3. 注意上一步, 第一个 `propTypes` 小写, 第二个 `PropTypes` 大写

4. 传值类型错误, 会提警告

### 2. deaultProps

1. `本组件名.deaultProps = {test: 'hello'}`

2. 记得是与PropTypes同级


### 3. props state render函数
1. 当state, props发生改变, 自己的render函数(类里面的render函数)会被调用

2. 当父组件的render函数被运行时, 它的子组件的render函数都将被重新运行

### 4. 虚拟DOM
1. 自己实现

		(1) state 数据
		
		(2) JSX 模板
		
		(3) 数据 + 模板 结合, 生成真实的DOM, 显示
		
		(4) state 发生改变
		
		(5) 数据 + 模板 结合, 生成真实的DOM, 替换原始的DOM
		
		缺陷: DOM片段整个整个替换会很耗性能
2. 改进 

		(1) state 数据
		
		(2) JSX模板
		
		(3) 数据 + 模板 结合, 生成真实的DOM, 显示
		
		(4) state变化
		
		(5) 数据 + 模板结合, 生成新的真实的DOM, 并不直接替换原始的DOM
		
		(6) 新的DOM (DoucumentFragment文档碎片, 没那么耗性能) 和原始的DOM做对比, 找差异(DOM之间的比较)
		
		(7) 找到input 框的变化
		
		(8) 只用新的DOM中的input 元素进行替换老元素
		
		缺陷: 全部替换 --> 生成新的DoucumentFragment, DOM之间比较(DOM比对也耗性能) --> 只替换DOM
		
3. React 的实现

		(1) state 数据
		
		(2) JSX模板
		
		(3) 数据 + 模板 生成虚拟DOM( 虚拟DOM 本质就是 JS对象 , 用来描述真实的DOM) (减少损耗)
			['div', {id: 'abc'}, ['span', {}, 'Hello']]  --> js对象['标签名', {属性对象}, 子节点]的嵌套成虚拟DOM树
			
		(4) 用虚拟DOM, 生成真实的DOM, 显示
			<div id="abc"><span> Hello </span></div>  真实的DOM
		
		(5) state发生变化
		
		(6) 数据 + 模板 生成新的虚拟DOM, 只是比较 js对象 的差异, 进行改变(极大的提示性能)
		['div', {id: 'abc'}, ['span', {}, 'Bye']]
		
		(7) 比较虚拟DOM(也即JS对象) 的差别
		
		(8) 直接操作DOM, 改变span 中的内容
		
		改进: 整个DOM的替换 -> 生成新的DOM(DocumentFragement), 比较DOM, 替换DOM -> 生成虚拟DOM(JS对象), 比较虚拟DOM(比较js对象), 替换DOM
		
		优点: 
				(1) 性能提升
				(2) 虚拟DOM 使得跨端应用得以实现, React Native, 虚拟DOM本身是js对象(web, 原生应用都可以识别), 网页里面渲染成DOM, 原生里面渲染成原生组件
				
		
4. 深入了解虚拟DOM

		(1) render函数里面的  JSX -> React.createElement  -> 虚拟DOM(js对象) -> 真实的DOM
		
		(2) jsx: return ( <div> <span> hello </span> </div>  )  jsx就是React.createElement的语法糖
		
		(3) return ( React.createElement('div', {}, React.createElement('span', {}, 'hello')) )
		
5. 虚拟DOM的 diff算法

		(1) 概念: 旧虚拟DOM 和 新虚拟DOM 的比较(diff 算法)
		
		(2) 调用 setState 时, 才会触发 diff算法, 
		
		(3) setState react在底层设计考虑时, 使用的是异步函数的, 连续的调用setState时, 只会调用一次
			
		(4) 虚拟DOM同层比对: 新 和 旧 的同一层比对, 发现差异时, 直接不再比较后面的dom节点, 而是直接全部替换, 这样, 减少计算难度
		
		(5) key值, 虚拟DOM比对的性能, 有key值(所以尽量不要index, index在list项被删除时会变), 能迅速找到同一层



### 5.ref 的使用

1. 	例子: JSX == `ref = {(input) => {this.test = input }}`  绑定 this.test 就是这个 input 标签. 形参就是标签名

2. JS === `this.test.value` 调用

3. 缺点: React 推荐数据驱动, 而不是操作Dom, 而有时setState异步的原因, 导致 ref取到的DOM 有滞后性

4. 解决: setState的第二个参数, 回调函数里面


### 6.React 实现css过渡动画
1. Vue:  	`:class="isShow?'show':'hide'"`, 

2. react: 	`className={this.state.isShoe? "show": "hide"}` 变换类名绑定 css 动画  

3. 把简单的css 变成复杂的css , @keyframes 搭配 animation , 实现相对复杂的动画


### 7.react-transition-group 实现动画效果
(类比Vue) 进入前,进入中, 进入完成, 出场前, 出场中,出场后的 css样式和钩子

1. yarn add react-transition-group -S

2. 包括三个模块: transition, CSSTransition, TransitionGroup (transition最底层)

3. CSSTransition使用步骤: 单独组件使用

4. 使用了动画效果的, 它的子组件, 使用shouldComponentUpdate优化是没有用的


```JSX
			JSX 部分: 可以css部分控制动画, 也可以js钩子控制动画
			
	import { CSSTransition } from "react-transition-group" // 引用 CSSTransition 模块
	
	<CSSTransition
      in={this.state.isShow}		// 启动动画的根据
      timeout={1000}				// timeout 触发动画
      classNames='fade'				// css来控制, css文件类名的命名是以 'fade'开头, 如: .fade=enter
      unmountOnExit					// 动画结束是否销户DOM
      onEntered = {(el) => {el.style.color='tomato'}}   // JS钩子来控制动画, js部分, el代表dom元素
      appear={true}					// 刚启动页面时是否启动动画
    >
    
      <div>hello</div>		// 需要动画的模块放在 CSSTransition 标签中
      
    </CSSTransition>

```

``` CSS 
				CSS部分
		
	/* 搭配 react-transition-group 实现动画 */
	/* 动画进入前, 中, 后, 动画出场前, 中, 后 */
		.fade-enter {
		  opacity: 0;
		}
		.fade-enter-active {
		  opacity: 1;
		  transition: opacity 1s ease-in;
		}
		.fade-enter-done {
		  opacity: 1;
		}
		.fade-exit {
		  opacity: 1;
		}
		.fade-exit-active {
		  opacity: 0;
		  transition: opacity 1s ease-in;
		}
		.fade-exit-done {
		  opacity: 0;
		}
		/* 页面刚开始前, 页面启动完成 */
		.fade-appear {
		  opacity: 0;
		}
		.fade-appear-active {
		  opacity: 1;
		  transition: opacity 1s ease-in;
		}
```

4. TransitionGroup 使用步骤

```JSX
		当动态增加的组件时的动画, 使用 TransitionGroup + CSSTransition
		
		import { CSSTransition, TransitionGroup } from "react-transition-group";
		
		<TransitionGroup>	// TransitionGroup 标签包裹在最外层
	      {
	        this.state.list.map((item, index) => {
	          return (
	            <CSSTransition		// 生成的每一项都包裹在 CSSTransition 标签里面, 跟单独使用一样
	              timeout={1000}
	              classNames='fade'
	              unmountOnExit
	              onEntered = {(el) => {el.style.color='tomato'}}
	            >
	              <div>{item}</div>	// 这个是真实的动态元素
	            </CSSTransition>
	          )
	        })
	      }
	    </TransitionGroup>
		
```	

# 生命周期函数
1. 概念: 	某一时刻自动调用的钩子

2.	Initialization: 初始化

			(1)相当于 construct, 一开始就初始化执行

3. Mounting:	组件挂载

	 		(1)componentWillMount(组件挂载之前) -> render(JSX) -> componentDidMount(组件挂载之后)

4. Updation: 组件更新, props 或者 state发生变化时

			(1)  props:  componentWillReceiveProps
						(当组件从父组件接受props -> 当父组件的render(state, props更新)被重新执行, 且子组件第一次存在时,不会执行 -> 父render更新, 这里就会执行)
			
							-> shouldComponentUpdate(要求必须return boolean值, 以判断是否需要更新)
							
							-> componentWillUpdate (更新之前, 上步返回false, 则不执行) 
							
							-> render -> componentDidUpdate (更新完成后)
			
			(2) state: shouldComponentUpdate -> componentWillUpdate -> render -> componentDidUpdate

5. Unmounting: 卸载页面

		(1) componentWillUnmount 
		
6. 用法总结: 

		(1) shouldComponentUpdate: 判断是否是props变化, 还是父的render变化, 以确定是否更新, 减少性能消耗, 否则父组件render更新一下, 子的render函数更新一次
		
		(2) componentDidMount: 发送axios的请求

		


# 组件



## React 的性能优化
1. 事件绑定this放在 construct做, `this.handleClick = this.handleClick.bind(this)`

 			(1)这样保证只会执行一次, 并且最早执行, 而放在render函数内部, 每次更新都会重新绑定
 			
2. shouldComponentUpdate钩子函数: 

```
		shouldComponentUpdate (nextProps, nextState) {
		    // 假如props有更新才调用, 而不是父render函数调用就调用子的render函数
		    if(nextProps.content !== this.props.content) {
			      return true
		    } else {
			      return false
		    }
		  }
```
 			
2. React 的setState 是异步函数, 能把多次执行为一次, 还提供了回调

3. 虚拟DOM, 引用key值 和 同层比对, 来减少diff 算法的计算



## 父子组件传值
1. 父 --> 子: 父: key={value}   子: this.props.key  
2. 子 --> 父:	类比Vue, @handle = handleChange, 调用父组件传递过来的方法

			(1) 在父定义 handleChange 方法
			
			(2) 通过 父 --> 子, 即 key={this.handleChange.bind(this)}, 记得绑定this, 才能拿到父的方法
			
			(3) 通过this.props.handle() 调用, 传参达到传值
			
			
			
## Charles 模拟数据
1. 类比 `mock.js`, `json-server`

2. 中间代理服务器: 会抓取浏览器发送的http 请求,  当发现ip地址为你配置的地址的时候, 会自动返回 你自己配置的本地文件给你

# Redux
1. 概念: Reducer + Flux, 它并不是为React设计的, 只是React可以使用

2. redux-devtools: redux调试工具的使用

		(1) 安装 redux-devtools
		
		(2) store 的 index.js中添加, 然后浏览器中就有了redux调试工具
		const store = new createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

3. Redux 的工作流程:

		(1) React Component(借书的人) 
				
				(1) store.dispatch(action)  		// dispatch 组件触发 store的改变
				
				(2) store.subscribe('本地的方法')		// subscribe 组件监听 store 的变化
				
				(3) store.getState()			// 组件去获取store, 并不是实时的
				
				(4) action = {}					// 必须定义第一步的action, 同时需要 type
		
		(2) -> Action Creators(借书的动作) 
		
		(3) -> store(图书馆管理员) 
		
				(1) window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 代表有redux-devtools时, 就配置好
				
				(2) 一直在负责分发: Component的(state, action) -> reducer, 
		
		(4) -> Reducers (查询书籍目录)
		
				(1) state: 代表上一次的所有store数据
				
				(2) action: 接收到的更新, 包含更新的类型(执行哪个方法), 和更新的值
				
				(3) reducer: 可以接受state, 但是绝对不能直接修改state, 所以需要深拷贝一次state:  JSON.parse(JSON.stringify(state))
		
		(5) -> Store  -> Reat Component
		
4. 注意点

		(1) actionTypes.js 文件: action.type 用在 actionCreators 和 reducer, 错了一个单词不会报错, 找错很难, 引入文件里面变量的方式就容易多了
		
		(2) actionCreators.js: 集中管理action的所有方法, export const test = (val) => ({type: xxx, val}
		
		(3) store: 必须唯一
		
		(4) 只有store 可以改变 store 里面的内容(自己更新, 所以reducer是深克隆)
		
		(5) reducer: 必须是一个纯函数, 给定固定输入, 就一定会有固定输出(不可以输出异步操作, 异步函数, 异步请求等), 且不会有任何副作用(不可以改变state)
		
## Redux 中间件
0. 概念:  `action 和 store 的中间`, 对原始的`dispatch`进行封装(store才有, 所以一定是redux的中间件)

1. redux-devtools-extension 中间件 (调试工具也是中间件)

		(1) 参考: https://github.com/zalmoxisus/redux-devtools-extension
		
		(2) github中使用方式
		
2. redux-thunk 中间件

		(0) 实现: 对dispatch 的封装, 发现action是对象就直接派发给 store , 发现是函数就调用, 当函数里面还有dispatch时亦然

		(1) 进行ajax请求: 参考: https://github.com/reduxjs/redux-thunk
		
		(2) 存在的意义: 
					
			(1) 复杂异步操作的代码拆分					
			(2) 前端代码自动化测试
			
			(3) 最终还是为了减少组件的大小
			
		(3) 涉及的文件: 
		
			(1) React Component: 原来axios请求  ->  store.dispatch(action)
			
			(2) store的 index.js: 兼容两个中间件
 			
			(3) actionCreator.js: 原先返回对象  ->  返回函数, 同时做axios请求, 最后dispatch(action) 去更新store
									文件内部处理action 和 异步请求 的两个逻辑 
		
3. redux-saga 中间件

		(1) 存在的意义: 与redux-thunk意义, 两者可以互相替换
		
			
4. redux-logger 中间件

		(0) 实现: action ->  dispatch -> store 过程中, 每次都在dispatch的时候console.log() 一下派发, 依然是对dispatch的封装


5.  在store的index.js中 多个中间件共存, 参考各自的github

```
				
	import { createStore, applyMiddleware, compose } from 'redux';
	import thunk from 'redux-thunk';
	import reducer from './reducer';
	
	const composeEnhancers =
	  typeof window === 'object' &&
	  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
	    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
	    }) : compose;
	
	const enhancer = composeEnhancers(
	  // applyMiddleware(...middleware),
	  applyMiddleware(thunk),
	);
	const store = new createStore(
	  reducer, 
	  enhancer
	);
	export default store
```			
## React-redux


1. 区别于中间件, 它是一个第三方模块, 对React更加的契合

2. store.getState(), store.dispatch(action), store.subscribe() 都被 React-redux 更方便的实现了

3. 核心API:

	(1) Provider: 入口文件, index.js		
			(1) 使用: <Provider store={store}> <App/>  </Provider>
			
			(2) 意义: 把store 直接注入到它的所有子组件中(就不用每个文件都引入store了), 包裹下的组件可以直接使用store

	
	(2) connect: React Component
	
			 (1) 使用: React Component
				 export default connect(mapStateToProps, mapDispatchToProps)('组件名')
			 
			 (2) 意义: 把store 和组件做映射, 映射规则是两个函数 mapStateToProps 和 mapStateToProps
			 
			 (3) 容器组件和ui组件: connect, 可以把业务逻辑 和 ui组件 相互映射, 然后导出一个容器组件
			 
	(3) mapStateToProps: React Component
	
			(1) 使用: const mapStateToProps = (state) => {   // 必须接受store 里面的所有state
						return {
							list: state.list     // 把store 里面的list, 映射到组件的props 中, 名字也叫list
						}
					}
					
			(2) redux 比较: 类似于 store.getState(), 同时由于是props的映射, 所以实现了store.subscribe()
					
	(4) mapDispatchToProps: React Component
	
			(1) 使用:  const mapDispatchToProps = (dispatch) => {
							return {           // 在return 里面定义一个方法, 可以直接改变store 里面的值
								handelChange (dispatch) {   // dispatch作为参数, 相当于 store.dispatch()
									const action = {
										type: '',
										value: ''
									}
									dispatch(action)    // 调用也是直接 this.props.handleChange
								}
 							}
						}
			(2) redux 比较: 类似于 stroe.dispatch(action)
 		
# UI组件和容器组件

1. 一个React组件组成: 

		(1) ui组价负责渲染(傻瓜组件), 主要html部分, 一般是无状态组件
		
		(2) 容器组件负责逻辑(聪明组件), js部分, 一般是有状态组件

# 无状态组件(函数式组件)
1. 适用于ui组件

2. 有状态组件 和 无状态组件

		(1) 类组件是: this.props, 
		
		(2) 函数式组件: props, 性能更优

```
	const ToDoList = (props) => {
		return (
			<div> { props.inputVal } </div>
		)
	}
```

# Vue 和 React
1. 动画

		(1) Vue: 官方Vue.js 里面直接有
		(2) React: react-transition-group 需要另行安装
		
2. 路由

	