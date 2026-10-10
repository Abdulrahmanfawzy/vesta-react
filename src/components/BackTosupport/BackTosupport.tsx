


// import React from 'react'
// import IconM from '../IconM/IconM'
// import Conversation from '../Conversation/Conversation'
// import { TextArea } from '@heroui/react'
// import TextInfo from '../TextInfo/TextInfo'
// import RelatedToInfo from '../RelatedToInfo/RelatedToInfo'

// export default function BackTosupport() {
//   return (

// // <div className='container mx-auto py-12'>


// // {/* rows 1 */}

// // <div className='flex flex-col'>
// //     <div className='w-1/2  mt-10 ml-10  flex gap-14 border rounded-2xl p-4'>
        
// // <div>

// // <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
// // <rect width="47" height="47" rx="23.5" fill="#E1EDFC"/>
// // <path d="M27.875 13.2916V16.2083M27.875 22.0416V24.9583M27.875 30.7916V33.7083M13.2917 13.2916H33.7083C34.4819 13.2916 35.2237 13.5989 35.7707 14.1459C36.3177 14.6929 36.625 15.4347 36.625 16.2083V20.5833C35.8515 20.5833 35.1096 20.8906 34.5626 21.4376C34.0156 21.9845 33.7083 22.7264 33.7083 23.5C33.7083 24.2735 34.0156 25.0154 34.5626 25.5624C35.1096 26.1093 35.8515 26.4166 36.625 26.4166V30.7916C36.625 31.5652 36.3177 32.307 35.7707 32.854C35.2237 33.401 34.4819 33.7083 33.7083 33.7083H13.2917C12.5181 33.7083 11.7763 33.401 11.2293 32.854C10.6823 32.307 10.375 31.5652 10.375 30.7916V26.4166C11.1485 26.4166 11.8904 26.1093 12.4374 25.5624C12.9844 25.0154 13.2917 24.2735 13.2917 23.5C13.2917 22.7264 12.9844 21.9845 12.4374 21.4376C11.8904 20.8906 11.1485 20.5833 10.375 20.5833V16.2083C10.375 15.4347 10.6823 14.6929 11.2293 14.1459C11.7763 13.5989 12.5181 13.2916 13.2917 13.2916Z" stroke="#032271" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
// // </svg>


// // <h2>  #Tkt#09383  </h2>
// // <span>The return report for the last week is not showing the correct
// // numbers. please check and advise.</span>
// // </div>


// // <div>

// //  <button
     
// //       type="button"
// //       className={`w-full rounded px-3 py-2 text-xs font-medium transition ${
        
// //           "border border-[#ffd4cc] bg-[#fff5f2] text-[#f2765f]"
         
// //       }`}
// //     >
// //    open
// //     </button>

// // <span> createdAt </span>
// // <span className='bg-#161C36'> may 2024-2025 10:24 Am  </span> <br />
// // <span className='text-gray-400'>Last updated</span> <br />
// // <span className='bg-#161C36'>   may 2024-2025 10:24 Am  </span>

// // </div>







// //     </div>

// // {/* tabs */}
// // <div className='flex '>
// // <h2 className='px-12 py-3'> Conversation  </h2>
// // <h2 className='px-12 py-3'> Attachments  </h2>
// // </div>


// // <div className='flex flex-col gap-3'>


// // <div className='flex gap-2'>

// // <IconM  data='M'  />

// // <Conversation 
// // name=' Mohammed Ahmed Seller'
// // date=' may 2024-2025'
// // description='The return report for the last week is not showing the correct numbers.please check and advise'  />
// // </div>



// // <div className='flex gap-2'>

// // <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // <path d="M11.6667 0C5.23367 0 0 5.23367 0 11.6667V16.5002C0 17.6948 1.0465 18.6667 2.33333 18.6667H3.5C3.80942 18.6667 4.10617 18.5438 4.32496 18.325C4.54375 18.1062 4.66667 17.8094 4.66667 17.5V11.4998C4.66667 11.1904 4.54375 10.8937 4.32496 10.6749C4.10617 10.4561 3.80942 10.3332 3.5 10.3332H2.44067C3.08933 5.81817 6.97433 2.33333 11.6667 2.33333C16.359 2.33333 20.244 5.81817 20.8927 10.3332H19.8333C19.5239 10.3332 19.2272 10.4561 19.0084 10.6749C18.7896 10.8937 18.6667 11.1904 18.6667 11.4998V18.6667C18.6667 19.9535 17.6202 21 16.3333 21H14V19.8333H9.33333V23.3333H16.3333C18.907 23.3333 21 21.2403 21 18.6667C22.2868 18.6667 23.3333 17.6948 23.3333 16.5002V11.6667C23.3333 5.23367 18.0997 0 11.6667 0Z" fill="#161C36"/>
// // </svg>

// // <Conversation 
// // name=' Mohammed Ahmed Seller'
// // date=' may 2024-2025'
// // description='The return report for the last week is not showing the correct numbers.please check and advise'  />
// // </div>




// // <div className='flex gap-2'>

// // <IconM data='M'  />

// // <Conversation 
// // name=' Mohammed Ahmed Seller'
// // date=' may 2024-2025'
// // description='The return report for the last week is not showing the correct numbers.please check and advise'  />
// // </div>



// // </div>



// //     <div className="flex   gap-2 mt-3">
    
// //     <div>

// //       <TextArea className={"w-[400px] p-1 py-3 "} rows={1} 
// //       fullWidth placeholder="Secondary textarea" variant="secondary" >

// //         </TextArea>
  
// //     </div>

// // <div >
// //     <svg width="95" height="47" viewBox="0 0 95 47" fill="none" xmlns="http://www.w3.org/2000/svg">
// // <rect width="95" height="47" rx="23.5" fill="#161C36"/>
// // <rect x="0.5" y="0.5" width="94" height="46" rx="23" stroke="#5E6061" stroke-opacity="0.4"/>
// // <path d="M34 18L20 23.2087L27.3684 24.6345L29.2124 32L34 18Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
// // <path d="M27.3711 24.6345L29.4553 22.5507" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
// // <path d="M47.7727 20.2727C47.7045 19.697 47.428 19.25 46.9432 18.9318C46.4583 18.6136 45.8636 18.4545 45.1591 18.4545C44.6439 18.4545 44.1932 18.5379 43.8068 18.7045C43.4242 18.8712 43.125 19.1004 42.9091 19.392C42.697 19.6837 42.5909 20.0152 42.5909 20.3864C42.5909 20.697 42.6648 20.964 42.8125 21.1875C42.964 21.4072 43.1572 21.5909 43.392 21.7386C43.6269 21.8826 43.8731 22.0019 44.1307 22.0966C44.3883 22.1875 44.625 22.2614 44.8409 22.3182L46.0227 22.6364C46.3258 22.7159 46.6629 22.8258 47.0341 22.9659C47.4091 23.1061 47.767 23.2973 48.108 23.5398C48.4527 23.7784 48.7367 24.0852 48.9602 24.4602C49.1837 24.8352 49.2955 25.2955 49.2955 25.8409C49.2955 26.4697 49.1307 27.0379 48.8011 27.5455C48.4754 28.053 47.9981 28.4564 47.3693 28.7557C46.7443 29.0549 45.9848 29.2045 45.0909 29.2045C44.2576 29.2045 43.536 29.0701 42.9261 28.8011C42.3201 28.5322 41.8428 28.1572 41.4943 27.6761C41.1496 27.1951 40.9545 26.6364 40.9091 26H42.3636C42.4015 26.4394 42.5492 26.803 42.8068 27.0909C43.0682 27.375 43.3977 27.5871 43.7955 27.7273C44.197 27.8636 44.6288 27.9318 45.0909 27.9318C45.6288 27.9318 46.1117 27.8447 46.5398 27.6705C46.9678 27.4924 47.3068 27.2462 47.5568 26.9318C47.8068 26.6136 47.9318 26.2424 47.9318 25.8182C47.9318 25.4318 47.8239 25.1174 47.608 24.875C47.392 24.6326 47.108 24.4356 46.7557 24.2841C46.4034 24.1326 46.0227 24 45.6136 23.8864L44.1818 23.4773C43.2727 23.2159 42.553 22.8428 42.0227 22.358C41.4924 21.8731 41.2273 21.2386 41.2273 20.4545C41.2273 19.803 41.4034 19.2348 41.7557 18.75C42.1117 18.2614 42.589 17.8826 43.1875 17.6136C43.7898 17.3409 44.4621 17.2045 45.2045 17.2045C45.9545 17.2045 46.6212 17.339 47.2045 17.608C47.7879 17.8731 48.25 18.2367 48.5909 18.6989C48.9356 19.161 49.1174 19.6856 49.1364 20.2727H47.7727ZM54.7375 29.1818C53.8966 29.1818 53.1712 28.9962 52.5614 28.625C51.9553 28.25 51.4875 27.7273 51.1579 27.0568C50.8322 26.3826 50.6693 25.5985 50.6693 24.7045C50.6693 23.8106 50.8322 23.0227 51.1579 22.3409C51.4875 21.6553 51.9458 21.1212 52.5329 20.7386C53.1239 20.3523 53.8132 20.1591 54.6011 20.1591C55.0557 20.1591 55.5045 20.2348 55.9477 20.3864C56.3909 20.5379 56.7943 20.7841 57.1579 21.125C57.5216 21.4621 57.8114 21.9091 58.0273 22.4659C58.2432 23.0227 58.3511 23.7083 58.3511 24.5227V25.0909H51.6239V23.9318H56.9875C56.9875 23.4394 56.889 23 56.692 22.6136C56.4989 22.2273 56.2223 21.9223 55.8625 21.6989C55.5064 21.4754 55.086 21.3636 54.6011 21.3636C54.067 21.3636 53.6049 21.4962 53.2148 21.7614C52.8284 22.0227 52.531 22.3636 52.3227 22.7841C52.1144 23.2045 52.0102 23.6553 52.0102 24.1364V24.9091C52.0102 25.5682 52.1239 26.1269 52.3511 26.5852C52.5822 27.0398 52.9023 27.3864 53.3114 27.625C53.7204 27.8598 54.1958 27.9773 54.7375 27.9773C55.0898 27.9773 55.4079 27.928 55.692 27.8295C55.9799 27.7273 56.228 27.5758 56.4364 27.375C56.6447 27.1705 56.8057 26.9167 56.9193 26.6136L58.2148 26.9773C58.0784 27.4167 57.8492 27.803 57.5273 28.1364C57.2053 28.4659 56.8076 28.7235 56.3341 28.9091C55.8606 29.0909 55.3284 29.1818 54.7375 29.1818ZM61.3798 23.75V29H60.0389V20.2727H61.3344V21.6364H61.448C61.6525 21.1932 61.9631 20.8371 62.3798 20.5682C62.7965 20.2955 63.3344 20.1591 63.9934 20.1591C64.5844 20.1591 65.1014 20.2803 65.5446 20.5227C65.9878 20.7614 66.3325 21.125 66.5787 21.6136C66.8249 22.0985 66.948 22.7121 66.948 23.4545V29H65.6071V23.5455C65.6071 22.8598 65.429 22.3258 65.073 21.9432C64.7169 21.5568 64.2283 21.3636 63.6071 21.3636C63.179 21.3636 62.7965 21.4564 62.4594 21.642C62.126 21.8277 61.8628 22.0985 61.6696 22.4545C61.4764 22.8106 61.3798 23.2424 61.3798 23.75ZM72.3417 29.1818C71.6145 29.1818 70.9724 28.9981 70.4156 28.6307C69.8588 28.2595 69.4232 27.7367 69.1088 27.0625C68.7944 26.3845 68.6372 25.5833 68.6372 24.6591C68.6372 23.7424 68.7944 22.947 69.1088 22.2727C69.4232 21.5985 69.8607 21.0777 70.4213 20.7102C70.9819 20.3428 71.6296 20.1591 72.3645 20.1591C72.9326 20.1591 73.3815 20.2538 73.711 20.4432C74.0444 20.6288 74.2982 20.8409 74.4724 21.0795C74.6504 21.3144 74.7887 21.5076 74.8872 21.6591H75.0008V17.3636H76.3417V29H75.0463V27.6591H74.8872C74.7887 27.8182 74.6485 28.0189 74.4667 28.2614C74.2849 28.5 74.0254 28.714 73.6883 28.9034C73.3512 29.089 72.9023 29.1818 72.3417 29.1818ZM72.5235 27.9773C73.0614 27.9773 73.516 27.8371 73.8872 27.5568C74.2584 27.2727 74.5406 26.8807 74.7338 26.3807C74.927 25.8769 75.0235 25.2955 75.0235 24.6364C75.0235 23.9848 74.9288 23.4148 74.7395 22.9261C74.5501 22.4337 74.2698 22.0511 73.8985 21.7784C73.5273 21.5019 73.069 21.3636 72.5235 21.3636C71.9554 21.3636 71.4819 21.5095 71.1031 21.8011C70.7281 22.089 70.4459 22.4811 70.2565 22.9773C70.0709 23.4697 69.9781 24.0227 69.9781 24.6364C69.9781 25.2576 70.0728 25.822 70.2622 26.3295C70.4554 26.8333 70.7395 27.2348 71.1145 27.5341C71.4932 27.8295 71.9629 27.9773 72.5235 27.9773Z" fill="white"/>
// // </svg>

// //     </div>
  
  
// //     </div>
// // </div>




// // {/* End row 1 */}

// // <div>

// // <div className=' border   '>
// // <TextInfo/>
// // </div>
// // <RelatedToInfo/>
// // </div>










// // </div>




//   )
// }







import IconM from '../IconM/IconM'
import Conversation from '../Conversation/Conversation'
import { TextArea } from '@heroui/react'
import TextInfo from '../TextInfo/TextInfo'
import RelatedToInfo from '../RelatedToInfo/RelatedToInfo'
import QuickAction from '../QuickAction/QuickAction'
import Attachments from '../Attachments/Attachments'
import Tabletickets from '../Tabletickets/Tableteckets'
import OverviewSettings from '../OverviewSettings/OverviewSettings'
import { Link } from 'react-router-dom'


export default function BackTosupport() {
  return (

<div className='container mx-auto py-10'>


<div className='relative'>

<Link to={'/mySupportTickets'} className='absolute top-2 -left-8 cursor-pointer'>

<svg xmlns="http://www.w3.org/2000/svg"
 fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
</svg>
</Link>



<OverviewSettings name='Back To Support Teckets'  />
</div>




<div className="container mx-auto py-12 flex flex-col lg:flex-row gap-6 items-start">
    






      <div className="flex flex-col flex-1 w-full">
       {/* Tickets */}
        <div className="flex justify-between gap-14 border rounded-2xl p-4">
          <div>
            <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="47" height="47" rx="23.5" fill="#E1EDFC" />
              <path
                d="M27.875 13.2916V16.2083M27.875 22.0416V24.9583M27.875 30.7916V33.7083M13.2917 13.2916H33.7083C34.4819 13.2916 35.2237 13.5989 35.7707 14.1459C36.3177 14.6929 36.625 15.4347 36.625 16.2083V20.5833C35.8515 20.5833 35.1096 20.8906 34.5626 21.4376C34.0156 21.9845 33.7083 22.7264 33.7083 23.5C33.7083 24.2735 34.0156 25.0154 34.5626 25.5624C35.1096 26.1093 35.8515 26.4166 36.625 26.4166V30.7916C36.625 31.5652 36.3177 32.307 35.7707 32.854C35.2237 33.401 34.4819 33.7083 33.7083 33.7083H13.2917C12.5181 33.7083 11.7763 33.401 11.2293 32.854C10.6823 32.307 10.375 31.5652 10.375 30.7916V26.4166C11.1485 26.4166 11.8904 26.1093 12.4374 25.5624C12.9844 25.0154 13.2917 24.2735 13.2917 23.5C13.2917 22.7264 12.9844 21.9845 12.4374 21.4376C11.8904 20.8906 11.1485 20.5833 10.375 20.5833V16.2083C10.375 15.4347 10.6823 14.6929 11.2293 14.1459C11.7763 13.5989 12.5181 13.2916 13.2917 13.2916Z"
                stroke="#032271"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <h2 className="font-semibold mt-2">#Tkt#09383</h2>
            <span>
              The return report for the last week is not showing the correct numbers. please check and advise.
            </span>
          </div>

          <div className="min-w-[160px]">
            <button
              type="button"
              className="w-full rounded px-3 py-2 text-xs font-medium transition border border-[#ffd4cc] bg-[#fff5f2] text-[#f2765f]"
            >
              open
            </button>

            <div className="mt-3 text-sm">
              <span className="text-gray-400">Created at</span> <br />
              <span className="text-[#161C36]">may 2024-2025 10:24 Am</span> <br />
              <span className="text-gray-400">Last updated</span> <br />
              <span className="text-[#161C36]">may 2024-2025 10:24 Am</span>
            </div>
          </div>
        </div>

        {/* tabs */}
        <div className="flex mt-6">
          <h2 className="px-12 py-3">Conversation</h2>
          <h2 className="px-12 py-3">Attachments</h2>
        </div>

       {/* conversation */}
        <div className="flex flex-col gap-3  border rounded-3xl p-8 ">
          <div className="flex gap-2">
            <IconM data="M" />
            <Conversation
              name=" Mohammed Ahmed Seller"
              date=" may 2024-2025"
              description="The return report for the last week is not showing the correct numbers.please check and advise"
            />
          </div>

          <div className="flex gap-2">
            <IconM data='M'/>
            <Conversation
              name=" Mohammed Ahmed Seller"
              date=" may 2024-2025"
              description="The return report for the last week is not showing the correct numbers.please check and advise"
            />
          </div>

          <div className="flex gap-2">
            
            <IconM data="M" />

            <Conversation
              name=" Mohammed Ahmed Seller"
              date=" may 2024-2025"
              description="The return report for the last week is not showing the correct numbers.please check and advise"
            />


            
          </div>
        </div>

  
        <div className="flex items-center gap-2 mt-3">
          <div className="flex-1">
            <TextArea
            
              className="w-full p-1 py-3  "
              rows={1}
              fullWidth
              placeholder="Type a message..."
              placeholder:text-blue-400

              variant="secondary"
            />
          </div>

          <button
            type="button"
            className="flex items-center gap-2 h-[47px] px-6 rounded-full bg-[#161C36] text-white border border-[#5E6061]/40"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14 4L0 9.2087L7.3684 10.6345L9.2124 18L14 4Z"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M7.3711 10.6345L9.4553 8.5507"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Send
          </button>
        </div>
      </div>

   
      <div className="flex flex-col gap-4 w-full lg:w-[350px]">
        <div className="border rounded-2xl p-4">
          <TextInfo />
        </div>

        <RelatedToInfo />
   

    <QuickAction/>

<Attachments/>




      </div>
   
     
    
    </div>

</div>

  )
}