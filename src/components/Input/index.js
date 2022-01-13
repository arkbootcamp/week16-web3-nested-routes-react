import React from 'react'

const Input = ({type, ...props}) => {
    return (
        <input type={type ? type : 'text'} {...props} className='py-3 px-7 block my-5 bg-transparent border-b-2 focus:outline-none border-gray-400 w-full'/>
    )
}

export default Input
