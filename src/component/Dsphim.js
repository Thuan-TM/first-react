import React, { useCallback, useEffect, useState } from 'react';
import Phim from './Phim';

const Dsphim = ({dataPhim,callPhim}) => {
    const [phim , setPhim] = useState(dataPhim)
    const [dsphim , setDsphim] = useState([])
    useEffect(()=>{
        setDsphim([])
        dataPhim.map(e =>{
            fetch(`https://ophim1.com/phim/${e}`)
            .then(repon => repon.json())
            .then(data => {
               setDsphim(pre => [...pre,data])
            })
        })        
    },[dataPhim])

    const callindext = useCallback((index)=>{
        callPhim(dsphim[index])
    })

    return (
        <>
            <h1 className='text-start text-xl md:text-3xl text-slate-100 font-bold pb-4 '>Danh Sách Phim</h1>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 px-1'>
                {
                    dsphim.map((e,i)=>{
                    return <Phim key={i} index={i} data = {e} callindext={callindext}/>
                    })
                }
            </div>
        </>
    );
};

export default Dsphim;