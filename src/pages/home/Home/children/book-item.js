import React from 'react'
import './style.scss'
export default (props)=>{
    let {data,title} = props

    return (
        <div id='book-item'>
            <h1 className='title'>{title}</h1>
            <div className="list">
                {
                    data &&
                    data.map(item=>(
                        <div className="list-item" key={item.id}>
                            <img src={item.cover} alt=""/>
                            <div className='name'>
                                <p>{item.title}</p>
                                <p>{item.author[0].name}</p>
                            </div>
                            <div className='content'>
                                {item.abstract}
                            </div>
                            <div className='num'>
                                <span>{item.recVoteCount}票</span>
                                <span>|</span>
                                <span>{item.kinds[0].shortName}</span>
                            </div>
                        </div>
                    ))
                
                }
                
            </div>
        </div>
    )
}