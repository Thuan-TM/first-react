
import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import Dsphim from '../component/Dsphim';
import Page from '../component/Page';
import Header from '../component/Header';


const Home = ({callPhim}) => {
  const [Listphims,setLisphim] = useState({items:[],pagination:{totalPages:0}})
  const [page,setPage] = useState(1)

  useEffect(()=>{
    fetch(`https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=${page}`)
        .then(repon => repon.json())
        .then(data => {
          setLisphim(data)
        }) 
  },[page])

  const callPage = useCallback((index)=>{
    setPage(index)
  })
    return (
        <div className='bg-gray-800 py-20 min-h-screen'>
            <Dsphim dataPhim = {Listphims.items.map(e=> e.slug)} callPhim= {callPhim} />
            <Page callPage = {callPage} maxPage = {Listphims.pagination.totalPages}/>
        </div>
    );
};

export default Home;