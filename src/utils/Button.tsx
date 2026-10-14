

import React, { Children } from 'react'

export default function Button({data}:{data:string}) {
  return (

<div className='h-[56px] w-[342px] bg-[var(--primary-900)] text-white rounded-3xl

flex justify-center items-center

'>


{data}


    </div>
  )
}
