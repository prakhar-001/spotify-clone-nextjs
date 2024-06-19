import getLikedSongs from '@/actions/getLikedSongs'
import Header from '@/components/Header';
import Image from 'next/image';
import React from 'react'
import LikedContent from './components/LikedContent';

export const revalidate = 0

const Liked = async () => {

    // FIX THIS
    // const songs = await getLikedSongs();

    const songs = [
        {
          id: 3,
          created_at: '2024-06-18T21:21:21.780739+00:00',
          title: 'Run Free',
          song_path: 'song-Run Free-lxkwrcxl',
          image_path: 'image-Run Free-lxkwrcxl',
          author: 'Deep Chills',
          user_id: '20e12acb-7135-468b-b668-8fa959674693'
        },
        {
          id: 2,
          created_at: '2024-06-18T21:18:14.00829+00:00',
          title: 'Chain',
          song_path: 'song-Chain-lxkwo1pi',
          image_path: 'image-Chain-lxkwo1pi',
          author: 'Bawa Gulzar',
          user_id: '20e12acb-7135-468b-b668-8fa959674693'
        },
        {
          id: 1,
          created_at: '2024-06-18T21:14:34.677136+00:00',
          title: 'Gracee',
          song_path: 'song-Gracee-lxkwk2s9',
          image_path: 'image-Gracee-lxkwk2s9',
          author: 'Babe Rexhaa',
          user_id: '20e12acb-7135-468b-b668-8fa959674693'
        }
      ];


  return (
    <div className='bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto'>
        <Header>
            <div className="mt-20">
                <div className="flex flex-col sm:flex-row items-center gap-x-5  ">
                    <div className="relative h-32 w-32 lg:h-44 lg:w-44">
                        <Image src='/images/liked.jpg' fill alt='Playlist' className='object-cover'/>
                    </div>
                    <div className="flex flex-col gap-y-2 mt-4 md:mt-0">
                        <p className="hidden sm:block font-semibold text-sm">
                            Playlist
                        </p>
                        <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold">
                            Liked Songs
                        </h1>
                    </div>
                </div>
            </div>
        </Header>
        <LikedContent songs={songs}/>
    </div>
  )
}

export default Liked