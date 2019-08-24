import api from '../../utils/api'
import {get} from '../../utils/request'
//type
//热门完本
const SET_HOT_DATA = 'home/hot_data'
//签约新作
const SET_NEW_WORK_DATA = 'home/new_work_data'
//悬疑
const SET_MYSTERY_DATA = 'home/mystery_data'

//state
const initialState = {
    hot_data: [],
    new_work_data: [],
    mystery_data: []
}



//reducer
export default (state = initialState, action )=>{
    switch(action.type){
        case SET_HOT_DATA:
            return {
                ...state,
                hot_data: action.value.data.worksList
            }
        case SET_NEW_WORK_DATA:
            return {
                ...state,
                new_work_data: action.value.data.worksList
            }
        case SET_MYSTERY_DATA:
            return {
                ...state,
                mystery_data: action.value.data.worksList
            }
        default:
            return state;
    }
}

//同步action
const setHotData = (value)=>({
    type: SET_HOT_DATA,
    value
})
const setNewWorkData = (value)=>({
    type: SET_NEW_WORK_DATA,
    value
})
const setMysteryData = (value)=>({
    type: SET_MYSTERY_DATA,
    value
})


//异步action
//请求热门完本数据
export const requestHotData = ()=>async (dispatch)=>{
    let {data} = await get(api.HOT_DATA_API);
    let action = setHotData(data);
    dispatch(action)
}
//请求签约新作数据
export const requestNewWorkData = ()=>async (dispatch)=>{
    let {data} = await get(api.NEW_WORK_DATA_API);
    let action = setNewWorkData(data);
    dispatch(action)
}
//请求悬疑数据
export const requestMysteryData = ()=>async (dispatch)=>{
    let {data} = await get(api.MYSTERY_DATA_API);
    let action = setMysteryData(data);
    dispatch(action)
}