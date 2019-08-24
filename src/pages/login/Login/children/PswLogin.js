import React from 'react'

const PswLogin = (props)=>{
    return (
        <div className="psw-login">
            <p className="tips">
            </p>
            <div className="box">
                <input type="phone" placeholder="手机号" className="phone-input form-input"/>
            </div>
            <div className="phone-code">
                <input type="password" placeholder="密码" className="form-input code-input"/>
                <span className="recive-code">找回密码</span>
            </div>
            <div className="login-btn">
                <span>
                    登陆豆瓣
                </span>
            </div>
            <div className="auto-login">
                <input type="checkbox"/>
                <span>下次自动登录</span>
                <span className="no-recive">海外手机登陆</span>
            </div>
        </div>
    )
}

export default PswLogin;