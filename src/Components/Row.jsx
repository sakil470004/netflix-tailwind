import React from 'react'

function Row({ title, fetchURL }) {
    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
        </>
    )
}

export default Row