import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGirdItem } from './GifGirdItem';


export const GifGrid = ({ category }) => {
  
    const {data:images, loading} = useFetchGifs(category);
   /**  const [images, setImages] = useState([])

    useEffect(() => {
        getGif(category)
            .then(imgs => setImages(imgs));

    }, [category])
*/
    return (
        <>
            <h3 className="animate__fadeInDown">{category}</h3>
            <div className='card-gird '>

                {
                    images.map(img => (
                        <GifGirdItem
                            key={img.id}
                            {...img} />
                    ))
                }
            </div>
        </>
    )
}


