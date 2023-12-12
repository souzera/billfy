import axios from "axios"
import { useEffect, useState } from "react"
import { UsuarioBadge } from "../../components/usuario-badge"

import { RiSettings3Fill } from 'react-icons/ri'
import { license } from "../../connection/license"
import { AudioContainer } from "../../components/audio-container"
import { ListPlaylist } from "../../components/list-playlist"
//import { getSelectedPlaylist } from "../../util/selected-playlist"
//import ReactDOM from "react-dom"
import { usePlaylistContext } from "../../components/context/playlist-context"
import { useAuthContext } from "../../components/context/auth-context"

const client_id = license.client_id
const redirect_uri = license.redirect_uri
const client_secret = license.client_secret

export interface AccessTokenProps {
    access_token: string,
    refresh_token: string,
    expire_in: number,
    scope: string,
    token_type: string
}


export function Playlist() {

    const {auth} = useAuthContext()

    console.log(auth)

    const [access_token, setAccessToken] = useState('undefined')
    const [refresh_token, setRefreshToken] = useState('undefined')
    const [expires_in, setExpiresIn] = useState(0)
    const [scope, setScope] = useState('undefined')
    const [token_type, setTokenType] = useState('undefined')

    const authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        form: {
            code: auth,
            redirect_uri,
            grant_type: "authorization_code"
        },
        headers: {
            'Authorization': 'Basic ' + (btoa(client_id + ':' + client_secret)),
            "Content-Type": 'application/x-www-form-urlencoded'
        },
    }

    //console.log(code)

    const data = new FormData()
    //data.append("code", code)
    data.append('redirect_uri', authOptions.form.redirect_uri)
    data.append("grant_type", authOptions.form.grant_type)

    //console.log("Url Params")
    //console.log(new URLSearchParams(data))

    useEffect(() => {
        axios(
            {
                method: "POST",
                url: authOptions.url,
                //data: new URLSearchParams(data).toString(),
                data: {
                    code: auth,
                    redirect_uri: authOptions.form.redirect_uri,
                    grant_type: authOptions.form.grant_type,
                },
                headers: {
                    Authorization: authOptions.headers.Authorization,
                    "Content-Type": 'application/x-www-form-urlencoded'
                },
            }
        ).then(
            response => {
                setAccessToken(response.data.access_token)
                setRefreshToken(response.data.refresh_token)
                setExpiresIn(response.data.expires_in)
                setScope(response.data.scope)
                setTokenType(response.data.token_type)
            }
        )

    }, [])

    const { playlistSelected } = usePlaylistContext()
    console.log(playlistSelected)

    return (

        <div id="playlists-body" className="flex h-screen w-screen overflow-hidden">

            <div className="flex p-6 flex-col w-[30%]">

                <div className="flex items-center gap-0 py-3 px-5 rounded-2xl bg-[#121212] w-[100%] max-sm:w-[90vw]">

                    <div className="flex">
                        <UsuarioBadge
                            access_token={access_token}
                            token_type={token_type} />
                    </div>

                    <div className="hover:scale-110 hover:rotate-180 transition duration-1000 ease-out">
                        <a href="https://www.spotify.com/br-pt/account/overview/?utm_source=spotify&utm_medium=menu&utm_campaign=your_account">
                            <RiSettings3Fill
                                className='text-2xl text-white'
                            />
                        </a>
                    </div>
                </div>


                <div id="audio-track" >
                    {playlistSelected && <AudioContainer href={playlistSelected} />}
                </div>


            </div>

            <div className="flex flex-1 w-[70%] py-5 px-10 text-white flex-col gap-8 overflow-auto max-md:justify-center">

                <ListPlaylist
                    title={"Minhas Playlists"}
                    access_token={access_token}
                    refresh_token={refresh_token}
                    expire_in={expires_in}
                    scope={scope}
                    token_type={token_type} />

            </div>
        </div>
    )

}



/*

<div className="flex flex-wrap flex-col text-black m-5 gap-4 ">
                    <p>Minhas Playlists</p>
                    <p className="text-sm"> {access_token} </p>
                    <p className="text-sm"> {refresh_token} </p>
                    <p className="text-sm"> {expires_in} </p>
                    <p className="text-sm"> {token_type} </p>
                    <p className="text-sm"> {scope} </p>
                </div>
    
*/
