import React from 'react'

function Navbar() {
    return (
        <div className='flex item-center justify-between p-4 z-[100] w-full absolute'>
            <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>Netflix</h1>
            <div>
                <button className='text-white pr-4 cursor-pointer'>Sing In</button>
                <button className='bg-red-600 py-2 px-6 rounded cursor-pointer text-white'>Sing Up</button>
            </div>
        </div>
    )
}

export default Navbar