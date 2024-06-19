"use client"
import LikeButton from '@/components/LikeButton';
import MediaItem from '@/components/MediaItem';
import useOnPlay from '@/hooks/useOnPlay';
import { useUser } from '@/hooks/useUser';
import { useRouter } from 'next/navigation'
import React from 'react'
import { useEffect } from 'react';

const LikedContent = ({songs}) => {

    const onPlay = useOnPlay(songs)

    const router = useRouter();
    const {isLoading, user} = useUser();

    useEffect(() => {
        if(!isLoading && !user) router.replace('/');
    }, [isLoading, user])

    if(songs.length === 0){
        return (
            <div className='flex flex-col gap-y-2 w-full px-6 text-neutral-400'>
                <p>No liked songs</p>
            </div>
        )
    }

  return (
    <div className='flex flex-col gap-y-2 w-full p-6'>
        {songs.map((song) => (
            <div key={song.id} className='flex items-center w-full gap-x-4'>
                <div className="flex-1">
                    <MediaItem onClick={(id) => onPlay(id)} data={song}/>
                </div>
                <LikeButton songId={song.id}/>
            </div>
        ))}
    </div>
  )
}

export default LikedContent