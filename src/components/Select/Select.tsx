

import React from 'react'

import {ComboBox, Input, Label, ListBox} from "@heroui/react";

export default function Select({data}:{data:string}) {


    return (

<div className='w-full'>
         <ComboBox className=" w-full">
      <Label></Label>
      <ComboBox.InputGroup>
        <div className='flex'>

        <Input placeholder={data}  className={"w-full"} />
        <ComboBox.Trigger className='m-[-20px]' />
        </div>
      </ComboBox.InputGroup>
      <ComboBox.Popover>
        <ListBox>
          <ListBox.Item id="aardvark" textValue="Aardvark">
       
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="cat" textValue="Cat">
         
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="dog" textValue="Dog">
          
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="kangaroo" textValue="Kangaroo">
       
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="panda" textValue="Panda">
            
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="snake" textValue="Snake">
            
            <ListBox.ItemIndicator />
          </ListBox.Item>
        </ListBox>
      </ComboBox.Popover>
    </ComboBox>

    </div>
  )
}
