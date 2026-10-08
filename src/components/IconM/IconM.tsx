
import React from 'react'

export default function IconM({data}:{data:string}) {
  return (
    <div>
         <div
            aria-label="User avatar"
            className="flex h-9 w-9 items-center justify-center
             rounded-full bg-[#161C36] font-semibold text-white"
          >
            {data}
          </div>
    </div>
  )
}
