import React, { Component } from 'react';
// import './style.scss'
import BookItemList from '../book-item/book-item-list'
class Mystery extends Component {
    swiperMysteryDOM = React.createRef();
    render() {
        let {data,title} = this.props
        return (
            <>
            <div className='swiper-container' ref={this.swiperMysteryDOM} id='book-items'>
            <h1 className='title'>{title}</h1>
                <div className='swiper-wrapper'>
                       
                        <div className='swiper-slide'>
                            <BookItemList data={data.slice(0,5)}/>
                        </div>
                        <div className='swiper-slide'>
                            <BookItemList data={data.slice(5,10)}/>
                        </div>
                </div>
                {/* <div className="swiper-pagination"></div> */}
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
            </>
        );
    }
    componentDidUpdate(){
        //初始化轮播图
        this.swiper1 = new window.Swiper(this.swiperMysteryDOM.current,{
            pagination: '.swiper-pagination',
            paginationClickable: true,
            loop: true,
            // autoplay: 1000,
            // autoplayDisableOnInteraction : false,
            prevButton:'.swiper-button-prev',
            nextButton:'.swiper-button-next',
            // onSlideChangeEnd: function(swiper){
            //     if(swiper.isEnd){
            // swiper.nextButton.css('display','none');
            // }else{
            // swiper.nextButton.css('display','block');
            // }
            //     }
        })
    }
    componentWillUnmount(){
        this.swiper1.destroy();
        this.swiper1 = new window.Swiper(this.swiperMysteryDOM.current,{
            pagination: '.swiper-pagination',
            loop: true
        })
    }
}

export default Mystery;