"use client"

// THIS CONTAINS A NAVBAR AT TOP AND CONTENT AREA AT BOTTOM
// ITS CHILDREN IS SAME AS THE CHILDREN OF HOME OR / ROUTE

import { useRouter } from 'next/navigation'
import React from 'react'
import { twMerge } from 'tailwind-merge';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import Button from './Button';
import useAuthModel from '@/hooks/useAuthModal';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useUser } from '@/hooks/useUser';
import { FaUserAlt } from 'react-icons/fa';
import toast from 'react-hot-toast';
import Link from 'next/link';


const Header = ({children, className}) => {

    const authModel = useAuthModel();
    const router = useRouter();

    const supabaseClient = useSupabaseClient();
    const {user} = useUser();

    const handleLogout = async () => {
        const {error} = await supabaseClient.auth.signOut();

        router.refresh()

        if(error) {
            toast.error(error.message)
        }
        else{
            toast.success('Logged Out')
        }
    }

    return (
        <div className={twMerge(`h-fit bg-gradient-to-b from-emerald-800 p-6`, className)}>
            {/* THIS IS THE HEADER CONTENT */}
            <div className='w-full mb-4 flex items-center justify-between'>
                <div className='hidden sm:flex gap-x-2 items-center'>
                    <button 
                    className='rounded-full bg-black flex items-center justify-center hover:opacity-75 transition'
                    onClick={() => router.back()}
                    >
                        <RxCaretLeft size={35} className='text-white'/>
                    </button>
                    <button 
                    className='rounded-full bg-black flex items-center justify-center hover:opacity-75 transition'
                    onClick={() => router.forward()}
                    >
                        <RxCaretRight size={35} className='text-white'/>
                    </button>
                </div>
                <div className='flex sm:hidden gap-x-2 items-center'>
                    <Link href={'/'}>
                        <button
                        className='rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition'
                        >
                            <HiHome size={20} className='text-black'/>
                        </button>
                    </Link>
                    <Link href={'/search'}>
                        <button
                        className='rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition'
                        >
                            <BiSearch size={20} className='text-black'/>
                        </button>
                    </Link>
                </div>
                <div className='flex justify-between items-center gap-x-4'>
                    {user ? (
                        <div className='flex items-center gap-x-4'>
                            <Button 
                            onClick={handleLogout}
                            className='bg-white px-6 py-2'
                            >
                                Logout
                            </Button>
                            <Button
                            onClick={() => router.push('/account')}
                            className='bg-white'
                            >
                                <FaUserAlt/>
                            </Button>
                        </div>
                    )
                    :
                    (<>
                    <div>
                        <Button
                        onClick={authModel.onOpen}
                        className='bg-transparent text-neutral-300 font-medium'
                        >
                            Sign Up
                        </Button>
                    </div>
                    <div>
                        <Button
                        onClick={authModel.onOpen}
                        className='bg-white px-6 py-2'
                        >
                            Log In
                        </Button>
                    </div>
                    </>
                    )}
                </div>
            </div>

            {/* THIS IS THE ROUTE CONTENT FOR / ROUTE */}
            {children}
        </div>
    )
}

export default Header