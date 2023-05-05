"use client"

import React from 'react'
import useSWR from 'swr'

const url = 'https://api.quotable.io/random?tags=technology';

const fetcher = (url:any ) => fetch(url).then((res)=>res.json())
 

export default  function ClientSide() {
    const {data, error, isLoading} = useSWR(url, fetcher)
    if(error) return <div>Failed to Load</div>
    if(isLoading) return <div>Data is loading</div>
  return (
    <div>
        <h1>
        client side Rendering
        </h1>
{data.content}
         </div>
  )
}

