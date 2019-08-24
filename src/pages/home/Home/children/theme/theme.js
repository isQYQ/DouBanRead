import React,{useState} from 'react'
import './style.scss'
export default (props)=>{
    let [select,setSelect] = useState(0)
    let list = [
        {id: 1, name: '悬疑频道', path: ''},
        {id: 2, name: '女性频道', path: ''},
        {id: 3, name: '幻想频道', path: ''},
        {id: 4, name: '文艺频道', path: ''},
        {id: 5, name: '历史频道', path: ''},
    ]
    return (
        <div className="theme">
            
            {
                list.map(item=>(
                <span key={item.id} title={item.name}
                className={`theme-item ${select===item.id ? 'active' : ''}`}
                onMouseEnter={()=>{
                    setSelect(item.id);
                }}
                onMouseLeave={()=>{
                    setSelect(0);
                }}
                >{item.name}</span>
                ))
            }
        </div>
    )
}