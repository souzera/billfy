
import { useState, useEffect } from 'react'
import axios from 'axios'
import { AccessTokenProps } from "../routes/playlist/playlist"

export interface UsuarioProps {
    display_name: string,
    images: [
        {
            height?: number,
            url: string,
            width?: number
        }
    ],
    external_urls: {
        spotify: string,
    }
}

interface UsuarioBadgeProps {
    token_type: string,
    access_token: string
}

export function UsuarioBadge({ token_type, access_token }: UsuarioBadgeProps) {

    const auth = `${token_type} ${access_token}`

    const [usuario, setUsuario] = useState<UsuarioProps>()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseData = await axios.get('https://api.spotify.com/v1/me', {
                    headers: {
                        Authorization: auth,
                        "Content-Type": "application/json"
                    }
                })
                setUsuario(responseData.data)
            } catch (err) {
                console.log(err)
            }
        }

        fetchData()
    })

    return (
        <>
            <div className="flex items-center hover:bg-[#202020] text-white py-2 px-4 justify-start rounded-full hover:scale-105 transition duration-600 ease-in-out hover:ease-out gap-3">
                <div className='flex flex-1 h-[4rem] w-auto'>
                    <img className='border-solid border-black border-4 rounded-full' src={usuario?.images[0].url} alt="foto de perfil" />
                </div>
                <div className="flex flex-col w-[11rem] justify-start">
                    <span className="font-bold text-xl">
                        {usuario?.display_name}
                    </span>
                    <span className="text-zinc-700 hover:text-zinc-400 font-semibold">
                        <a href={usuario?.external_urls.spotify} target="_blank">Ver Perfil</a>
                    </span>
                </div>
            </div>
        </>
    )
}