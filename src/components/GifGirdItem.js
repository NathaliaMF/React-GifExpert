import React from 'react'

export const GifGirdItem = (img) => {
    console.log(img)
    return (
        
        <div className='card animate__fadeInDown'>
            <p>{img.title}</p>
            <img src={img.url} alt={img.title}/>
        </div>
    )
}
