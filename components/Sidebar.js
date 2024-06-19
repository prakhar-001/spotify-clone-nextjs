"use client"
// THIS COMPONENT IS USED TO PASS SERVER COMPONENT INSIDE THE CLIENT COMPONENT 
// THIS THE MAIN PAGE THAT IS DISPLAYED ON THE WEB ITS LEFT SIDE CONTAINS THE SIDE BAR AND RIGHT SIDE CONTAINS THE ROUTE CONTENT
// ITS CHILDREN IS SAME AS THE CHILDREN OF LAYOUT.JS
import React from 'react'
import { usePathname } from 'next/navigation'
import {useMemo} from 'react'
import { HiHome } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import Box from './Box'
import SidebarItem from './SidebarItem'
import Library from './Library'
import Link from 'next/link'
import usePlayer from '@/hooks/usePlayer'
import { twMerge } from 'tailwind-merge'

const Sidebar = ({children, songs}) => {

    const pathname = usePathname();
    const player = usePlayer()

    const routes = useMemo(() => [
        {
            icon: HiHome,
            label: 'Home',
            active: pathname === '/',
            href: '/'
        },
        {
            icon: BiSearch,
            label: 'Search',
            active: pathname === '/search',
            href: '/search'
        },
        // {
        //     icon: BiSearch,
        //     label: 'Demo 1',
        //     active: pathname === '/demo1',
        //     href: '/demo1'
        // },
        // {
        //     icon: BiSearch,
        //     label: 'Demo 2',
        //     active: pathname === '/demo2',
        //     href: '/demo2'
        // }
    ], [pathname])

  return (
    <div className={twMerge(`
        flex h-screen
    `, player.activeId && 'h-[89vh]')}>
        {/* {children} */}
        <div className='hidden sm:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2'>
            <Box>
                <div className='flex flex-col gap-y-4 px-5 py-4'>
                    {
                        routes.map((item) => (
                            // {...item}: This syntax is known as the spread operator (...). It is used to pass all properties of the item object as props to the SidebarItem component. 
                            <SidebarItem key={item.label} {...item} />
                        ))
                    }
                </div>
            </Box>
          
            <Box className='overflow-y-auto h-full'>
                <Library songs={songs}/>
            </Box>
        </div>

        {/* CONTENT FOR ALL ROUTES */}
        <main className='h-full flex-1 overflow-y-auto py-2'>
            {children}
        </main>
    </div>
  )
}

export default Sidebar