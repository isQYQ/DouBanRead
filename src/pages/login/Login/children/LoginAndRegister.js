import React, { Component } from 'react';
import PhoneLogin from './PhoneLogin'
import PswLogin from './PswLogin'
const list = [
    {id:1,value:'短信登陆/注册'},
    {id:2,value:'密码登陆'}
]
class LoginAndRegister extends Component {
    render() {
        let {selectIndex,changeIndex} = this.props;
        return (
            <div className="login-register">
                <nav className="tab-bar clearfix">
                    {
                        list.map((item,index)=>(
                            <li
                                key={item.id} className={`tab-item fl ${selectIndex === index ? 'active' : '' }`}
                                onClick={()=>changeIndex(index)}
                            >
                                {item.value}
                            </li>
                        ))
                    }
                </nav>
                <div className="login-box">
                    {
                        selectIndex === 0 ?
                        <PhoneLogin/> : <PswLogin/>
                    }
                </div>
                <div className="other-login">
                    <div className="line">
                        第三方登陆：
                    </div>
                    <div className="login-from3">
                        <span className="iconfont icon-weixin"></span>
                        <span className="iconfont icon-weibo"></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginAndRegister;