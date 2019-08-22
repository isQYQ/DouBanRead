import React, { lazy, Suspense } from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import Loading from './pages/common/Loading/Loading'

import NotFind from './pages/common/NotFind/NotFind'
// 组件懒加载
// 根页面
const Home = lazy(()=>import('./pages/home/Home/Home'));
const Login = lazy(()=>import('./pages/login/Login/Login'));
const Register = lazy(()=>import('./pages/login/Register/Register'));
const Mine = lazy(()=>import('./pages/mine/Mine'));
const Cart = lazy(()=>import('./pages/cart/Cart'));
const Bookshelf = lazy(()=>import('./pages/bookshelf/Bookshelf'));
// 子页面
const BookDetailToCart = lazy(()=>import('./pages/home/BookDetailToCart/BookDetailToCart'));
const BookDetailToShelf = lazy(()=>import('./pages/home/BookDetailToShelf/BookDetailToShelf'));

const AppPanel = (props)=>{
  return (
    <Router>
      <div className="app">
        {/* 根页面 */}
        <Switch>
          <Route path="/" exact render={()=>{
            return <Redirect to="/home"/>
          }}/>
          <Route path="/home" exact component={Home}/>
          <Route path="/mine" exact component={Mine}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact component={Register}/>
          <Route path="/cart" exact component={Cart}/>
          <Route path="/bookshelf" exact component={Bookshelf}/>

        {/* 子页面 */}
        <Route path="/book/detail/to/cart" component={BookDetailToCart}/>
        <Route path="/book/detail/to/shelf" component={BookDetailToShelf}/>

        <Route component={NotFind}/>
        </Switch>

      </div>
    </Router>
  )
}

const App = (props)=>{
  return (
    <Suspense fallback={<Loading/>}>
      {props.isLogin ? <AppPanel /> : <Login />}
    </Suspense>
  );
}

const mapStateToProps = (state)=>({
  isLogin: state.login.isLogin
})
const mapDispatchToProps = ()=>({

})

export default connect(mapStateToProps, mapDispatchToProps)(App);