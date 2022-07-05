import React, { useEffect, useRef, useState } from 'react';

import { Link } from 'react-router-dom';

const Movie = ({Dlphim}) => {

    const [video,setvideo] = useState(Dlphim.episodes[0].server_data[0].link_embed)
    const [index,setIndex] = useState(Dlphim.episodes[0].server_data[0].slug)
    const content = useRef()
    useEffect(()=>{
        content.current.innerHTML = Dlphim.movie.content
    },[])

    return (
        <div className='py-20 min-h-screen bg-gray-800 '>
            <div className='container mx-auto xxl:mx-3'>
                <Link to='/first-react' className='text-white text-2xl py-4 border-b-[1px] border-slate-600 block'>
                    <i className="fas fa-arrow-left"></i> 
                    <span className='ml-5'>Home</span>
                </Link>
                <div className='grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-4 gap-y-2 sm:gap-4 my-5 p-2 bg-gray-700 rounded-md'>
                    <div className='relative overflow-hidden rounded-md col-span-2 lg:col-span-1' >
                        <img src={Dlphim.movie.thumb_url}></img>
                        <div className='absolute bottom-0 bg-[rgba(0,0,0,0.7)] h-[20%] w-full text-white flex justify-center items-center'>
                            <div className='text-center  '>
                                <a href='#movie' className='w-[30%] bg-purple-600  font-semibold p-3 rounded-sm'>Xem Phim</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-3 text-slate-100'>
                        <h1 className='text-center font-semibold text-2xl'>{Dlphim.movie.name}</h1>
                        <h3 className='text-center text-slate-400'>{Dlphim.movie.origin_name}</h3>
                        <table className='text-blue-300 w-full text-start'>
                            <tbody>
                            <tr className='border-b-[1px] border-slate-500 w-full'>
                                <td className='px-2 py-1 w-[30%]'>Trạng thái</td>
                                <td className='px-2 py-1'>{Dlphim.movie.episode_current || "Đang cập nhật"}</td>
                            </tr>
                            <tr className='border-b-[1px] border-slate-500 w-full'>
                                <td className='px-2 py-1  w-[30%]'>Số tập</td>
                                <td className='px-2 py-1'>{Dlphim.movie.episode_total || "Đang cập nhật"}</td>
                            </tr>
                            <tr className='border-b-[1px] border-slate-500 w-full'>
                                <td className='px-2 py-1 w-[30%]'>Thời lượng</td>
                                <td className='px-2 py-1'>{Dlphim.movie.time || "Đang cập nhật"}</td>
                            </tr>
                            <tr className='border-b-[1px] border-slate-500 w-full'>
                                <td className='px-2 py-1 w-[30%]'>Năm phát hành</td>
                                <td className='px-2 py-1'>{Dlphim.movie.year || "Đang cập nhật"}</td>
                            </tr>
                            <tr className='border-b-[1px] border-slate-500 w-full'>
                                <td className='px-2 py-1 w-[30%]'>Chất lượng</td>
                                <td className='px-2 py-1'>{Dlphim.movie.quality || "Đang cập nhật"}</td>
                            </tr>
                            <tr className='border-b-[1px] border-slate-500 w-full'>
                                <td className='px-2 py-1 w-[30%]'>Ngôn ngữ</td>
                                <td className='px-2 py-1'>{Dlphim.movie.lang || "Đang cập nhật"}</td>
                            </tr>
                            <tr className='border-b-[1px] border-slate-500 w-full'>
                                <td className='px-2 py-1 w-[30%]'>Đạo diễn</td>
                                <td className='px-2 py-1'>{Dlphim.movie.director.join(' , ')|| "Đang cập nhật"} </td>
                            </tr>
                            <tr className='border-b-[1px] border-slate-500 w-full'>
                                <td className='px-2 py-1 w-[30%]'>Diễn viên</td>
                                <td className='px-2 py-1'>{Dlphim.movie.actor.join(' , ') || "Đang cập nhật"}</td>
                            </tr>
                            <tr className='border-b-[1px] border-slate-500 w-full'>
                                <td className='px-2 py-1 w-[30%]'>Thể loại</td>
                                <td className='px-2 py-1'>{Dlphim.movie.category.map((e)=> e.name).join(' , ') || "Đang cập nhật"}</td>
                            </tr>
                            <tr className='border-b-[1px] border-slate-500 w-full'>
                                <td className='px-2 py-1 w-[30%]'>Quốc gia</td>
                                <td className='px-2 py-1'>{Dlphim.movie.country.map((e)=> e.name).join(' , ') || "Đang cập nhật"}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='bg-gray-700 rounded-md p-2 text-gray-100 mb-5'>
                    <p className='bg-sky-800 px-4 py-1 rounded-md text-blue-300 font-semibold'>Nội dung phim</p>
                    <div className='px-4 py-3' ref={content}>
                       
                    </div>
                </div>
                <div id="movie" className='bg-gray-700 rounded-md p-2 text-gray-100 mb-5'>
                    <p className='bg-sky-800 px-4 py-1 rounded-md text-blue-300 font-semibold'>Xem phim ({Dlphim.movie.lang})</p>
                    <div className='px-4 py-3'>
                        <p><span className='text-blue-300 text-xl'> Server: </span>{Dlphim.episodes[0].server_name}</p>
                        <div className='grid grid-cols-5 md:grid-cols-10  gap-3 mt-3'>
                            {Dlphim.episodes[0].server_data.map((e,i)=>{
                                return (<a 
                                            key= {i} 
                                            className={index == e.slug ? 'cursor-pointer p-2 bg-slate-600 hover:bg-slate-600 rounded-md text-center': 'cursor-pointer p-2 bg-slate-800 hover:bg-slate-600 rounded-md text-center'}
                                            // href={e.link_embed}
                                            onClick={()=>{setvideo(e.link_embed);setIndex(e.slug)}}
                                        >
                                            {e.name}
                                        </a>)
                            })}
                        </div>
                    </div>
                </div>
                <iframe src={video}
                        // allow='autoplay; encrypted-media'
                        allowFullScreen
                        title='video'
                        className='w-full md:h-[600px] h-[500px] rounded-lg'
                />
            </div>
        </div>
    );
};

export default Movie;