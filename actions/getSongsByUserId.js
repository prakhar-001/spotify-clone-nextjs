import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { createClient } from '@supabase/supabase-js';

const getSongsByUserId = async () => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL; // Ensure these environment variables are set
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    const supabase = createServerComponentClient({
        cookies: cookies
    })
    // console.log(supabase)

    const trial = createClient(supabaseUrl, supabaseAnonKey)
    // console.log(trial)    
    // console.log('-------------------------------------------------------------------------------------------------------')

    const {data: sessionData, error: sessionError} = await supabase.auth.getSession()
    // console.log(sessionData)
    if(sessionError) {
        console.log(sessionError.message);
        console.log("Error aagya")
        return []
    }

    const {data, error} = await supabase.from('songs').select('*').eq('user_id', sessionData.session?.user.id).order('created_at', {ascending: false});
    if(error) {
        // console.log(error.messagen);
        // console.log("Error 2")
    }

    return data || [];
}

export default getSongsByUserId;