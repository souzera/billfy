import axios from "axios"
import { useEffect, useState } from "react"
import { UsuarioBadge } from "../../components/usuario-badge"

import { RiSettings3Fill } from 'react-icons/ri'
import { CardPlaylist } from "../../components/playlist-container"
import { ListPlaylist } from "../../components/list-playlist"
import { license } from "../../connection/license"

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

    const params = new URLSearchParams(document.location.search)
    const code = params.get("code")

    const [access_token, setAccessToken] = useState('undefined')
    const [refresh_token, setRefreshToken] = useState('undefined')
    const [expires_in, setExpiresIn] = useState(0)
    const [scope, setScope] = useState('undefined')
    const [token_type, setTokenType] = useState('undefined')

    const authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        form: {
            code,
            redirect_uri,
            grant_type: "authorization_code"
        },
        headers: {
            'Authorization': 'Basic ' + (btoa(client_id + ':' + client_secret)),
            "Content-Type": 'application/x-www-form-urlencoded'
        },
    }


    const data = new FormData()
    data.append("code", code)
    data.append('redirect_uri', authOptions.form.redirect_uri)
    data.append("grant_type", authOptions.form.grant_type)



    useEffect(() => {
        axios(
            {
                method: "POST",
                url: authOptions.url,
                data: new URLSearchParams(data).toString(),
                headers: {
                    Authorization: authOptions.headers.Authorization,
                    "Content-Type": 'application/x-www-form-urlencoded'
                },
            }
        ).then(
            response => {
                console.log(response.data)
                setAccessToken(response.data.access_token)
                setRefreshToken(response.data.refresh_token)
                setExpiresIn(response.data.expires_in)
                setScope(response.data.scope)
                setTokenType(response.data.token_type)
            }
        )

    })

    return (

        <div className="flex flex-1 h-screen w-screen">


            <div className="flex p-6 flex-col w-[30%] ">
                <div className="flex items-center gap-0 py-3 px-5 rounded-2xl bg-[#121212]">
                    <div className="flex flex-1">
                        <UsuarioBadge
                            access_token={access_token}
                            token_type={token_type}/>
                    </div>

                    <div className="hover:scale-110 hover:rotate-180 transition duration-1000 ease-out">
                        <a href="https://www.spotify.com/br-pt/account/overview/?utm_source=spotify&utm_medium=menu&utm_campaign=your_account">
                            <RiSettings3Fill
                                className='text-2xl text-white'
                            />
                        </a>
                    </div>
                </div>

                <div className="flex flex-wrap flex-col text-black m-5 gap-4 ">
                    <p>Minhas Playlists</p>
                    <p className="text-sm"> {access_token} </p>
                    <p className="text-sm"> {refresh_token} </p>
                    <p className="text-sm"> {expires_in} </p>
                    <p className="text-sm"> {token_type} </p>
                    <p className="text-sm"> {scope} </p>
                </div>
            </div>

            <div className="flex flex-1 w-[70%] py-5 px-10 text-white flex-col gap-8">
                <ListPlaylist
                    title={"Minhas Playlists"}
                    access_token={access_token}
                    refresh_token={refresh_token}
                    expire_in={expires_in}
                    scope={scope}
                    token_type={token_type} />

                <div className="grid grid-cols-5">
                    <CardPlaylist
                        image={"https://i.scdn.co/image/ab67706c0000da8410cf1af5b29d5f20a38cee8c"}
                        name={"Aldebaram Hits"}
                        desc={"Seleção do mais brabo Aldebaran de touro"}
                        href={"https://open.spotify.com/playlist/4hH2imlN5WSxKe7qLfmvSh?si=953ff79920214167"} />
                </div>


            </div>
        </div>
    )
}


/*
    
*/