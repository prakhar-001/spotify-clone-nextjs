"use client"

import { useEffect, useState, useMemo } from "react"
import { useSessionContext } from "@supabase/auth-helpers-react"
import toast from "react-hot-toast"

const useGetSongByUserId = (id) => {
    const [isLoading, setIsLoading] = useState(false)
    const [song, setSong] = useState()

    const { supabaseClient } = useSessionContext();

    useEffect(() => {
      if(!id){
        return;
      }

      setIsLoading(true);

      const fetchSong = async () => {
        const { data, error } = await supabaseClient
          .from('songs')
          .select('*')
          .eq('id', id)
          .single();

        if(error){
            setIsLoading(false)
            return toast.error(error.message)
        }

        setSong(data);
        setIsLoading(false);
      }

      fetchSong();
    }, [id , supabaseClient])
    

    return useMemo(() => ({
        song,
        isLoading
    }), [song, isLoading])
}

export default useGetSongByUserId