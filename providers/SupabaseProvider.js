"use client"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
// ADDED
import { createClient } from '@supabase/supabase-js';

import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'

// ADDED
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const SupabaseProvider = ({children}) => {

    // const [supabaseClient] = useState(() => {
    //     createClientComponentClient()
    // })

    // ADDED
    const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
        {children}
    </SessionContextProvider>
  )
}

export default SupabaseProvider