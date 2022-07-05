import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'


const Phim = ({data,index,callindext} ) => {

    const navigate = useNavigate()
    return (
        <div 
        className='relative overflow-hidden cursor-pointer' 
        onClick={()=> { navigate(`/phim/${data.movie.slug}`); callindext(index)}}>
            <img src={data.movie.thumb_url} className='hover:scale-110 transition-transform'></img>
            <div className='absolute top-0 text-slate-200 font-semibold bg-[rgba(0,0,0,0.3)] px-2'>
                <span>{data.movie.lang}</span>
            </div>
            <div className='absolute bottom-0 bg-[rgba(0,0,0,0.7)] w-full min-h-[30%] text-left px-1'>
                <h1 className='text-slate-100 text-xl lg:text-2xl font-semibold'>{data.movie.name}</h1>
                <p className='text-slate-400 text-sm'>{data.movie.origin_name}({data.movie.year})</p>
            </div>
        </div>
    );
};

export default Phim;