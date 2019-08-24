import React, { Component } from 'react';
import LoginAndRegister from './children/LoginAndRegister'
import ErWeiMa from './children/ErWeiMa'
import './style.scss'
class Login extends Component {
    state = {
        toggle:false,
        selectIndex:0
    }
    toggle = ()=>{
        this.setState({
            toggle:!this.state.toggle
        })
    }
    render() {
        return (
            <div id="login">
                <div className="mask"></div>
                <div className="login-label">
                    <div
                        className={`change ${this.state.toggle ? 'toCode' : 'toLogin'}`}
                        onClick={this.toggle}
                    >
                        {<img src={!this.state.toggle ? '/images/erweima.png' : '/images/pc.png'} alt=""/>}
                        <span></span>
                    </div>
                    {
                        !this.state.toggle ?
                        <LoginAndRegister selectIndex={this.state.selectIndex} changeIndex={(index)=>{
                            this.setState({
                                selectIndex:index
                            })
                        }}/> : <ErWeiMa toLoginAction={(flag,index)=>{
                            this.setState({
                                toggle:flag,
                                selectIndex:index
                            })
                        }}/>
                    }
                </div>
            </div>
        );
    }
}

export default Login;