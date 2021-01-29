import React, { useState } from 'react'               //usar rafc para importar automaticamente react
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    const [categorias, setcategorias] = useState(['Sakura Card Captor'])
    /* const handleAdd = () =>{
         setcategorias([...categorias, 'HunterXHunter']);
     }
 */

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setcategorias={setcategorias} />
            <ol>
                {
                    categorias.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </div>
    )
}


