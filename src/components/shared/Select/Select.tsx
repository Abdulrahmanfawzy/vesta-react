

// import React from 'react'

// import {ComboBox, Input, Label, ListBox} from "@heroui/react";

// export default function Select({data}:{data:string}) {


//     return (

// <div className='w-full'>
//          <ComboBox className=" w-full">
//       <Label></Label>
//       <ComboBox.InputGroup>
//         <div className='flex'>

//         <Input placeholder={data}  className={"w-full"} />
//         <ComboBox.Trigger className='m-[-20px]' />
//         </div>
//       </ComboBox.InputGroup>
//       <ComboBox.Popover>
//         <ListBox>
//           <ListBox.Item id="aardvark" textValue="Aardvark">
       
//             <ListBox.ItemIndicator />
//           </ListBox.Item>
//           <ListBox.Item id="cat" textValue="Cat">
         
//             <ListBox.ItemIndicator />
//           </ListBox.Item>
//           <ListBox.Item id="dog" textValue="Dog">
          
//             <ListBox.ItemIndicator />
//           </ListBox.Item>
//           <ListBox.Item id="kangaroo" textValue="Kangaroo">
       
//             <ListBox.ItemIndicator />
//           </ListBox.Item>
//           <ListBox.Item id="panda" textValue="Panda">
            
//             <ListBox.ItemIndicator />
//           </ListBox.Item>
//           <ListBox.Item id="snake" textValue="Snake">
            
//             <ListBox.ItemIndicator />
//           </ListBox.Item>
//         </ListBox>
//       </ComboBox.Popover>
//     </ComboBox>

//     </div>
//   )
// }










interface SelectProps {
  data: string;
  answer: string;
}

export default function Select({ data, answer }: SelectProps) {
  return (
    <details className="group border-b border-gray-200 py-4">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-[#161c36]">
        {data}

        <span className="shrink-0 text-lg text-[#161c36] transition-transform group-open:rotate-180">
          ⌄
        </span>
      </summary>

      <p className="mt-3 pr-6 text-sm leading-6 text-gray-500">
        {answer}
      </p>
    </details>
  );
}