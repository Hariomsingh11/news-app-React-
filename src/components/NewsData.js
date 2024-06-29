import React, { useEffect,useState } from 'react'
import {getNews} from '../Service/getNews'
import moment from 'moment'

import alanBtn  from '@alan-ai/alan-sdk-web'






export default function NewsData() {
    const [newsData,setNewsData]=useState([])
    const alankey ="77ed3d48f3ede80dd84f586046ca742f2e956eca572e1d8b807a3e2338fdd0dc/stage"
    const getAllNews=async()=>{
       let data=await getNews(`https://newsapi.org/v2/top-headlines?country=us`);
       setNewsData(data.data.articles)
    }

    useEffect(() => {
        alanBtn({
            key: '77ed3d48f3ede80dd84f586046ca742f2e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: (commandData) => {
              
              console.log(commandData.data)
            }
        });
      }, []);
    useEffect(()=>{
        getAllNews()
},[])


    console.log(newsData)
    
  return (
    <div className='main'>
     <h1>Voice News</h1>
    <div className='grid-main'>
     {newsData?.map((news)=>{
        return(
            <div className='grid-child'>
                <img 
                className='news-image'
                src={news?.urlToImage }/>
                <p className='news-title'>{news?.title}</p>

                <p className='news-content'>{news?.content}</p>
                <div className='space-between'>
                <p className='news-author'>Author:{news?.author? news?.author:'Author name not available'}</p>
                <p className='news-date'>Date:{moment(news?.publishedAt).format('LL')}</p>
                    </div>
                <a href={news?.url} target='_blank'>Read More..</a>
                </div>
        )
     })}
     </div>
    </div>
  )  
}
  