import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearNewsData, getNews } from '../features/newsSlice'
import img from  "../assets/default.jpg"
import Loading from './Loading'
import Error from './Error'

const News = () => {
const dispatch = useDispatch()
const {newsData , loading, error} = useSelector(state=>state.news)
console.log(error);
console.log(newsData);
  useEffect(()=>{
    dispatch(getNews())
    return ()=>{
      dispatch(clearNewsData())
    }
  },[])

  return (
    <>
    <h1 className='text-6xl text-red-700 text-center m-8 tracking-wider'>News</h1>
    {loading && <Loading/>}
    {error && <Error/>}
    <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 px-6'>
    
     
     { newsData?.map((news,index) => {
     
     const imgUrl = news.urlToImage || img
     return(
     <div className='max-w-full mx-auto rounded-md shadow-2xs overflow-hidden bg-white' key={index}>
      <img src={imgUrl} alt={news.title || "default"} className="w-full h-64 object-cover"  />
      <div className="p-4">
        <h4 className="text-2xl font-semibold text-gray-800 mb-2">{news.title}</h4>
        <p className="text-gray-600 text-base">{news.content}</p>
      </div>
     </div>)})}
    </main>
    </>
  )
}

export default News