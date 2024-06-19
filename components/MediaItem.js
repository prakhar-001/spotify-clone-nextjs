"use client"

import useLoadImage from "@/hooks/useLoadImage"
import Image from "next/image"
import { handleClientScriptLoad } from "next/script"

const MediaItem = ({data, onClick}) => {

    const imageUrl = useLoadImage(data)

    const handleClick = () => {
        if(onClick) {
            return onClick(data.id)
        }


    }
  return (
    <div onClick={handleClick} className='flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800 w-full p-2 rounded-md'>
        <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
            <Image className='object-cover' fill src={imageUrl || '/images/liked.jpg'} alt='Media Item'/>
        </div>
        <div className="flex flex-col gap-y-1 overflow-hidden">
            <p className='truncate text-white'>{data.title}</p>
            <p className='truncate text-neutral-400 text-sm'>{data.author}</p>
        </div>
    </div>
  )
}

export default MediaItem