import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setcategorias}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e =>{
        setInputValue(e.target.value);
    })

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        setcategorias( category =>[ inputValue, ...category] );
        setInputValue('');
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
        
    )
}
//defino que propiedad debe ser obligatoria 
AddCategory.propTypes = {
    setcategorias : PropTypes.func.isRequired
}
