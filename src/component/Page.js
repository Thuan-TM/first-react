
import React, { useState } from 'react';

function Page({callPage,maxPage}) {
    const [CurrentPage,setCurrentpage] = useState(1)
    function next(){
        setCurrentpage(CurrentPage + 1)
        callPage(CurrentPage + 1)
    }
    function pre(){
        setCurrentpage(CurrentPage - 1)
        callPage(CurrentPage + 1)
    }
    return (
        <div className='pt-5 px-5 text-gray-100 flex justify-between'>
            <span className='text-start  '>{CurrentPage} | {maxPage}</span>
            <div className=''>
                {CurrentPage == 1 || <i className="far fa-angle-left font-semibold text-3xl cursor-pointer" onClick={()=> pre()}></i>}
                <span className='px-2 bg-slate-400 text-slate-900 mx-5 text-2xl rounded-md'>{CurrentPage}</span> 
                {CurrentPage == 1000 || <i className="far fa-angle-right font-semibold text-3xl cursor-pointer" onClick={()=> next()}></i>}
            </div>
        </div>
    );
}

export default Page;