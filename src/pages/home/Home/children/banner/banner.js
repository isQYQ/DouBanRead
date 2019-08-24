import React, { Component } from 'react';
import './style.scss'
class Banner extends Component {
    swiperListDOM = React.createRef();
    render() {
        return (
            <div className='swiper-container' ref={this.swiperListDOM} id='banner'>
                <div className='swiper-wrapper'>
                    <div className='swiper-slide'><img src="/images/pic01.jpg" alt=""/></div>
                    <div className='swiper-slide'><img src="/images/pic02.jpg" alt=""/></div>
                    <div className='swiper-slide'><img src="/images/pic03.jpg" alt=""/></div>
                </div>
                <div className="swiper-pagination" />
            </div>
        );
    }
    componentDidMount(){
        //初始化轮播图
        this.swiper = new window.Swiper(this.swiperListDOM.current,{
            pagination: '.swiper-pagination',
            paginationClickable: true,
            loop: true,
            autoplay: 2000,
            autoplayDisableOnInteraction : false,
        })
    }
    componentWillUnmount(){
        this.swiper.destroy();
        this.swiper = new window.Swiper(this.swiperListDOM.current,{
            pagination: '.swiper-pagination',
            loop: true
        })
    }
}

export default Banner;