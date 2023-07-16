
import { createContext, useContext, useState } from 'react'

const PlaylistContext = createContext<any>({})

export function PlalistContextProvider({children}:any){

    const [playlistSelected, _setPlaylistSelected] = useState<string|undefined>(undefined)


    const setPlaylistSelected = (id_playlist:string) => {
        _setPlaylistSelected(`https://open.spotify.com/embed/playlist/${id_playlist}` )
    }

    return <>
        <PlaylistContext.Provider value={{playlistSelected, setPlaylistSelected}}>
            {children}
        </PlaylistContext.Provider>
    </>

}

export function usePlaylistContext(){
    return useContext(PlaylistContext)
}