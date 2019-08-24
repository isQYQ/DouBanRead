import React, { Component } from 'react';
import './style.scss'
import BookItemList from '../book-item/book-item-list'
class Banner extends Component {
    swiperBookDOM = React.createRef();
    state = {
        show: false
    }
    render() {
        let {data,title} = this.props
        return (
            <>
            <div className='swiper-container' 
                ref={this.swiperBookDOM} 
                id='book-items'
                onMouseEnter={()=>(this.setState({show:true}))}
                onMouseLeave={()=>(this.setState({show:false}))}
            >
            <h1 className='title'>{title}</h1>
                <div className='swiper-wrapper'>
                       
                        <div className='swiper-slide'>
                            <BookItemList data={data.slice(0,10)}/>
                        </div>
                        <div className='swiper-slide'>
                            <BookItemList data={data.slice(10,20)}/>
                        </div>
                {/* <div className="swiper-pagination"></div> */}
                </div>
                {
                    this.state.show && <>
                     <div class="swiper-button-prev"></div>
                     <div class="swiper-button-next"></div>
                     </>
                }
                
               
            </div>
            </>
        );
    }
    // componentDidMount(){
    //     //初始化轮播图
    //     this.swiper = new window.Swiper(this.swiperBookDOM.current,{
    //         pagination: '.swiper-pagination',
    //         paginationClickable: true,
    //         loop: true,
    //         // autoplay: 1000,
    //         // autoplayDisableOnInteraction : false,
    //         prevButton:'.swiper-button-prev',
    //         nextButton:'.swiper-button-next',
    //         // onSlideChangeEnd: function(swiper){
    //         //     if(swiper.isEnd){
    //         // swiper.nextButton.css('display','none');
    //         // }else{
    //         // swiper.nextButton.css('display','block');
    //         // }
    //         //     }
    //     })
    // }
    componentDidUpdate(){
        this.swiper = new window.Swiper(this.swiperBookDOM.current,{
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
        this.swiper.destroy();
        this.swiper = new window.Swiper(this.swiperBookDOM.current,{
            pagination: '.swiper-pagination',
            loop: true
        })
    }
}

export default Banner;