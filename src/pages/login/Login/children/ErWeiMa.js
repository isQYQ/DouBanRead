import React from 'react'

const ErWeiMa = (props)=>{
    return (
        <div className="er-code">
            <h3 className="title">二维码登陆</h3>
            <div className="sao-code">
                <img src="/images/code.png" alt=""/>
                <div className="text clearfix">
                    <span className="iconfont icon-scan fl"></span>
                    <div className="text-right fl">
                        <span>打开<i>豆瓣App</i></span><br/>
                        <span>扫一扫登陆</span>
                    </div>
                </div>
                <div className="bottom">
                    <span onClick={()=>props.toLoginAction(false,0)}>短信登陆/注册</span>
                    <i className="line">|</i>
                    <span onClick={()=>props.toLoginAction(false,1)}>密码登陆</span>
                </div>
            </div>
        </div>
    )
}

export default ErWeiMa;