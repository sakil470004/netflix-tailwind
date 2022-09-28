import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'


function Row({ title, fetchURL }) {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(fetchURL).then((res) => {
            setMovies(res.data.results)
        })
    }, [fetchURL])
    // console.log(movies)
    const slideLeft = () => {
        const slider = document.getElementById(`slider${title}`);
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const slideRight = () => {
        const slider = document.getElementById(`slider${title}`);
        slider.scrollLeft = slider.scrollLeft + 500;
    }
    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
            <div className='relative flex items-center group '>
                <MdChevronLeft onClick={slideLeft} size={40} className='bg-white rounded-full absolute left-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' />
                <div id={`slider${title}`} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {movies.map((item, id) =>
                        <Movie key={id} item={item} />
                    )}
                </div>
                <MdChevronRight onClick={slideRight} size={40} className='bg-white rounded-full absolute right-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' />
            </div>

        </>
    )
}

export default Row