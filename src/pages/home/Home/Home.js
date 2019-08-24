import React, { Component } from 'react';
import './style.scss'
import {connect} from 'react-redux'
import Banner from './children/banner/banner'
import Theme from './children/theme/theme'
import BookItem from './children/book-item'
import BookItems from './children/book-item/book-items'
import NewWork from './children/NewWork/NewWork'
import Mystery from './children/mystery/Mystery'
import {requestHotData, requestNewWorkData, requestMysteryData } from '../../../store/modules/home'
class Home extends Component {
    render() {
        let {hotData, newWorkData, mysteryData} = this.props;
        return (
            <div className="page" id="home">
                <Banner/>
                <Theme/>
                <div className='hot-and-new'>
                    <BookItem  data={hotData} title='热门完本'/>
                    <NewWork data={newWorkData} title='签约新作'/>
                </div>
                    <Mystery data={mysteryData} title='悬疑频道精选'/>
               
                {/* <BookItems data={hotData}/> */}
            </div>
        );
    }
    componentDidMount(){
        this.props.getHotData();
        this.props.getNewWorkData();
        this.props.getMysteryData();
    }
}
const mapStateToProps = (state)=>({
    hotData: state.home.hot_data,
    newWorkData: state.home.new_work_data,
    mysteryData: state.home.mystery_data,
})
const mapDispatchToProps = (dispatch)=>({
    getHotData(){
        let action = requestHotData();
        dispatch(action)
    },
    getNewWorkData(){
        let action = requestNewWorkData();
        dispatch(action)
    },
    getMysteryData(){
        let action = requestMysteryData();
        dispatch(action)
    },
})
export default connect(mapStateToProps,mapDispatchToProps)(Home);