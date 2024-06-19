"use client"
import React from 'react'
import { TbPlaylist } from 'react-icons/tb'
import { AiOutlinePlus } from 'react-icons/ai'
import useAuthModel from '@/hooks/useAuthModal'
import { useUser } from '@/hooks/useUser'
import useUploadModel from '@/hooks/useUploadModal'
import MediaItem from './MediaItem'
import useOnPlay from '@/hooks/useOnPlay'

const Library = ({songs}) => {
    
    const authModel = useAuthModel();
    const uploadModal = useUploadModel();
    const {user} = useUser()

    const onPlay = useOnPlay(songs)

    const onClick = () => {
        if(!user){
            return authModel.onOpen()
        } 

        return uploadModal.onOpen()
    }
  return (
    <div className='flex flex-col'>
        <div className='flex items-center justify-between px-5 pt-4'>
            <div className='inline-flex items-center gap-x-2'>
                <TbPlaylist size={26} className='text-neutral-400'/>
                <p className='text-neutral-400 font-medium text-md'>Your Library</p>
            </div>
            <AiOutlinePlus size={20} className='text-neutral-400 cursor-pointer hover:text-white transition' onClick={onClick}/>
        </div> 
        <div className='flex flex-col gap-y-2 mt-4 px-3'>
            {songs.map((item) => (
                // <div>{item.title}</div>
                <MediaItem onClick={(id) => onPlay(id)} key={item.id} data={item}/>
            ))}
        </div> 
    </div>
  )
}

export default Library