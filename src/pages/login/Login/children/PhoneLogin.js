import React from 'react'

const PhoneLogin = (props)=>{
    return (
        <div className="phone-login">
            <p className="tips">
                <span>请仔细阅读</span>
                <i>豆瓣使用协议、隐私政策</i>
            </p>
            <div className="box">
                <input type="phone" placeholder="手机号" className="phone-input form-input"/>
                <span className="code-label">+86</span>
            </div>
            <div className="phone-code">
                <input type="text" placeholder="验证码" className="form-input code-input"/>
                <span className="recive-code">获取验证码</span>
            </div>
            <div className="login-btn">
                <span>
                    登陆豆瓣
                </span>
            </div>
            <div className="auto-login">
                <input type="checkbox"/>
                <span>下次自动登录</span>
                <span className="no-recive">收不到验证码</span>
            </div>
        </div>
    )
}

export default PhoneLogin;