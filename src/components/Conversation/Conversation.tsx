


import React from 'react'
import IconM from '../IconM/IconM'

export default function Conversation({name , date , description}:{name:string , date:string , description:string}  ) {
  return (
    <div>
        <div className='flex gap-4'>



<div className='flex flex-col'>
    
<h2>   {name}  </h2>
<span>   {date}  </span>

<p className='w-[513px] bg-gray-200 m-2 p-3 rounded-2xl'>
 {description}   .</p>

</div>


</div>

    </div>
  )
}
