# 项目介绍

一个web端的音乐网站、页面和网易云音乐一样；来源于`coderway`老师的`react`学习视频

## 优化

所有组件使用的都是函数组件+hooks的写法、优化有以下几点

1. 所有组件都用memo高阶组件包裹
2. 对于reducer中的state重新赋值使用了`immutablejs`
3. 对于赋给子组件的函数使用了`useCallback`
4. 使用了react-redux的的钩子`useDispatch`, `useSelector`, `shallowEqual`、而不是 `connect`
5. 所有的网络请求都走redux、并且对不同模块的reducer进行了合并
6. **最重要的一点、这个项目的结构划分很清晰、值得在以后的项目去使用**


